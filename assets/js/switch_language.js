$(document).ready(function() {

	var languages = new Array("Python", "Javascript", "Go", "MySQL", "Ruby");
	//var languages = new Array("python", "javascript");

	var htmlElements = "";
	for (var i = 0; i < languages.length; i++) {
		htmlElements += '<li><a id="' + languages[i] + '" href="#">' + languages[i] + '</a></li>\n';
	}
	document.getElementById("language_list").innerHTML = htmlElements;
	$('#Python').click(function() {
		editor.setOption('mode', 'python');
		$('#current_language').html('Python<b class="caret"></b>');
		socket.emit('switchlanguage', {
			'name' : username,
			'roomID' : roomID,
			'language' : "Python"
		});
	});

	$('#Javascript').click(function() {
		editor.setOption('mode', 'javascript');
		$('#current_language').html('Javascript<b class="caret"></b>');
		socket.emit('switchlanguage', {
			'name' : username,
			'roomID' : roomID,
			'language' : "Javascript"
		});
	});
	
	$('#MySQL').click(function(e) {
		editor.setOption('mode', 'mysql');
		$('#current_language').html('MySQL' + '<b class="caret"></b>');
		socket.emit('switchlanguage', {
			'name' : username,
			'roomID' : roomID,
			'language' : 'MySQL'
		});
	});
	$('#Ruby').click(function(e) {
		editor.setOption('mode', 'ruby');
		$('#current_language').html('Ruby' + '<b class="caret"></b>');
		socket.emit('switchlanguage', {
			'name' : username,
			'roomID' : roomID,
			'language' : 'Ruby'
		});
	});

	$('#Go').click(function(e) {
		editor.setOption('mode', 'go');
		$('#current_language').html('Go' + '<b class="caret"></b>');
		socket.emit('switchlanguage', {
			'name' : username,
			'roomID' : roomID,
			'language' : 'Go'
		});
	});
});
