function multiply(a) {
	return function(b) {
		return a * b;
	}
}

// create a new function by using partial application
var doubleIt = multiply(2);

// use the new function
print(doubleIt(512));