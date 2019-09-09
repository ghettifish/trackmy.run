webpackHotUpdate("static/development/pages/running.js",{

/***/ "./components/Timer.tsx":
/*!******************************!*\
  !*** ./components/Timer.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataField */ "./components/DataField.tsx");
var _jsxFileName = "/Users/nicbovee/Projects/PrismaDemo/frontend/components/Timer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var getSeconds = function getSeconds(time) {
  return time % 60 < 10 ? "0" + (time % 60).toFixed() : (time % 60).toFixed();
};

var getMinutes = function getMinutes(time) {
  return Math.floor(time / 60) % 60 < 10 ? "0" + (Math.floor(time / 60) % 60).toFixed() : (Math.floor(time / 60) % 60).toFixed();
};

var getHours = function getHours(time) {
  return Math.floor(time / 3600) < 10 ? "0" + Math.floor(time / 3600).toFixed() : Math.floor(time / 3600).toFixed();
};

var getTimestamp = function getTimestamp(time) {
  return "".concat(getHours(time), ":").concat(getMinutes(time), ":").concat(getSeconds(time));
};

var Timer = function Timer(props) {
  return __jsx(_DataField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, getTimestamp(props.time));
};

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

})
//# sourceMappingURL=running.js.1d3c33caf527a99a09c5.hot-update.js.map