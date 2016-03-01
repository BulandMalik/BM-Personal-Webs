function start(date, time) {
	print(["On", date, "at", time, 
            "the", this.make, this.model,
            "says", "vroom!"].join(" "));	
}

var pinto = { 
	make : "Ford", 
    model : "Pinto",
};

start.apply( pinto, [ "09/13/2010", "4:13 PM" ] );
start.call( pinto,  "09/14/2010", "5:15 PM" );