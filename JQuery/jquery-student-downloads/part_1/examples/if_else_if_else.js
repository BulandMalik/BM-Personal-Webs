// if-else-if-else
var today = new Date();
var hour = today.getHours();
if (hour < 12) {
	print("Good Morning");
} else if ((hour >= 12) && (hour <= 17)) {
	print("Good Afternoon");
} else if ((hour >= 18) && (hour <= 22)) {
	print("Good Evening");
} else {
	print("Good Night");
}