import $ from 'jquery';
import Foundation from 'foundation';

import {Helpers, AnimatedOrbit} from './util';

let Helper = new Helpers;
let sliders = Helper.query(".animated-orbit");

sliders.map( item =>{
	let animOrbit = new AnimatedOrbit(item);
	animOrbit.init();
} );