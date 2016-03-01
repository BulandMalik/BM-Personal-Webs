
	
		function add_them (num)
		{
			return (num<1 ? 1 : (num * add_them(num-1)) );
		}
	
		print (add_them(4));
