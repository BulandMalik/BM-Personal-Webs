var person = { first : "Brian", middle : "Michael", last : "Sam-Bodden" };
print("middle" in person);
print(person.first + " " + person.middle + " " + person.last);
delete person.middle;
print("middle" in person);
print(person.first + " " + person.middle + " " + person.last);