/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/sprites sync recursive \\.svg$":
/*!****************************************!*\
  !*** ./src/assets/sprites sync \.svg$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow.svg": "./src/assets/sprites/arrow.svg",
	"./checkbox.svg": "./src/assets/sprites/checkbox.svg",
	"./erro_input.svg": "./src/assets/sprites/erro_input.svg",
	"./facebook.svg": "./src/assets/sprites/facebook.svg",
	"./falha.svg": "./src/assets/sprites/falha.svg",
	"./sucesso.svg": "./src/assets/sprites/sucesso.svg",
	"./twitter.svg": "./src/assets/sprites/twitter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/sprites sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/sprites/arrow.svg":
/*!**************************************!*\
  !*** ./src/assets/sprites/arrow.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "arrow",
  "use": "arrow-usage",
  "viewBox": "0 0 66 67",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 66 67\" id=\"arrow\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M65 33.497C64.998 15.547 50.67.998 32.997 1 15.324 1.002 1 15.554 1 33.503 1.002 51.45 15.328 66 33 66c17.666-.02 31.982-14.56 32-32.503z\" stroke=\"#F59C00\" stroke-width=\"2\" /><path d=\"M18 28.5l15 15m0 0l15-15\" stroke=\"#FFF\" stroke-width=\"5\" stroke-linecap=\"round\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/assets/sprites/checkbox.svg":
/*!*****************************************!*\
  !*** ./src/assets/sprites/checkbox.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "checkbox",
  "use": "checkbox-usage",
  "viewBox": "0 0 25 25",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" id=\"checkbox\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M19.65 10.008l-7.744 7.647c-.232.23-.537.345-.842.345-.305 0-.61-.115-.842-.345l-3.873-3.823a1.164 1.164 0 010-1.664 1.2 1.2 0 011.685 0l3.03 2.992 6.902-6.815a1.2 1.2 0 011.685 0c.465.46.465 1.203 0 1.663z\" fill=\"#FAFAFA\" fill-rule=\"nonzero\" /><rect stroke=\"#FFF\" stroke-width=\"2\" x=\"1\" y=\"1\" width=\"23\" height=\"23\" rx=\"5\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/assets/sprites/erro_input.svg":
/*!*******************************************!*\
  !*** ./src/assets/sprites/erro_input.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "erro_input",
  "use": "erro_input-usage",
  "viewBox": "0 0 25 25",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\" id=\"erro_input\"><g stroke=\"#D7443E\" fill=\"none\" fill-rule=\"evenodd\"><path stroke-width=\"2\" stroke-linecap=\"round\" d=\"M12.5 6.5V15\" /><circle stroke-width=\"2\" cx=\"12.5\" cy=\"12.5\" r=\"11.5\" /><circle cx=\"12.5\" cy=\"18.5\" r=\"1\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/assets/sprites/facebook.svg":
/*!*****************************************!*\
  !*** ./src/assets/sprites/facebook.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "facebook",
  "use": "facebook-usage",
  "viewBox": "0 0 1000 1000",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\" id=\"facebook\"><path d=\"M990 500c0-270.6-219.4-490-490-490S10 229.4 10 500s219.4 490 490 490 490-219.4 490-490zm-935.5 0C54.5 254 254 54.5 500 54.5S945.5 254 945.5 500 746.1 945.5 500 945.5C254 945.5 54.5 746 54.5 500z\" /><path d=\"M518.8 782.8V500h93.3l14.7-93.7h-108v-47c0-24.5 8-47.8 43.1-47.8h70.2V218h-99.6c-83.7 0-106.6 55.1-106.6 131.6v56.7h-57.5V500h57.5v282.8h92.9z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/assets/sprites/falha.svg":
/*!**************************************!*\
  !*** ./src/assets/sprites/falha.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "falha",
  "use": "falha-usage",
  "viewBox": "0 0 44 44",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 44 44\" id=\"falha\"><g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M37.405 6.445c8.552 8.554 8.547 22.417-.012 30.964-8.559 8.547-22.43 8.542-30.982-.012-8.548-8.55-8.548-22.403 0-30.952 8.503-8.554 22.335-8.599 30.894-.1l.1.1z\" fill=\"#D7443E\" /><path fill=\"#D4E1F4\" d=\"M32.5 15.16L25.66 22l6.84 6.84-3.66 3.66L22 25.66l-6.84 6.84-3.66-3.66L18.34 22l-6.84-6.84 3.66-3.66L22 18.34l6.84-6.84z\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/assets/sprites/sucesso.svg":
/*!****************************************!*\
  !*** ./src/assets/sprites/sucesso.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "sucesso",
  "use": "sucesso-usage",
  "viewBox": "0 0 45 44",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 45 44\" id=\"sucesso\"><g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M22.44 0C34.54 0 44.35 9.809 44.35 21.908c0 12.1-9.809 21.908-21.908 21.908-12.1 0-21.908-9.809-21.908-21.908C.498 9.843 10.25.035 22.316 0h.125z\" fill=\"#3BB54A\" /><path fill=\"#D4E1F4\" d=\"M34.875 16.494l-15.182 15.48-8.502-8.607 3.461-3.468 5.04 5.078 11.721-11.95z\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/assets/sprites/twitter.svg":
/*!****************************************!*\
  !*** ./src/assets/sprites/twitter.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "twitter",
  "use": "twitter-usage",
  "viewBox": "0 0 273.4 222.2",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 273.4 222.2\" id=\"twitter\"><path d=\"M273.4 26.3c-10.1 4.5-20.9 7.5-32.2 8.8 11.6-6.9 20.5-17.9 24.7-31-10.9 6.4-22.9 11.1-35.7 13.6A55.919 55.919 0 00189.3 0c-31 0-56.1 25.1-56.1 56.1 0 4.4.5 8.7 1.5 12.8C88 66.5 46.7 44.2 19 10.3c-4.8 8.3-7.6 17.9-7.6 28.2 0 19.5 9.9 36.6 25 46.7-9.2-.3-17.8-2.8-25.4-7v.7c0 27.2 19.3 49.8 45 55-4.7 1.3-9.7 2-14.8 2-3.6 0-7.1-.4-10.6-1 7.1 22.3 27.9 38.5 52.4 39-19.2 15-43.4 24-69.7 24-4.5 0-9-.3-13.4-.8 24.8 15.9 54.3 25.2 86 25.2 103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3 11.1-8 20.6-17.9 28.1-29.1z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_svg_extractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/svg-extractor */ "./src/scripts/svg-extractor.js");
