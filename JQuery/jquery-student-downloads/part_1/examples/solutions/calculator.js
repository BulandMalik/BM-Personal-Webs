var Calculator = function(initial) {
	this.result = initial || 0.0;
	
	this.add =  function(n) { this.result = this.result + n; }	
	this.subtract =  function(n) { this.result = this.result - n; }
	this.multiply =  function(n) { this.result = this.result * n; }
	this.divide =  function(n) { this.result = this.result / n; }
	this.reset = function() { this.result = 0.0; }
}