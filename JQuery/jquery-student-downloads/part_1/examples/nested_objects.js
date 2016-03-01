var delivery = {
	to : "Anne Sam-Bodden",
	address : {
		street : "10544 East Meadowhill Dr.",
		city : "Scottsdale",
		state : "AZ",
		zip : 85255
	},
	sku : "8675309",
	quantity : 2
};

print(delivery.to);
print(delivery["to"]);
print(delivery.address.street);
print(delivery["address"]["street"]);