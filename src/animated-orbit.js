import $ from 'jquery';
import Foundation from 'foundation';

import {Helpers, AnimatedOrbit} from './util';

$(document).foundation();

console.log(Foundation.utils.is_medium_up());

let Helper = new Helpers;
let sliders = Helper.query(".animated-orbit");

/*sliders.map( (item) => {
	let animOrbit = new AnimatedOrbit(item);
	animOrbit.init();

	Helper.addEvent(item, "after-slide-change.fndtn.orbit", e => {
		console.log('after change');
		//this.animateActive();
	});
	return item;
} );*/

sliders.map( item =>{
	let animOrbit = new AnimatedOrbit(item);
	animOrbit.init();
} );