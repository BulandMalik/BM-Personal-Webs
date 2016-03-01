var f = function j(x) { 
	return (x < 1) ? 0 : x + j(x - 1);
};
print(f(10));