/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _foundation = __webpack_require__(2);

	var _foundation2 = _interopRequireDefault(_foundation);

	var _util = __webpack_require__(3);

	(0, _jquery2['default'])(document).foundation();

	console.log(_foundation2['default'].utils.is_medium_up());

	var Helper = new _util.Helpers();
	var sliders = Helper.query(".animated-orbit");

	/*sliders.map( (item) => {
		let animOrbit = new AnimatedOrbit(item);
		animOrbit.init();

		Helper.addEvent(item, "after-slide-change.fndtn.orbit", e => {
			console.log('after change');
			//this.animateActive();
		});
		return item;
	} );*/

	sliders.map(function (item) {
		var animOrbit = new _util.AnimatedOrbit(item);
		animOrbit.init();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Foundation;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Helpers = (function () {
		function Helpers() {
			_classCallCheck(this, Helpers);
		}

		_createClass(Helpers, [{
			key: "query",
			value: function query(selector) {
				var parent = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

				var items = parent.querySelectorAll(selector);
				return Array.prototype.slice.call(items);
			}
		}, {
			key: "createEvent",
			value: function createEvent(eventName) {
				var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
				var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
				var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

				var customEvent = new Event(eventName);
				return customEvent;
			}
		}, {
			key: "addEvent",
			value: function addEvent(elem, event, fn) {
				if (elem.addEventListener) {
					elem.addEventListener(event, fn, false);
				} else if (elem.attachEvent) {
					elem.attachEvent("on#{event}", fn);
				} else {
					elem[event] = fn;
				}
			}
		}]);

		return Helpers;
	})();

	exports.Helpers = Helpers;

	var AnimatedOrbit = (function () {
		function AnimatedOrbit(el) {
			_classCallCheck(this, AnimatedOrbit);

			this.el = el;
			this.helper = new Helpers();
		}

		_createClass(AnimatedOrbit, [{
			key: "init",
			value: function init() {
				var animateds = this.helper.query('[animated]');

				animateds.map(function (item) {
					return item.classList.add("animated");
				});

				this.addEvents();
				this.animateActive();
			}
		}, {
			key: "animateActive",
			value: function animateActive() {
				this.getActive();
				this.hideAll();
				this.animateIn(this.active);
			}
		}, {
			key: "getActive",
			value: function getActive() {
				this.active = this.helper.query('li.active', this.el)[0];
			}
		}, {
			key: "addEvents",
			value: function addEvents() {
				var _this = this;

				$(this.el).on("after-slide-change.fndtn.orbit", function (e) {
					_this.animateActive();
				});

				$(this.el).on("before-slide-change.fndtn.orbit", function (e) {
					_this.hideInactive();
				});
			}
		}, {
			key: "animateIn",
			value: function animateIn(slide) {
				var animateds = this.helper.query('[animated]', slide);

				animateds.map(function (item) {
					item.classList.remove(item.dataset.animateOut);
					item.classList.add(item.dataset.animateIn);
					return item;
				});
			}
		}, {
			key: "animateOut",
			value: function animateOut(slide) {
				var animateds = this.helper.query('[animated]', slide);

				animateds.map(function (item) {
					item.classList.remove(item.dataset.animateIn);
					item.classList.add(item.dataset.animateOut);
					return item;
				});
			}
		}, {
			key: "hideInactive",
			value: function hideInactive() {
				var _this2 = this;

				var slides = this.helper.query('li:not(.active)', this.el);

				slides.map(function (item) {
					return _this2.animateOut(item);
				});
			}
		}, {
			key: "hideAll",
			value: function hideAll() {
				var _this3 = this;

				var slides = this.helper.query('li', this.el);

				slides.map(function (item) {
					return _this3.animateOut(item);
				});
			}
		}]);

		return AnimatedOrbit;
	})();

	exports.AnimatedOrbit = AnimatedOrbit;

/***/ }
/******/ ]);