var an_array = [1, "Two", 3, "Cuatro", 5, "Six", 7];
var another_array = [8, 9, 10];
var elementIsANumber = function(n) { return (typeof n == "number"); }
var print_squared = function(n) { print(n + " squared is " + (n * n)); }
var cubed = function(n) { return Math.pow(n, 3); }

print(an_array);
print("Length ==> " + an_array.length);
print("Concatenating ==> " + an_array.concat(another_array));
print("All Numbers? ==> " + an_array.every(elementIsANumber));
print("All Numbers? ==> " + another_array.every(elementIsANumber));
print("Some Numbers? ==> " + an_array.some(elementIsANumber));
print("Just the numbers ==> " + an_array.filter(elementIsANumber));
another_array.forEach(print_squared);
print(an_array.join(" and "));
print("The index of 'Two' is ==> " + an_array.indexOf('Two'));
print("The index of 'Three' is ==> " + an_array.indexOf('Three'));
print("All cubed ==> " + another_array.map(cubed));
print("Poppped ==> " + another_array.pop() + ", array ==> " + another_array);
new_array = another_array.push(11, 12);
print("Pushed 11, 12 ==>" + another_array);
print("Reversed ==> " + an_array.reverse());
print("Shifted ==> " + another_array.shift() + ", array ==> " + another_array);
another_array.unshift(44);
print("UnShifted 44 ==> " + another_array);
print("Sorting ==> " + an_array.sort());