/* harmony import */ var _scripts_svg_extractor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_svg_extractor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/mask */ "./src/scripts/mask.js");
/* harmony import */ var _scripts_form_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/form-contact */ "./src/scripts/form-contact.js");
/* harmony import */ var _scripts_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/intro */ "./src/scripts/intro.js");
/* harmony import */ var _scripts_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/modal */ "./src/scripts/modal.js");






document.addEventListener("DOMContentLoaded", function (event) {
  Object(_scripts_mask__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_scripts_form_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_scripts_intro__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_scripts_modal__WEBPACK_IMPORTED_MODULE_5__["default"])();
  document.body.classList.add("page-loaded");
});

/***/ }),

/***/ "./src/scripts/form-contact.js":
/*!*************************************!*\
  !*** ./src/scripts/form-contact.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormContact; });
/* harmony import */ var _libs_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/rules */ "./src/scripts/libs/rules.js");
/* harmony import */ var vanilla_masker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
/* harmony import */ var vanilla_masker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_masker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/validation */ "./src/scripts/libs/validation.js");
/* harmony import */ var _libs_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/constants */ "./src/scripts/libs/constants.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/scripts/modal.js");





function FormContact() {
  const form = document.querySelector("[data-form-contact]");
  Object(_libs_validation__WEBPACK_IMPORTED_MODULE_2__["RegisterValidations"])(_libs_rules__WEBPACK_IMPORTED_MODULE_0__["default"]);
  form.addEventListener("submit", async event => {
    event.preventDefault();
    await Object(_libs_validation__WEBPACK_IMPORTED_MODULE_2__["RunValidations"])(_libs_rules__WEBPACK_IMPORTED_MODULE_0__["default"]);
    let checkValidation = form.querySelector(".error-message");

    if (checkValidation) {
      return false;
    }

    const cpfField = form.querySelector("#cpf");
    const phoneField = form.querySelector("#phone");
    slabCpf(cpfField);
    slabPhone(phoneField);
    var formdata = new FormData(form);
    formdata.set("CUSTOMER_ID_", slabCpf(cpfField));
    formdata.set("MOBILE_NUMBER_", slabPhone(phoneField));
    formdata.set("TERMS", true);
    const options = {
      method: "POST",
      body: formdata
    };

    try {
      const url = "https://5f0db52c11b7f60016056f13.mockapi.io/contacts";
      const response = await fetch(url, options);
      Object(_modal__WEBPACK_IMPORTED_MODULE_4__["showSuccessModal"])();
    } catch {
      Object(_modal__WEBPACK_IMPORTED_MODULE_4__["showErrorModal"])();
    }
  });
}

