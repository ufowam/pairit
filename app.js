// Including libraries

var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    static = require('node-static'),
    md5h = require('MD5'),
    allclients = {},
    drivers = {},
    navigators = {},
    lastCode = {};
var nodemailer = require("nodemailer");
var qs = require('querystring');

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "pairit3@gmail.com",
        pass: ""
    }
});

var fileServer = new static.Server('./');
    
app.listen(9000);

function handler (request, response) {

var matchRoomRequest = /\/room\/(.{32})/;;

    switch(true){

        case request.url == '/create_session':

            var roomID;


            request.addListener('end', function () {

                roomID = md5h(new Date().getTime());
                response.writeHead(302, {
                    
                    'Location' : 'room/' + roomID
                });

                response.end();
                //fileServer.serveFile('/workspace.html', 200, {}, request, response);      
            });

            break;

        case matchRoomRequest.test(request.url):

            request.addListener('end', function () {
                fileServer.serveFile('/workspace.html', 200, {}, request, response);        
            });


            break;

        case request.url == "/download":

            var filedata;

            request.addListener('data', function (data) {
                filedata = data.toString().split('=')[1];

            });

            request.addListener('end', function(){

                response.setHeader("Content-Disposition", "attachment");
                response.setHeader("flename", "export.txt");
                response.setHeader("Content-Type", "text/plain");
                response.end(unescape(filedata));
            });


            break;
        case request.url == '/emailer':
            var filedata;
            request.addListener('data', function(data){
                //var json = qs.parse(data);
                var email = unescape(data.toString().split('=')[2]);
                var link = unescape(data.toString().split('=')[1]);
                //console.log("link: " + json.link);
                console.log("email: " + email);
                console.log("link: " + link);
                // setup e-mail data with unicode symbols
                var mailOptions = {
                    from: "Fred Foo ✔ <ufowam@gmail.com>", // sender address
                    to: email, // list of receivers
                    subject: "Invitation to join a pair programming session", // Subject line
                    text: link, // plaintext body
                    html: "<b>"+ link+"</b>" // html body
                };

                // send mail with defined transport object
                smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                     console.log(error);
                     console.log("to: " + email);
                }else{
                    console.log("Message sent: " + response.message);
                };

                // if you don't want to use this transport object anymore, uncomment following line
                 //smtpTransport.close(); // shut down the connection pool, no more messages
                });                
            });

            break;

        default:

            request.addListener('end', function () {
                fileServer.serve(request, response);
            });

            break;
    }


}

io.set('log level', 3);

io.sockets.on('connection', function (socket) {

    socket.on('joinroom', function(data){

        console.log("User joined:" + data.roomID);
        console.log("User id:" + socket.id);

        socket.join(data.roomID);
        allclients[socket.id.toString()] = data.name;

        if(!(data.roomID in drivers)){
            drivers[data.roomID] = data.name;
        }else if(!(data.roomID in navigators)){
            navigators[data.roomID] = data.name;      
        }else{
            //add guests here.
        }

        console.log(drivers[data.roomID]);

        console.log(navigators[data.roomID]);

        //if()


        //console.log(allclients[socket.id.toString()]);


        io.sockets.in(data.roomID).emit('rolesreceive', {
            'nav' : navigators[data.roomID],
            'driver': drivers[data.roomID]
        });


    });

    socket.on('chatsend', function (data) {
        
        console.log("Chat rx: " + data.msg);
        io.sockets.in(data.roomID).emit('chatreceive', data);
    });


    socket.on('codesend', function (data){
        
        data['navigator'] = navigators[data.roomID];
        data['driver'] = drivers[data.roomID];

        io.sockets.in(data.roomID).emit('codereceive', data);

        lastCode[data.roomID] = data.code;

        console.log(data);
    });

    socket.on('getusers', function(data){

        socket_ids = io.sockets.clients(data.roomID);
        var response = new Array();

        for(var i=0; i<socket_ids.length; i++){
            response.push(allclients[socket_ids[i].id]);
        }

        socket.emit('sendusers', {
            'users': response
        });

    });

    socket.on('switchpartner', function(data){

        drivers[data.roomID] = navigators[data.roomID];

        navigators[data.roomID] = data.driver;

        io.sockets.in(data.roomID).emit('rolechange', {
           
           'nav': navigators[data.roomID],
             'driver': drivers[data.roomID]
        });

    });


    socket.on('runlint', function(data){

        var fs = require('fs');

        var fileName = /tmp/ + md5h(new Date().getTime()) + ".txt";

        fs.writeFile(fileName, data.code, function(err) {
    
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }

        });


        var exec = require('child_process').exec;
        exec('python lint.py ' + fileName, function callback(error, stdout, stderr){

            io.sockets.in(data.roomID).emit('lintresult', {
                'result': stdout
            });
        });
    });

    socket.on('sync', function(data){
    //
        data['code'] = lastCode[data.roomID];
        data['navigator'] = navigators[data.roomID];
        data['driver'] = drivers[data.roomID];

        io.sockets.in(data.roomID).emit('codereceive', data);
    });

});