(function($){ 
	jQuery.fn.animateEl = function()
 	{
 		$('[animated]',$(this)).each(function(){
	    	$(this).addClass('animated');
	    });

	    $(this).animateActiveSlide();
 	};

	jQuery.fn.animateActiveSlide = function()
 	{ 
	    var active = $(this).find('li.active');
	    var slides = $(this).find('li');

	    slides.each(function(){
	    	$(this).animateOutSlide();
	    });

	    active.animateInSlide();
 	};

 	jQuery.fn.animateInSlide = function()
 	{
	 	$('[animated]',$(this)).each(function(){
		   	$(this).removeClass($(this).data('animate-out'));
		   	$(this).addClass($(this).data('animate-in'));
	    }); 
 	};

 	jQuery.fn.animateOutSlide = function()
 	{
	 	$('[animated]',$(this)).each(function(){
		   	$(this).removeClass($(this).data('animate-in'));
		   	$(this).addClass($(this).data('animate-out'));
		}); 
 	};

	jQuery.fn.hideInactiveSlides = function()
 	{ 
	    var slides = $(this).find('li').not('.active');
	    slides.each(function(){
	    	$(this).animateOutSlide();
	    });
 	};
})(jQuery);

$(".animated-orbit").animateEl();

$(".animated-orbit").on("after-slide-change.fndtn.orbit", function(event, orbit) 
{
	$(this).animateActiveSlide();
});

$(".animated-orbit").on("before-slide-change.fndtn.orbit", function(event) 
{
	$(this).hideInactiveSlides();
});