var global_1 = "Hello";
global_2 = "Dolly!"
global_3 = 1;

print("global_1 ==> " + global_1);
print("global_2 ==> " + global_2);
print("this.global_1 ==> " + this.global_1);
print("this.global_2 ==> " + this.global_2);
print("this.global_function(global_1, global_2) ==> " 
      + this.global_function(global_1, global_2, global_3));
print("global_1 ==> " + global_1);
print("global_3 ==> " + global_3);
print("global_4 ==> " + global_4);

function global_function(value_1, value_2) {
	var local_to_the_function = value_1 + " " + value_2;
	global_4 = "Oh no I shouldn't be out here!";
	var theGlobalOne = global_3;
	var global_3 = "I not really global_3";
	//print("Hey ==>" + theGlobalOne);
	value_1 = "Hola";
	return local_to_the_function;
}