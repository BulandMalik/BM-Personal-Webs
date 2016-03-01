oranges = ['Valencia', 'Tangerines', 'Mandarines'];
apples = ['Macintosh', 'Granny Smith', 'Gravestein'];

oranges_and_apples = []

for (var i=0; i < 3; i++) {
	oranges_and_apples[i] = [oranges[i], apples[i]];
}

for (var index in oranges_and_apples) {
	print("You say " + oranges_and_apples[index].join(" and I say "));
}