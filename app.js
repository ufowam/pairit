// Including libraries

var app = require('http').createServer(handler),
	io = require('socket.io').listen(app),
	static = require('node-static'),
	md5h = require('MD5');

var fileServer = new static.Server('./');
	
app.listen(9000);

function handler (request, response) {

    request.addListener('end', function () {
        fileServer.serve(request, response);
    });

}

io.set('log level', 3);