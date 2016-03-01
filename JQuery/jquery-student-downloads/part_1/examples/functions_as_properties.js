var address = {
	street : "10544 East Meadowhill Dr.",
	city : "Scottsdale",
	state : "AZ",
	zip : 85255,
	print_it : function () {
		print(this.street + ", " + this.city + " " + this.state + " " + this.zip);
	}
};

address.print_it();
address["print_it"]();