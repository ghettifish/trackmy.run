webpackHotUpdate("static/development/pages/running.js",{

/***/ "./pages/running.tsx":
/*!***************************!*\
  !*** ./pages/running.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Page */ "./templates/Page.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.tsx");
/* harmony import */ var _components_MileCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MileCounter */ "./components/MileCounter.tsx");
var _jsxFileName = "/Users/nicbovee/Projects/PrismaDemo/frontend/pages/running.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log("Latitude : ".concat(crd.latitude));
  console.log("Longitude: ".concat(crd.longitude));
  console.log("More or less ".concat(crd.accuracy, " meters."));
}

function error(err) {
  console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
}

navigator.geolocation.getCurrentPosition(success, error, options);

var Running = function Running() {
  return __jsx(_templates_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Run!"), __jsx(_components_MileCounter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/finished",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Stop"));
};

/* harmony default export */ __webpack_exports__["default"] = (Running);

/***/ })

})
//# sourceMappingURL=running.js.a0056381528c64dfbeb2.hot-update.js.map