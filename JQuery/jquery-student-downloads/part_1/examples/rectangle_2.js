var Rectangle = function(base, height) {
	this.base = base;
	this.height = height;
}

Rectangle.prototype.area = function() {
    return this.base * this.height;
}

rectangleOne = new Rectangle(5, 6);
rectangleTwo = new Rectangle(2, 4);

print(rectangleOne.area());
print(rectangleTwo.area());

print(rectangleOne.hasOwnProperty("base")); 
print(rectangleOne.hasOwnProperty("height"));
print(rectangleOne.hasOwnProperty("area"));