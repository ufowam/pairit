// Including libraries

var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    static = require('node-static'),
    md5h = require('MD5'),
    allclients = {};

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


        console.log(allclients[socket.id.toString()]);
    });

    socket.on('chatsend', function (data) {
        
        console.log("Chat rx: " + data.msg);
        io.sockets.in(data.roomID).emit('chatreceive', data);
    });


    socket.on('codesend', function (data){
        
        io.sockets.in(data.roomID).emit('codereceive', data);
    });

    socket.on('getusers', function(data){

        socket_ids = io.sockets.clients(data.roomID);
        var response = new Array();
        //console.log("requesting users: " + data.roomID);
        //console.log("socket_ids:   " + socket_ids);

        for(var i=0; i<socket_ids.length; i++){
            response.push(allclients[socket_ids[i].id]);
        }

        socket.emit('sendusers', {
            'users': response
        });

    });

});