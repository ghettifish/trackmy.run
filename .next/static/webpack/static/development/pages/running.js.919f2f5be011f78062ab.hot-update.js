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
var _jsxFileName = "/Users/nicbovee/Projects/PrismaDemo/frontend/components/Timer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var getSeconds = function getSeconds(time) {
  return time % 60 < 10 ? "0" + (time % 60).toFixed() : (time % 60).toFixed();
};

var getMinutes = function getMinutes(time) {
  return Math.floor(time / 60) < 10 ? "0" + (time / 60).toFixed() : (time / 60).toFixed();
};

var Timer = function Timer(props) {
  return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Time: "), getMinutes(props.time), ":", getSeconds(props.time));
};

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

})
//# sourceMappingURL=running.js.919f2f5be011f78062ab.hot-update.js.map