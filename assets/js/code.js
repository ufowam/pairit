var language = "python";
var editor;
var username;
var elem;
var roomID;
var socket;
var driver = null, nav = null;
var matchRoomRequest = /.*\/room\/(.{32})/;
var uploadClipBoard = "";
var errorLines = new Array();
function sendCode(from, to, text, next) {

	if (username == driver) {
		socket.emit('codesend', {
			'name' : username,
			'code' : editor.getValue(),
			'roomID' : roomID
		});
	}

	return false;
}


$(document).ready(function() {


	$('#files').on('change', handleFileSelect);
	$('#code').on('dragover', handleDragOver);
	$('#code').on('drop', handleDragOn);

	roomID = matchRoomRequest.exec(document.URL)[1];
	$('#uploadDummyForm').on('submit', function() {
		if (username != null && username == driver) {
			$('#uploadModal').modal('show');
		}
		return false;
	});
	$("#uploadForm").on('submit', function() {

		editor.setValue(uploadClipBoard);
		$('#uploadModal').modal('hide');
		return false;
	});

	$('#runlint').on('click', function(){

		
		if(username == driver){


			if(language == "python"){

				socket.emit('runlint', {
					'code': editor.getValue(),
					'roomID': roomID
				});

			}else{
				$('#alertMsg').html('<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button><strong>Error!</strong> Checker currently only supports Python.</div>');
			}

		}else{
			$('#alertMsg').html('<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button><strong>Error!</strong> Only the driver can run the lint.</div>');

		}

	});

	$('#nameform').on('submit', function() {

		username = $('#username').val();

		$('#myModal').modal('hide');

		comm();

		setUpEditor();

		window.setInterval(function() {
			socket.emit('getusers', {
			'name' : username,
			'roomID' : roomID
			});
		}, 2000);

		return false;
	});
	
	
	$('#switchpartner').on('submit', function(){

		if(username == driver){

			if(nav){

			socket.emit('switchpartner', {
				'driver': driver,
				'username': username,
				'roomID': roomID
			});	

			}else{
				$('#alertMsg').html('<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button><strong>Error!</strong> A navigator hasn\'t joined yet.</div>');		
			}

		}else{
			$('#alertMsg').html('<div class="alert"><button type="button" class="close" data-dismiss="alert">×</button><strong>Error!</strong> Only the driver can swtich modes.</div>');
		
		}

		return false;
	});

	//setUpEditor();

	//comm();

	$('#myModal').modal('show');

});

function handleDragOn(evt) {
	if (username != null && username != driver)
		return;
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.dataTransfer.files;
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ', f.size, ' bytes, last modified: ', f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a', '</li>');
	}
	editor.setValue("");
	editor.setValue('<ul>' + output.join('') + '</ul>');
}

function handleDragOver(evt) {
	if (username != null && username != driver)
		return;
	evt.stopPropagation();
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'copy';
}

/**
 * Read a local file from the evt.
 * @param {Object} evt
 */
function handleFileSelect(evt) {

	if (username != null && username != driver)
		return;
	var files = evt.target.files;
	// FileList object
	for (var i = 0, f; f = files[i]; i++) {

		var reader = new FileReader();

		// Closure to capture the file information.
		reader.onload = (function(theFile) {
			return function(e) {
				uploadClipBoard = e.target.result;
			};
		})(f);
		reader.readAsText(f);
	}
}

function setUpEditor() {

	editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		mode : {
			name : language
		},
		lineNumbers : true,
		indentUnit : 4,
		tabMode : "shift",
		theme : "monokai",
		matchBrackets : true,
		onChange : sendCode
	});

}

function updateRole(driver) {

	if (driver == username) {
		$('#currentrole').html("<span style='color: #a6e22e'>Driver</span>");

	} else {
		$('#currentrole').html("<span style='color: #D52664'>Navigator</span>");
	}
}

function comm() {

	// The URL of your web server (the port is set in app.js)
	//var url = 'http://localhost:9000';
	var doc = $(document), win = $(window), textbox = $('#text');

	var url = 'http://192.168.43.235:9000/';

	socket = io.connect(url);

	//alert(matchRoomRequest.exec(document.URL)[1]);

	socket.emit('joinroom', {
		'roomID' : roomID,
		'name' : username
	});

	socket.on('rolesreceive', function(data) {
		driver = data.driver;
		nav = data.nav;

		if (nav && nav == username) {
			editor.setOption("readOnly", "nocursor");

			socket.emit('sync', {
				'roomID': roomID
			});
		}

		updateRole(driver);
	});

	$('#chatsend').on('submit', function() {

		socket.emit('chatsend', {
			'name' : username,
			'msg' : $('#msg').val(),
			'roomID' : roomID
		});

		//$("#chatmsg").html($("#chatmsg").html() + username + ": " + $('#msg').val() + "<br/>");

		$("#msg").val("");

		return false;
	});

	socket.on('chatreceive', function(data) {
		//alert(data.text);
		if (data.name == nav) {
			$("#chatmsg").html($("#chatmsg").html() + '<span style="color:#D52664;">' + data.name + "</span>: " + data.msg + "<br/>");
		} else if (data.name == driver) {
			$("#chatmsg").html($("#chatmsg").html() + '<span style="color:#A6E22E;">' + data.name + "</span>: " + data.msg + "<br/>");
		}
		var elem = document.getElementById("chatmsg");
		elem.scrollTop = elem.scrollHeight;

	});

	socket.on('codereceive', function(data) {

		if (username == nav) {
			editor.setValue(data.code);
		}
	});

	socket.on('sendusers', function(data) {
		var listusers = $('#listusers');
		listusers.empty();
		for ( i = 0; i < data.users.length; i++) {
			if (data.users[i] == nav) {
				listusers.append('<li style="color:#D52664;">' + data.users[i] + '</li>');
			} else if (data.users[i] == driver) {
				listusers.append('<li style="color:#A6E22E;">' + data.users[i] + '</li>');
			}
		}
	});

	socket.on('rolechange', function (data){
		driver = data.driver;
		nav = data.nav;

		updateRole(driver);

		if(username == driver){
			editor.setOption("readOnly", false);
		}else{
			editor.setOption("readOnly", "nocursor");
		}
	});


	socket.on('lintresult', function (data){
		var p = JSON.parse(data.result);

		//alert(errorLines.length);

		for(var i=0; i<errorLines.length; i++){
			//alert(editor.getLineHandle(errorLines[i]-1));
			editor.clearMarker(editor.getLineHandle(errorLines[i]-1));
		}

		//alert("ere")

		errorLines = new Array();

		//alert(p);

		for (var key in p) {
 			if (p.hasOwnProperty(key)) {


 				errorLines.push(key);
 				editor.setMarker(editor.getLineHandle(key-1), '<a href="#" rel="tooltip" data-placement="right" class="errorLine" title="' + p[key] +'">●</a>'); 

    		//	alert(key + " -> " + p[key]);
  			}
		}

	$("[rel=tooltip]").tooltip();

	});

	window.setInterval(function() {
		socket.emit('getusers', {
			'name' : username,
			'roomID' : roomID
		});
	}, 2000);

}