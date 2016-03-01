var text_info = {
};

print(text_info.data);
text_info.count_chars();
for (letter in text_info.letters) {
	print(letter + " ==> " + text_info.letters[letter]);
}
print("o ==> " + text_info.count_for('o'));