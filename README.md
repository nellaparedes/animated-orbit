# Animated Orbit

Add some nice animations to your Orbit Slider. You can trigger [animate.css](https://github.com/daneden/animate.css) animations to any element of the slide.

## Live Demo
  - Click here to see some examples

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
```

### Development

Want to contribute? Great!


