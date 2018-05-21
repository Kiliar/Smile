$(document).ready(function(){
	function scale() {
		var cur_width = $( window ).width();
		if (cur_width < 480 ) {
			var coef = 480/cur_width;
			$("meta[name=viewport]").attr("content", "width=device-width, initial-scale="+coef);
		}
	}
	scale();
	$(window).resize(function() {
		
		scale();
	});
});