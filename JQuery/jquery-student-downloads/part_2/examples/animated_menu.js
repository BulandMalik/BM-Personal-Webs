(function($){
	$.fn.extend({ 
		animatedMenu: function(options) {

			var defaults = {
				animatePadding: 60,
				defaultPadding: 10,
	           	evenColor: '#ccc',
	           	oddColor: '#eee'
			};
			
			var options = $.extend(defaults, options);
		
	    	return this.each(function() {
				var o = options;
				var obj = $(this);				
				var items = $("li", obj);
				  
				$("li:even", obj).css('background-color', o.evenColor);				
				$("li:odd", obj).css('background-color', o.oddColor);					  
				  
				items.mouseover(
					function() {
						$(this).stop();
						$(this).animate({paddingLeft: o.animatePadding}, 300);
					}
				).mouseout(
					function() {
						$(this).stop();
						$(this).animate({paddingLeft: o.defaultPadding}, 300);
					}
				);
    		});
		}
	});
})(jQuery);
