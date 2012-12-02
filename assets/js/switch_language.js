$(document).ready(function() {
	$('#python').click(function (){
		editor.setOption('mode', 'python');
		$('#current_language').html('Python<b class="caret"></b>');
		socket.emit('switchlanguage', {
			'name': username,
			'roomID': roomID,
			'language': "python"
		});
	});

	$('#javascript').click(function (){
		editor.setOption('mode', 'javascript');
		$('#current_language').html('Javascript<b class="caret"></b>');
		socket.emit('switchlanguage', {
			'name': username,
			'roomID': roomID,
			'language': "javascript"
		});
	});
});