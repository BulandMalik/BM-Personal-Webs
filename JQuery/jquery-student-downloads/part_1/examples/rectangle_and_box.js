function Rectangle(base, height) {
	this.base = base;
	this.height = height;
}

Rectangle.prototype.area = function() {
  return (this.base * this.height);
}

var Box = function(base, height, depth) {
	Rectangle.call( this, base, height);
	this.depth = depth;
}
Box.prototype = new Rectangle();

Box.prototype.volume = function() {
  return this.area() * this.depth;
}

var myBox = new Box(5, 6, 3);

print("myBox area  ==> " + myBox.area());
print("myBox volume ==> " + myBox.volume());