function slabCpf(field) {
  let cpf = vanilla_masker__WEBPACK_IMPORTED_MODULE_1___default.a.toPattern(field.value, _libs_constants__WEBPACK_IMPORTED_MODULE_3__["unmaskPatterns"].cpf);
  let index = 0;
  let loop = true;

  while (loop) {
    if (cpf[index] === "0") {
      index++;
    } else {
      loop = false;
    }
  }

  let slabCpf = cpf.substring(index);
  console.log(slabCpf);
  return slabCpf;
}

function slabPhone(field) {
  return vanilla_masker__WEBPACK_IMPORTED_MODULE_1___default.a.toPattern(field.value, _libs_constants__WEBPACK_IMPORTED_MODULE_3__["unmaskPatterns"].phone);
}

/***/ }),

/***/ "./src/scripts/intro.js":
/*!******************************!*\
  !*** ./src/scripts/intro.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Intro; });
/* harmony import */ var _libs_ticking_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/ticking-scroll */ "./src/scripts/libs/ticking-scroll.js");
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jump.js */ "./node_modules/jump.js/dist/jump.module.js");


function Intro() {
  let isVisible = true;
  const arrowDown = document.querySelector("[data-signal-down]");
  const targetId = arrowDown.getAttribute("data-jump");
  const targetEl = document.querySelector(targetId);
  Object(_libs_ticking_scroll__WEBPACK_IMPORTED_MODULE_0__["tickingScroll"])(position => {
    if (position > 0 && isVisible) {
      isVisible = false;
      arrowDown.classList.add("hide");
    }

    if (position === 0 && isVisible === false) {
      arrowDown.classList.remove("hide");
      isVisible = true;
    }
  });
  arrowDown.addEventListener("click", () => {
    Object(jump_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetEl);
  });
}

/***/ }),

/***/ "./src/scripts/libs/constants.js":
/*!***************************************!*\
  !*** ./src/scripts/libs/constants.js ***!
  \***************************************/
/*! exports provided: maskPatterns, unmaskPatterns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskPatterns", function() { return maskPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmaskPatterns", function() { return unmaskPatterns; });
const maskPatterns = {
  cpf: "999.999.999-99",
  phone: "(99) 99999-9999"
};
const unmaskPatterns = {
  cpf: "99999999999",
  phone: "99999999999"
};

/***/ }),

/***/ "./src/scripts/libs/rules.js":
/*!***********************************!*\
  !*** ./src/scripts/libs/rules.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vanilla_masker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
/* harmony import */ var vanilla_masker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_masker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/scripts/libs/constants.js");



/* harmony default export */ __webpack_exports__["default"] = ([{
  query: "[data-validate-email]",
  test: value => validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(value),
  message: "Esse e-mail é inválido. O formato correto é assim: exemplo@email.com"
}, {
  query: "[data-validate-require]",
  test: value => value !== "",
  message: "Este campo é obrigatório"
}, {
  query: "[data-validate-cpf]",
  test: testDigitCPF,
  message: "Cpf é inválido"
}, {
  query: "[data-validate-phone]",
  test: testPhone,
  message: "Número de telefone inválido."
}, {
  query: "[data-validate-terms]",
  test: value => value === true,
  message: "Aceite os termos e condições para continuar."
}]);

function testDigitCPF(paramCpf) {
  let sum = 0;
  let rest;
  let cpf = vanilla_masker__WEBPACK_IMPORTED_MODULE_1___default.a.toPattern(paramCpf, _constants__WEBPACK_IMPORTED_MODULE_2__["unmaskPatterns"].cpf);
  if (cpf == "00000000000") return false;

  for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);

  rest = sum * 10 % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;
  sum = 0;

  for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);

  rest = sum * 10 % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

function testPhone(value) {
  let phone = vanilla_masker__WEBPACK_IMPORTED_MODULE_1___default.a.toPattern(value, _constants__WEBPACK_IMPORTED_MODULE_2__["unmaskPatterns"].phone);
  return phone.length === 11;
}

/***/ }),

/***/ "./src/scripts/libs/ticking-scroll.js":
/*!********************************************!*\
  !*** ./src/scripts/libs/ticking-scroll.js ***!
  \********************************************/
/*! exports provided: tickingScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickingScroll", function() { return tickingScroll; });
function tickingScroll(callback) {
  let lastPosition = 0;
  let ticking = false;
  window.addEventListener("scroll", function () {
    lastPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        callback(lastPosition);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/***/ }),

