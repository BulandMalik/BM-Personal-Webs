function many_args() {
	print(Array.prototype.slice.call(arguments).join(' '));
}

many_args('This', 'is', 'a', 'varargs', 'function');