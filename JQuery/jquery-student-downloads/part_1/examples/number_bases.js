var octal = 0377;
var octal_string = "377";
var octal_as_int = parseInt(octal_string, 8); 
var an_int = 255;
var int_as_octal = an_int.toString(8);

print(octal);
print(octal_as_int);
print(int_as_octal);

if (octal == octal_as_int) {
	print("octal and octal_as_int are equivalent!");
}
if (octal === octal_as_int) {
	print("but they are strictly the same");
}