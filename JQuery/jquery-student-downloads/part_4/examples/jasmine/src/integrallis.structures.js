var INTEGRALLIS = {}
INTEGRALLIS.structures = {}

INTEGRALLIS.structures.Stack = function() {
	this.elements = [];
};

INTEGRALLIS.structures.Stack.prototype.push = function(element) { 
	this.elements.push(element);
}

INTEGRALLIS.structures.Stack.prototype.pop = function() { 
	return this.elements.pop();
}

INTEGRALLIS.structures.Stack.prototype.peek = function() { 
	return this.elements[this.elements.length - 1];
}

INTEGRALLIS.structures.Stack.prototype.size = function() {
	return this.elements.length;
}

INTEGRALLIS.structures.Stack.prototype.clear = function() {
	this.elements = [];
}

INTEGRALLIS.structures.Stack.prototype.isEmpty = function() {
	return this.elements.length == 0;
}

INTEGRALLIS.structures.Stack.prototype.toString = function() {
	return '[ ' + this.elements.join(',') + ' ]';
}


