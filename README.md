# Animated Orbit

[![version](https://img.shields.io/npm/v/animated-orbit.svg?style=flat-square)](https://www.npmjs.com/package/animated-orbit)
[![downloads](https://img.shields.io/npm/dm/animated-orbit.svg?style=flat-square)](https://www.npmjs.com/package/animated-orbit)

Add some nice animations to your Orbit Slider. You can trigger [animate.css](https://github.com/daneden/animate.css) animations to any element of the slide.

## Live Demo
  - Click [here](http://nellaparedes.github.io/animated-orbit/) to see some examples

## Documentation

### Dependencies

- [Foundation 5](http://foundation.zurb.com/)
- [jQuery](https://jquery.com/)
- [Animate.css](https://daneden.github.io/animate.css/)
    
### Installation
- Bower
```bash
   bower install animated-orbit
```
- NPM
```bash
   npm install animated-orbit
```
### Basic Usage
- Add **animated-orbit** class to your orbit slider
- Add **animated** attribute to each element you want to animate
- Add aditional attributes animate-in, animate-out, animate-delay and animate-duration to costumize effect, transition, delay and duration

```html
    <link rel="stylesheet" type="text/css" href="css/foundation.css">
	<link rel="stylesheet" type="text/css" href="css/animate.min.css">
    <ul class="orbit-content animated-orbit" data-orbit>
    	<li data-orbit-slide="headline-1">
			<div class="panel">
	            <h2 animated data-animate-in="fadeInLeft" data-animate-out="fadeOutLeft" data-delay="0.5s" data-duration="1s">Headline 1</h2>
				<h3 animated data-animate-in="slideInLeft" data-animate-out="slideOutLeft" data-delay="1s">Subheadline</h3>
			</div>
		</li>
		<li data-orbit-slide="headline-2">
			<div class="panel">
                <h2 animated data-animate-in="fadeInLeft" data-animate-out="fadeOutLeft" data-delay="0.5s">Headline 2</h2>
				<h3 animated data-animate-in="slideInLeft" data-animate-out="slideOutLeft" data-delay="1s">Subheadline</h3>
			</div>
		</li>
		<li data-orbit-slide="headline-3">
			<div class="panel">
			    <h2 animated data-animate-in="fadeInLeft" data-animate-out="fadeOutLeft" data-delay="0.5s">Headline 3</h2>
				<h3 animated data-animate-in="slideInLeft" data-animate-out="slideOutLeft" data-delay="1s">Subheadline</h3>
			</div>
		</li>
	</ul>
	
	<script src="js/vendor/jquery.js"></script>
	<script src="js/foundation.min.js"></script>
	<script src="js/animated-orbit.min.js"></script>
	<script>$(document).foundation();</script>
```

### Development

Want to contribute? Great!


