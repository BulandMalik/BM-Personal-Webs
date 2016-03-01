var truthy_primitive_boolean = true;
var falsy_primitive_boolean = false;

var thuthy_object_boolean = new Boolean(true);
var falsy_object_boolean = new Boolean(false);

print(thuthy_object_boolean.toString());
print(thuthy_object_boolean.valueOf());
print(falsy_object_boolean.toString());
print(falsy_object_boolean.valueOf());

if (falsy_object_boolean) {
	print("Oops! I should be false!");
}

if (!falsy_object_boolean.valueOf()) {
	print("Ok, that's more like it!");
}

// primitive to object conversion
var new_boolean = Boolean(truthy_primitive_boolean);
print("The new value is " + new_boolean.valueOf());