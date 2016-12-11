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

	"use strict";
	var main_1 = __webpack_require__(1);
	var renderer;
	var stage = new PIXI.Container();
	var init = function () {
	    renderer = new PIXI.CanvasRenderer(800, 800);
	    renderer.view.style.width = "100%";
	    renderer.view.style.height = "100%";
	    document.getElementById("content").appendChild(renderer.view);
	    window.addEventListener("resize", resize);
	    main_1.Drawer.init(stage);
	    resize();
	    draw();
	};
	var draw = function () {
	    TWEEN.update();
	    renderer.render(stage);
	    main_1.Drawer.update();
	    requestAnimationFrame(draw);
	};
	var resize = function () {
	    var width = document.documentElement.clientWidth * 2;
	    var height = document.documentElement.clientHeight * 2;
	    renderer.resize(width, height);
	    main_1.Drawer.resize(width, height);
	};
	window.onload = init;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var drawer_1 = __webpack_require__(2);
	var Drawer;
	(function (Drawer) {
	    var _stage;
	    var canvas = new drawer_1.default();
	    var background = new PIXI.Graphics();
	    function init(stage) {
	        _stage = stage;
	        _stage.addChild(background);
	        canvas.init();
	        _stage.addChild(canvas.canvas);
	    }
	    Drawer.init = init;
	    function update() {
	    }
	    Drawer.update = update;
	    function resize(width, height) {
	        background.clear();
	        background.beginFill(0xFFFFFF);
	        background.drawRect(0, 0, width, height);
	    }
	    Drawer.resize = resize;
	})(Drawer || (Drawer = {}));
	exports.Drawer = Drawer;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var DrawerCanvas = (function () {
	    function DrawerCanvas() {
	        this.canvas = new PIXI.Graphics();
	    }
	    DrawerCanvas.prototype.resize = function (width, height) {
	    };
	    DrawerCanvas.prototype.init = function () {
	        this.initMouseEvent();
	    };
	    DrawerCanvas.prototype.initMouseEvent = function () {
	        var _this = this;
	        //タッチ禁止
	        var drawing = false;
	        this.canvas.lineStyle(10, 0xff0000);
	        document.addEventListener("touchstart", function (e) {
	            e.preventDefault();
	            _this.canvas.moveTo(e.touches[0].clientX * 2, e.touches[0].clientY * 2);
	            console.log(1);
	        });
	        document.addEventListener("touchmove", function (e) {
	            e.preventDefault();
	            _this.canvas.lineTo(e.touches[0].clientX * 2, e.touches[0].clientY * 2);
	            console.log(2);
	        });
	        document.addEventListener("touchend", function (e) {
	            e.preventDefault();
	        });
	    };
	    return DrawerCanvas;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DrawerCanvas;


/***/ }
/******/ ]);