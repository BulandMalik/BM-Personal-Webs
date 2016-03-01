// alternate switch with ranging
var today = new Date();
var hour = today.getHours();
switch(true) {
	case (hour < 12):
		print("Good Morning");
		break;
	case ((hour >= 12) && (hour <= 17)):
		print("Good Afternoon")
		break;
	case ((hour >= 18) && (hour <= 22)):
		print("Good Evening");
		break;
	default:
		print("Good Night");
}