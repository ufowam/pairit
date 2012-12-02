
var language = "python";
var editor;
var username;
var elem;

$(document).ready(function() {

	elem = $('#chatmsg');

	$('#username').val("John Smith");

	$('#nameform').on('submit', function() {

		username = $('#username').val();

		$('#myModal').modal('hide');	

		setUpEditor();

		comm();

		return false;
	});

	//setUpEditor();

	//comm();

	$('#myModal').modal('show');



});



function setUpEditor(){

	editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  	mode: {name: language},
  	lineNumbers: true,
  	indentUnit: 4,
  	tabMode: "shift",
  	theme: "monokai",
  	matchBrackets: true
	});
}

function comm(){

	// The URL of your web server (the port is set in app.js)
	//var url = 'http://localhost:9000';
	var doc = $(document), win = $(window), textbox = $('#text');

	var matchRoomRequest = /.*\/room\/(.{32})/;

	var roomID = matchRoomRequest.exec(document.URL)[1];

	alert(roomID);

	var url = 'http://localhost:9000/';

	var socket = io.connect(url);

	//alert(matchRoomRequest.exec(document.URL)[1]);

	socket.emit('joinroom', {
		'roomID' : roomID,
		'name' : username
	});

	$('#chatsend').on('submit', function() {

		socket.emit('chatsend', {
			'name' : username,
			'msg': $('#msg').val(),
			'roomID' : roomID
		});

		//$("#chatmsg").html($("#chatmsg").html() + username + ": " + $('#msg').val() + "<br/>");

		$("#msg").val("");

		return false;
	});

	socket.on('chatreceive', function(data){
		//alert(data.text);
		$("#chatmsg").html($("#chatmsg").html() + data.name + ": " + data.msg + "<br/>");
		var elem = document.getElementById("chatmsg");
		elem.scrollTop = elem.scrollHeight;

	});
}