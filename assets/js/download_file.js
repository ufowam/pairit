$(document).ready(function() {
	$('#download_gist').submit(function (){

		//alert("ok");
		//alert($('#filename').val());
		//alert($('#description').val());
		var code = editor.getValue();
		var filename = $('#filename').val();
		var description = $('#description').val();
		//alert(filename);
		//alert(description);
		var json = {
  			"description": description,
  			"public": true,
  			"files": {
    			filename: {
      				"content": code
    			}
  			}
		};

		var jsontext = JSON.stringify(json);
		jQuery.post("https://api.github.com/gists", jsontext, function(data, textStatus, jqXHR){
			var jsonobject = JSON.parse(data);
			var git_url = jsonobject.html_url;
			$('#upload_gist').modal('hide');
			$('#gist_url_div').modal('show');
			$('#gist_url').html(git_url);
		});
		return false;
	});
});