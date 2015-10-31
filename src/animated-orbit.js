import AnimatedOrbit from './util';
import $ from 'jquery';

$(".animated-orbit").each( (i,orbit) => {
	let animOrbit = new AnimatedOrbit(orbit);
	animOrbit.init();
});

