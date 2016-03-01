function many_args() {
	for (var i=0; i < arguments.length; i++) {
		print(arguments[i]);
	};

	var real_array = Array.prototype.slice.call(arguments);
	print(real_array.join(' '));
}

many_args('This', 'is', 'a', 'varargs', 'function');