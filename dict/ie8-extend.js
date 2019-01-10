/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./array.js":
/*!******************!*\
  !*** ./array.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nArray.prototype.forEach =\r\n    Array.prototype.forEach ||\r\n    function(callback) {\r\n        var list = this\r\n        for (var i = 0; i < list.length; i++) {\r\n            var item = list[i]\r\n            callback(item, i)\r\n        }\r\n    }\r\n\r\nArray.prototype.map =\r\n    Array.prototype.map ||\r\n    function(callback) {\r\n        var list = this\r\n        var result = []\r\n        list.forEach(function(item, i) {\r\n            result.push(callback(item, i))\r\n        })\r\n        return result\r\n    }\r\n\r\nvar ArrayExtend = function() {\r\n    this.extend = [\"forEach\", \"map\"]\r\n    this.forEach = function(callback) {\r\n        var list = this\r\n        for (var i = 0; i < list.length; i++) {\r\n            var item = list[i]\r\n            callback(item, i)\r\n        }\r\n    }\r\n    this.map = function(callback) {\r\n        var list = this\r\n        var result = []\r\n        list.forEach(function(item, i) {\r\n            result.push(callback(item, i))\r\n        })\r\n        return result\r\n    }\r\n}\r\n\r\nArrayExtend.prototype.init = function() {\r\n    for (var i = 0; i < this.extend.length; i++) {\r\n        var key = this.extend[i]\r\n        Array.prototype[key] = Array.prototype[key] || this[key]\r\n    }\r\n}\r\n\r\nvar arrayExtend = new ArrayExtend()\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (arrayExtend);\r\n\n\n//# sourceURL=webpack:///./array.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ \"./array.js\");\n\r\n_array__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init()\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./main.js ./out.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\work\\ie8-function\\main.js */\"./main.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './out.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n//# sourceURL=webpack:///multi_./main.js_./out.js?");

/***/ })

/******/ });