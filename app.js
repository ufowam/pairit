// Including libraries

var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    static = require('node-static'),
    md5h = require('MD5');

var fileServer = new static.Server('./');
    
app.listen(9000);

function handler (request, response) {

var matchRoomRequest = /\/room\/(.{32})/;;

    switch(true){

        case request.url == '/create_session':

            var roomID;

            request.addListener('data', function(data){
                roomID = md5h(new Date().getTime() + );



            });

            request.addListener('end', function () {
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

        socket.join(data.roomID);
    });

    socket.on('chatsend', function (data) {
        
        console.log("Chat rx: " + data.msg);
        io.sockets.in(data.roomID).emit('chatreceive', data);
    });
});