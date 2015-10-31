import $ from 'jquery';

class AnimatedOrbit
{
	constructor(el)
	{
		this.el = el;
	}

	init(){
		$('[animated]',$(this.el)).addClass('animated');
		this.animateActive();
		this.addListeners();
	}

	animateActive(){
		this.getActive();
		//this.hideAll();
		this.animateIn(this.active);
	}

	getActive(){
		this.active = $(this.el).find('li.active');
	}

	addListeners(){
		$(this.el).on("after-slide-change.fndtn.orbit", el => {
			this.animateActive();
		});

		$(this.el).on("before-slide-change.fndtn.orbit", el => {
			this.hideInactive();
		});
	}

	animateIn(slide){
	 	$('[animated]',$(slide)).each( (i, el) => {

	 		$(el).hide();

		   	$(el).removeClass($(el).data('animate-out'));
		   	$(el).addClass($(el).data('animate-in'));
	    }); 

	}

	animateOut(slide){

	 	$('[animated]',$(slide)).each( (i,el) => {
	 		$(el).removeClass($(el).data('animate-in'));
		   	$(el).addClass($(el).data('animate-out'));
		}); 
	}

	hideInactive(){

	    let slides = $(this.el).find('li').not('.active');
	    slides.each( (i,slide) => {
	    	this.animateOut(slide);
	    });
	}

	hideAll(){
		let slides = $(this.el).find('li');

	    slides.each((i, slide) => {
	    	this.animateOut(slide);
	    });
	}

}

export default AnimatedOrbit;