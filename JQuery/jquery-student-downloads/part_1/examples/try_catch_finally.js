function try_it() {
	try {
		iDontExist();
	} catch (error) {
		print("stop calling non-existent functions ==> " + error.message);
	} finally {
		print("... and we're done");
	}
	return "really we are";
}

print(try_it());