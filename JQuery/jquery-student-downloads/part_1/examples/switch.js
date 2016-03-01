// switch
var today = new Date();
var day = today.getDay()
switch(day) {
	case 1: 
	    print("Looks like a case of the Mondays!");
	    break;
	case 2: case 3: case 4:
	    print("The middle of the week is for the birds!");
	    break;
	case 5:
	    print("Just pretend you're working until 4pm ;-)");
	    break;
	default:
	    print("The flipping weekend is here!");
}