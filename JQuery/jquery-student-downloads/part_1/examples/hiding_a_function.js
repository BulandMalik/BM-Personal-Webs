function a() {
  var result = "Neo says: " + b();
  return result;
  function b() { return "Whoa!"; }	
}
print(a());
print(b());