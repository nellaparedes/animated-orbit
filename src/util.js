
export class Helpers
{
	query(selector, parent = document){
		let items = parent.querySelectorAll(selector);
		return Array.prototype.slice.call(items);
	}

	createEvent(eventName, bubble = false, cancel = false, detail = null){
	    var customEvent = new Event(eventName);
	    return customEvent;
	}

	addEvent(elem, event, fn)
	{
		if(elem.addEventListener)
		{
			elem.addEventListener(event, fn, false);
		}
		else if (elem.attachEvent)
		{
			elem.attachEvent("on#{event}", fn);
		}
		else
		{
		  elem[event] = fn;
		}
	}
}


export class AnimatedOrbit
{
	constructor(el)
	{
		this.el = el;
		this.helper = new Helpers;
	}

	init(){
		var animateds = this.helper.query('[animated]');

		animateds.map( (item) => {
			return item.classList.add("animated")
		});

		this.addEvents();
		this.animateActive();
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
}