module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DataField.tsx":
/*!**********************************!*\
  !*** ./components/DataField.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/theme */ "./components/styles/theme.ts");
var _jsxFileName = "/Users/nicolasbovee/Projects/trackmy.run/components/DataField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DataField = props => __jsx(Styled, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("p", {
  className: "label",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, props.label), props.children);

const Styled = _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    font-size: 52px;
    font-weight: 100;
    color: ${props => props.theme.light};
    .label {
        font-size:24px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (DataField);

/***/ }),

/***/ "./components/Distance.tsx":
/*!*********************************!*\
  !*** ./components/Distance.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataField */ "./components/DataField.tsx");
var _jsxFileName = "/Users/nicolasbovee/Projects/trackmy.run/components/Distance.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function convertMetersToMiles(meters) {
  return (meters / 1609.344).toFixed(2);
}

const Distance = props => __jsx(_DataField__WEBPACK_IMPORTED_MODULE_1__["default"], {
  label: "Distance",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, convertMetersToMiles(props.meters), " miles");

/* harmony default export */ __webpack_exports__["default"] = (Distance);

/***/ }),

/***/ "./components/FullPage.tsx":
/*!*********************************!*\
  !*** ./components/FullPage.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FullPage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
/* harmony default export */ __webpack_exports__["default"] = (FullPage);

/***/ }),

/***/ "./components/Speed.tsx":
/*!******************************!*\
  !*** ./components/Speed.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataField */ "./components/DataField.tsx");
var _jsxFileName = "/Users/nicolasbovee/Projects/trackmy.run/components/Speed.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Speed = props => __jsx(_DataField__WEBPACK_IMPORTED_MODULE_1__["default"], {
  label: "Speed",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, props.speed.toFixed(), " mph");

/* harmony default export */ __webpack_exports__["default"] = (Speed);

/***/ }),

/***/ "./components/Timer.tsx":
/*!******************************!*\
  !*** ./components/Timer.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataField */ "./components/DataField.tsx");
var _jsxFileName = "/Users/nicolasbovee/Projects/trackmy.run/components/Timer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const getSeconds = time => time % 60 < 10 ? "0" + (time % 60).toFixed() : (time % 60).toFixed();

const getMinutes = time => Math.floor(time / 60) % 60 < 10 ? "0" + (Math.floor(time / 60) % 60).toFixed() : (Math.floor(time / 60) % 60).toFixed();

const getHours = time => Math.floor(time / 3600) < 10 ? "0" + Math.floor(time / 3600).toFixed() : Math.floor(time / 3600).toFixed();

const getTimestamp = time => `${getHours(time)}:${getMinutes(time)}:${getSeconds(time)}`;

const Timer = props => __jsx(_DataField__WEBPACK_IMPORTED_MODULE_1__["default"], {
  label: "Time",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, getTimestamp(props.time));

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./components/styles/GlobalStyle.ts":
/*!******************************************!*\
  !*** ./components/styles/GlobalStyle.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./components/styles/theme.ts");

const GlobalStyle = _theme__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0px;
        margin: 0px;
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        color: ${props => props.theme.black};
        background-color: ${props => props.theme.dark};
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.gray};
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/styles/theme.ts":
/*!************************************!*\
  !*** ./components/styles/theme.ts ***!
  \************************************/
/*! exports provided: theme, css, keyframes, ThemeProvider, createGlobalStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const theme = {
  light: '#fff',
  dark: '#060318',
  red: '#FF0000',
  black: '#393939',
  green: '#7fff50',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0,0,0,0.9)',
  gray: '#404040',
  deepPurple: '#16103a'
};
const {
  css,
  default: styled,
  keyframes,
  ThemeProvider,
  createGlobalStyle
} = styled_components__WEBPACK_IMPORTED_MODULE_0__;

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./pages/current-run.tsx":
/*!*******************************!*\
  !*** ./pages/current-run.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Page */ "./templates/Page.tsx");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.tsx");
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/theme */ "./components/styles/theme.ts");
/* harmony import */ var _components_Distance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Distance */ "./components/Distance.tsx");
/* harmony import */ var _components_Speed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Speed */ "./components/Speed.tsx");
/* harmony import */ var _components_FullPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FullPage */ "./components/FullPage.tsx");
var _jsxFileName = "/Users/nicolasbovee/Projects/trackmy.run/pages/current-run.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const io = __webpack_require__(/*! socket.io-client */ "socket.io-client");

const socket = io('http://localhost:8000');

const CurrentRun = () => {
  const {
    0: currentRun,
    1: setCurrentRun
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    distance: 0,
    speed: 0,
    duration: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    socket.on('currentRun', details => {
      console.log(details);
      setCurrentRun(JSON.parse(details));
    });
  }, [currentRun]);
  return __jsx(_templates_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_components_FullPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Nic's Current Run."), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    time: currentRun.duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx(_components_Speed__WEBPACK_IMPORTED_MODULE_5__["default"], {
    speed: currentRun.speed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(_components_Distance__WEBPACK_IMPORTED_MODULE_4__["default"], {
    meters: currentRun.distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))));
};

const InfoText = _components_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].p`
    visibility: ${props => props.isRunning ? "hidden" : "visible"};
    color: ${props => props.theme.green};
    text-transform: uppercase;
    font-size: 18px;
`;
const Button = _components_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].button`
    padding: 10px 30px ;
    background: none;
    color: ${props => props.theme.green};
    border: solid 1px ${props => props.theme.green};
    margin: 15px;
    font-family: sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 2px;
`;
const Center = _components_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].div`
    display: flex;
    justify-content: center;
`;
const ButtonLink = _components_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].a`
    display: block;
    padding: 10px 30px ;
    border: none;
    background: ${props => props.theme.green};
    font-family: sans-serif;
    font-size: 14px;
`;
const Console = _components_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].ul`
    background: #16103a;
    min-height: 500px;
    max-height: 500px;
    overflow: scroll;
    margin-block-start: 0;
    padding-inline-start: 0;
    li {
        font-size: 8px;
        color: #fff;
        list-style-type: none;
        font-family: monospace;
        padding: 0;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (CurrentRun);

/***/ }),

/***/ "./templates/Page.tsx":
/*!****************************!*\
  !*** ./templates/Page.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/theme */ "./components/styles/theme.ts");
/* harmony import */ var _components_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/GlobalStyle */ "./components/styles/GlobalStyle.ts");
var _jsxFileName = "/Users/nicolasbovee/Projects/trackmy.run/templates/Page.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Page = props => __jsx(_components_styles_theme__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
  theme: _components_styles_theme__WEBPACK_IMPORTED_MODULE_1__["theme"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_components_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), props.children)));

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./pages/current-run.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nicolasbovee/Projects/trackmy.run/pages/current-run.tsx */"./pages/current-run.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=current-run.js.map