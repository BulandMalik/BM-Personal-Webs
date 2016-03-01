function print(text) {
	$(document).ready(function(){
		$('body').append('<p>'+text+'</p>').append('<br/>');
    });
}