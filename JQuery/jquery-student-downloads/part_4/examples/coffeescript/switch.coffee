today = new Date()
day = today.getDay()
switch day
  when 1 then print "Looks like a case of the Mondays!"
  when 2,3,4 then print "The middle of the week is for the birds!"
  when 5 then print "Just pretend you're working until 4pm ;-)"
  else print "The flipping weekend is here!"