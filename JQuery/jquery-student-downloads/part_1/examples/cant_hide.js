function a() {
  var result = "Neo says: " + b();
  return result;
  var b = function() { return "Whoa!"; }	
}
print(a());