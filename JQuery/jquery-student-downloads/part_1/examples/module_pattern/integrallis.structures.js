var INTEGRALLIS = {}
INTEGRALLIS.structures = (function() {
	var Stack = function(options) {
		this.push = function(element) { 
			elements.push(element);
		}
		
		this.pop = function() { 
			return elements.pop();
		}
		
		this.size = function() {
			return elements.length;
		}
		
		this.clear = function() {
			elements = [];
		}
		
		this.toString = function() {
			return '[ ' + elements.join(',') + ' ]';
		}
	
		// initializes the stack
		var elements = [];
	}
	
	return { Stack : Stack }
})();