var rawData = "{\
	'aList' : [1, 3, 5, 7, 11],\
	'anotherObject' : { 'a': 1, 'b': 2, 'c': 3}\
}";

var data = eval('(' + rawData + ')');

print(data.anotherObject.b);
print(data.aList[2]);

