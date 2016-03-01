function closure_maker(closure_maker_argument) {
    var local_to_the_function = "and";
    return function(closure_arg) {
	    return ([closure_maker_argument, local_to_the_function, closure_arg]).join(' ');
    }
}

var closure_1 = closure_maker("Benny");
var closure_2 = closure_maker("Johnny");

print(closure_1("Jets"));
print(closure_2("Chachi"));
print(closure_1("Joon"));
print(closure_2("June"));