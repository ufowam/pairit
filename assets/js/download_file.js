$(document).ready(function() {
	$('#download_raw').click(function (){

		alert('elo');
		var code = $('#code').html();
		socket.emit('downloadcode', {
				'name' : username,
				'code': code
			});
	});
});