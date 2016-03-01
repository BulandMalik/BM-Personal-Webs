var mixed_array = [
    42,
    "Zaphod Beeblebrox",
    { title : "Hitchhiker's Guide to the Galaxy", publisher : "Megadodo" },
    function () { return this[0]; },
    ["a", "e", "i", "o", "u"]
];

for (var i=0; i < mixed_array.length; i++) {
	if ( typeof mixed_array[i] == "function") {
		print(mixed_array[i]());
	} else {
		print(mixed_array[i]);
	}
}