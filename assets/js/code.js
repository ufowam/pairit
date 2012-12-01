
var language = "python";
var editor;

$(document).ready(function() {

	setUpEditor();

	comm();

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

	var url = 'http://192.168.43.235:9000/';

	var socket = io.connect(url);

	//alert(matchRoomRequest.exec(document.URL)[1]);

	socket.emit('joinroom', {
		'roomID' : roomID
	});

	$('#chatsend').on('submit', function() {

		socket.emit('chatsend', {
			'msg': $('#msg').val(),
			'roomID' : roomID
		});

		$("#msg").val("");

		return false;
	});

	socket.on('chatreceive', function(data){
		//alert(data.text);
		textbox.val(data.text);
	});
}