Array.prototype.each = function(func) { 
};

[1, 2, 3].each(function() { print(this); });

["What's", "up", "Doc","?"].each(function() { print(this.toUpperCase()) });

[4, 5, 6].each(function(index) { print(index + ": " + this); });