/***/ "./src/scripts/libs/validation.js":
/*!****************************************!*\
  !*** ./src/scripts/libs/validation.js ***!
  \****************************************/
/*! exports provided: RegisterValidations, RunValidations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterValidations", function() { return RegisterValidations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunValidations", function() { return RunValidations; });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);

function RegisterValidations(rules) {
  rules.forEach(({
    query,
    message,
    test
  }) => {
    registerValidation({
      inputs: document.querySelectorAll(query),
      test,
      message
    });
  });
}
function RunValidations(rules) {
  return new Promise((resolve, reject) => {
    rules.forEach(({
      query,
      message,
      test
    }) => {
      runValidation({
        inputs: document.querySelectorAll(query),
        test,
        message
      });
    });
    setTimeout(() => {
      resolve();
    }, 300);
  });
}

function registerValidation({
  inputs,
  test,
  message
}) {
  inputs.forEach(input => {
    let inputType = input.getAttribute("type");
    input.addEventListener("focus", () => {
      hideErrorMessage(input);
    });

    if (inputType !== "checkbox") {
      input.addEventListener("blur", () => {
        let fieldValue = input.value;
        fieldValue = input.getAttribute("type") === "checkbox" ? input.checked : fieldValue;

        if (test(fieldValue) === false) {
          showErrorMessage(input, message);
        }
      });
    }
  });
}

async function runValidation({
  inputs,
  test,
  message
}) {
  inputs.forEach(input => {
    let inputType = input.getAttribute("type");
    let inputValue = inputType === "checkbox" ? input.checked : input.value;

    if (test(inputValue) === false) {
      showErrorMessage(input, message);
    }
  });
}

function showErrorMessage(el, message) {
  el.classList.add("input-invalid");
  let parent = el.getAttribute("type") === "checkbox" ? el.parentElement.parentElement : el.parentElement;
  let messageShowing = parent.querySelector(".error-message");

  if (messageShowing) {
    return;
  }

  let newEl = document.createElement("div");
  let icon = getIcon();
  let spanMessage = document.createElement("span");
  spanMessage.innerHTML = message;
  newEl.append(icon);
  newEl.append(spanMessage);
  newEl.classList.add("error-message");
  parent.append(newEl);
}

function hideErrorMessage(el) {
  el.classList.remove("input-invalid");
  let parent = el.getAttribute("type") === "checkbox" ? el.parentElement.parentElement : el.parentElement;
  let message = parent.querySelector(".error-message");
  message && message.remove();
}

function getIcon() {
  let svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
  useElem.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#erro_input");
  svgElem.appendChild(useElem);
  return svgElem;
}

/***/ }),

/***/ "./src/scripts/mask.js":
/*!*****************************!*\
  !*** ./src/scripts/mask.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var vanilla_masker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-masker */ "./node_modules/vanilla-masker/lib/vanilla-masker.js");
/* harmony import */ var vanilla_masker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_masker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/constants */ "./src/scripts/libs/constants.js");


function Mask() {
  // CPF Mask
  const cpfs = document.querySelectorAll("[data-mask-cpf]");
  cpfs.forEach(cpf => {
    vanilla_masker__WEBPACK_IMPORTED_MODULE_0___default()(cpf).maskPattern(_libs_constants__WEBPACK_IMPORTED_MODULE_1__["maskPatterns"].cpf);
  }); // Phone mask

  const phones = document.querySelectorAll("[data-mask-phone]");
  phones.forEach(phone => {
    vanilla_masker__WEBPACK_IMPORTED_MODULE_0___default()(phone).maskPattern(_libs_constants__WEBPACK_IMPORTED_MODULE_1__["maskPatterns"].phone);
  });
}

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/*! exports provided: default, showSuccessModal, showErrorModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccessModal", function() { return showSuccessModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showErrorModal", function() { return showErrorModal; });
function Modal() {
  let modals = document.querySelectorAll("[data-modal]");
  let closers = document.querySelectorAll("[data-modal-close]");
  closers.forEach(button => {
    button.addEventListener("click", event => {
      modals.forEach(i => i.classList.remove("show"));
    });
  });
}
function showSuccessModal() {
  let modal = document.querySelector("[data-modal-form-success]");
  modal.classList.add("show");
}
function showErrorModal() {
  let modal = document.querySelector("[data-modal-form-error]");
  modal.classList.add("show");
}

/***/ }),

/***/ "./src/scripts/svg-extractor.js":
/*!**************************************!*\
  !*** ./src/scripts/svg-extractor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/assets/sprites sync recursive \\.svg$"));

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });