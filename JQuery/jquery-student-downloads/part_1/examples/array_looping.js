var dogs = [{ name : "Bullseye", breed : "Miniature Bull Terrier" }, 
            { name : "Lassie", breed : "Collie" }, 
            { name : "Rin Tin Tin", breed : "German Shepperd" },
            { name : "Benji", breed : "Mutt" },
            { name : "Cujo", breed : "Saint Bernard" }];

for (var index in dogs) {
	dog = dogs[index]
    print(dog.name + " is a " + dog.breed);
}