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

	var Helper = new _util.Helpers();
	var sliders = Helper.query(".animated-orbit");

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

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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
		}]);

		return Helpers;
	})();

	exports.Helpers = Helpers;

	var AnimatedOrbit = (function () {
		function AnimatedOrbit(el) {
			_classCallCheck(this, AnimatedOrbit);

			this.el = el;
			this.helper = new Helpers();
			this.vendors = ["moz", "webkit"];
		}

		_createClass(AnimatedOrbit, [{
			key: "init",
			value: function init() {
				var _this = this;

				var animateds = this.helper.query('[animated]');

				animateds.map(function (item) {
					return _this.initStyles(item);
				});

				this.addEvents();
				this.animateActive();
			}
		}, {
			key: "initStyles",
			value: function initStyles(el) {
				var styles = new Map();

				el.classList.add("animated");

				if (el.dataset.delay) {
					styles.set('animationDelay', el.dataset.delay);
				}

				if (el.dataset.duration) {
					styles.set('animationDuration', el.dataset.duration);
				}

				this.vendorSet(el, styles);
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
				var _this2 = this;

				$(this.el).on("after-slide-change.fndtn.orbit", function (e) {
					_this2.animateActive();
				});

				$(this.el).on("before-slide-change.fndtn.orbit", function (e) {
					_this2.hideInactive();
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
				var _this3 = this;

				var slides = this.helper.query('li:not(.active)', this.el);

				slides.map(function (item) {
					return _this3.animateOut(item);
				});
			}
		}, {
			key: "hideAll",
			value: function hideAll() {
				var _this4 = this;

				var slides = this.helper.query('li', this.el);

				slides.map(function (item) {
					return _this4.animateOut(item);
				});
			}
		}, {
			key: "vendorSet",
			value: function vendorSet(elem, properties) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {

					for (var _iterator = properties.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var _step$value = _slicedToArray(_step.value, 2);

						var name = _step$value[0];
						var value = _step$value[1];

						elem.style[name] = value;

						this.vendors.forEach(function (vendor) {
							var property = vendor + name.charAt(0).toUpperCase() + name.substr(1);
							elem.style[property] = value;
						});
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return elem;
			}
		}]);

		return AnimatedOrbit;
	})();

	exports.AnimatedOrbit = AnimatedOrbit;

/***/ }
/******/ ]);