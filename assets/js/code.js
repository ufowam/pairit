
var language = "python";
var editor;
var username;
var elem;
var roomID;
var socket;
var driver = null, nav = null;

function sendCode(from, to, text, next){
		
		socket.emit('codesend', {
			'name' : username,
			'code': editor.getValue(),
			'roomID' : roomID
		});

		return false;
}


$(document).ready(function() {

	elem = $('#chatmsg');

	$('#nameform').on('submit', function() {

		username = $('#username').val();

		$('#myModal').modal('hide');	

		comm();

		setUpEditor();

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
  	matchBrackets: true,
  	onChange: sendCode
	});

}


function updateRole(driver){

	if(driver == username){
		$('#currentrole').html("<span style='color: #a6e22e'>Driver</span>");

	}else{
		$('#currentrole').html("<span style='color: #D52664'>Navigator</span>");
	}
}

function comm(){

	// The URL of your web server (the port is set in app.js)
	//var url = 'http://localhost:9000';
	var doc = $(document), win = $(window), textbox = $('#text');

	var matchRoomRequest = /.*\/room\/(.{32})/;

	roomID = matchRoomRequest.exec(document.URL)[1];

	var url = 'http://localhost:9000/';

	socket = io.connect(url);

	//alert(matchRoomRequest.exec(document.URL)[1]);

	socket.emit('joinroom', {
		'roomID' : roomID,
		'name' : username
	});

	socket.on('rolesreceive', function (data){
		driver = data.driver;
		nav = data.nav;

		if(nav && nav == username){
			editor.setOption("readOnly", "nocursor");
		}

		updateRole(driver);
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
		if (data.name == nav){
			$("#chatmsg").html($("#chatmsg").html() + '<span style="color:#D52664;">' +data.name + "</span>: " + data.msg + "<br/>");
		}
		else if (data.name == driver){
			$("#chatmsg").html($("#chatmsg").html() + '<span style="color:#A6E22E;">'+data.name + "</span>: " + data.msg + "<br/>");
		}
		var elem = document.getElementById("chatmsg");
		elem.scrollTop = elem.scrollHeight;

	});

	socket.on('codereceive', function (data){

		//Don't update for the user who made the emit.
		//if(data.name != username){
		//	editor.setValue(data.code);
		//}
	});

	socket.on('sendusers', function (data){
		var listusers = $('#listusers');
		listusers.empty();
		for (i = 0; i< data.users.length; i++){
			if (data.users[i] == nav){
				listusers.append('<li style="color:#D52664;">' + data.users[i] + '</li>');
			}
			else if (data.users[i] == driver){
				listusers.append('<li style="color:#A6E22E;">' + data.users[i] + '</li>');
			}
		}
	});

	window.setInterval(function(){
		socket.emit('getusers', {
			'name': username,
			'roomID': roomID
		});
	}, 2000);

}