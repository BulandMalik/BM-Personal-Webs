var f = function(x) { 
	return (x < 1) ? 0 : x + arguments.callee(x - 1);
};

var f = function(x) { 
	return (x < 1) ? 0 : x + f(x - 1);
};

var g = f;

print(f(10));

print(g(10));