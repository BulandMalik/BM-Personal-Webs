function load_script(script) {
	var head = document.getElementsByTagName('head')[0];
	var script_tag = document.createElement('script');
	script_tag.type = 'text/javascript';
	script_tag.src = script;
	head.appendChild(script_tag);
}