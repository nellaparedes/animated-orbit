
export class Helpers
{
	query(selector, parent = document){
		let items = parent.querySelectorAll(selector);
		return Array.prototype.slice.call(items);
	}
}

export class AnimatedOrbit
{
	constructor(el)
	{
		this.el = el;
		this.helper = new Helpers;
		this.vendors = ["moz", "webkit"];
	}

	init(){
		var animateds = this.helper.query('[animated]');

		animateds.map( (item) => {
			return this.initStyles(item);
		});

		this.addEvents();
		this.animateActive();
	}

	initStyles(el)
	{
		let styles = new Map();
		
		el.classList.add("animated");

		if(el.dataset.delay)
		{
			styles.set('animationDelay', el.dataset.delay);
		}

		if(el.dataset.duration)
		{
			styles.set('animationDuration', el.dataset.duration);
		}

		this.vendorSet(el, styles);

	}

	animateActive(){
		this.getActive();
		this.hideAll();
		this.animateIn(this.active);
	}

	getActive(){
		this.active = this.helper.query('li.active',this.el)[0];
	}

	addEvents(){

		$(this.el).on("after-slide-change.fndtn.orbit", e =>{
			this.animateActive();
		});

		$(this.el).on("before-slide-change.fndtn.orbit", e =>{
			this.hideInactive();
		});
	}

	animateIn(slide){
		var animateds = this.helper.query('[animated]', slide);

	    animateds.map( (item) => {
			item.classList.remove(item.dataset.animateOut)
	    	item.classList.add(item.dataset.animateIn);
			return item;
		});

	}

	animateOut(slide){
		var animateds = this.helper.query('[animated]', slide);

	    animateds.map( (item) => {
			item.classList.remove(item.dataset.animateIn)
	    	item.classList.add(item.dataset.animateOut);
			return item;
		});
	}

	hideInactive(){

	    let slides = this.helper.query('li:not(.active)',this.el);

	    slides.map( (item) => {
			return this.animateOut(item);
		} );
	}

	hideAll(){

		let slides = this.helper.query('li',this.el);

	    slides.map( (item) => {
			return this.animateOut(item);
		} );
	}

	vendorSet(elem, properties){

		for (var [name, value] of properties.entries()) 
		{
			elem.style[name] = value;

			this.vendors.forEach( vendor => 
	    	{
	    		let property = vendor + name.charAt(0).toUpperCase() + name.substr(1);
	    		elem.style[property] = value;
	    	});
		}
	    return elem;	      
	}
    
}