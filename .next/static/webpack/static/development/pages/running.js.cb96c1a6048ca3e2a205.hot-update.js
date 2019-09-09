webpackHotUpdate("static/development/pages/running.js",{

/***/ "./components/DataField.tsx":
/*!**********************************!*\
  !*** ./components/DataField.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Theme */ "./components/styles/Theme.ts");
/* harmony import */ var _styles_Theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Theme__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/nicbovee/Projects/PrismaDemo/frontend/components/DataField.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: sans-serif;\n    font-size: 36px;\n    font-weight: 100;\n    .label {\n        font-size:16px;\n        font-weight: bold;\n        text-transform: uppercase;\n        margin-bottom: 10px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var DataField = function DataField(props) {
  return __jsx(Styled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.label), props.children);
};

var Styled = _styles_Theme__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (DataField);

/***/ }),

/***/ "./components/styles/GlobalStyle.ts":
/*!******************************************!*\
  !*** ./components/styles/GlobalStyle.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./components/styles/theme.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    html {\n        box-sizing: border-box;\n        font-size: 10px;\n    }\n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n    body {\n        padding: 0px;\n        margin: 0px;\n        font-size: 1.5rem;\n        line-height: 2;\n        font-family: Arial, Helvetica, sans-serif;\n        color: ", "\n    }\n    a {\n        text-decoration: none;\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(_theme__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.gray;
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/styles/Theme.ts":
/*!************************************!*\
  !*** ./components/styles/Theme.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/styles/theme.ts":
/*!************************************!*\
  !*** ./components/styles/theme.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/running.tsx":
/*!***************************!*\
  !*** ./pages/running.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Page */ "./templates/Page.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.tsx");
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/theme */ "./components/styles/theme.ts");
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_styles_theme__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var spherical_geometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! spherical-geometry-js */ "./node_modules/spherical-geometry-js/src/index.js");
/* harmony import */ var _components_Distance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Distance */ "./components/Distance.tsx");
/* harmony import */ var _components_Speed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Speed */ "./components/Speed.tsx");



var _jsxFileName = "/Users/nicbovee/Projects/PrismaDemo/frontend/pages/running.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 8px;\n    color: #fff;\n    list-style-type: none;\n    font-family: monospace;\n    padding: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #16103a;\n    min-height: 500px;\n    max-height: 500px;\n    overflow: scroll;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 10px 30px ;\n    border: none;\n    background: orange;\n    font-family: sans-serif;\n    font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 10px 30px ;\n    border: none;\n    background: orange;\n    margin: 15px;\n    font-family: sans-serif;\n    font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var getCoordinates = function getCoordinates(arr, callback) {
  var response = null;
  var options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    console.log(crd);
    response = {
      latitude: crd.latitude,
      longitude: crd.longitude,
      accuracy: crd.accuracy,
      altitude: crd.altitude,
      altitudeAccuracy: crd.altitudeAccuracy,
      heading: crd.heading,
      speed: crd.speed,
      utc: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()()
    };
    callback([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr), [response]));
    return;
  }

  function error(err) {
    console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
};

var sampleData = [{
  latitude: 39.0067718,
  longitude: -105.06114945,
  utc: 1567956461422
}, {
  latitude: 39.0069154,
  longitude: -105.0603721,
  utc: 1567956490407
}, {
  latitude: 38.9993031,
  longitude: -105.0402898,
  utc: 1567958139410
}];

var StartStop = function StartStop(props) {
  var isRunning = props.isRunning,
      toggle = props.toggle;
  return isRunning ? __jsx(Button, {
    onClick: function onClick() {
      return toggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Pause") : __jsx(Button, {
    onClick: function onClick() {
      return toggle(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Start");
};

function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(); // Remember the latest callback.

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
}

var startTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();

var Running = function Running() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      coordinates = _useState[0],
      setCoordinates = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isRunning = _useState2[0],
      setIsRunning = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      duration = _useState3[0],
      setDuration = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      speed = _useState4[0],
      setSpeed = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      distance = _useState5[0],
      setDistance = _useState5[1];

  useInterval(function () {
    if (isRunning) {
      getCoordinates(coordinates, setCoordinates);
      var current = coordinates[coordinates.length - 1] && coordinates[coordinates.length - 1];
      var previous = coordinates[coordinates.length - 2] && coordinates[coordinates.length - 2];
      var currentTime = current && current.utc;

      if (currentTime) {
        setDuration((currentTime - startTime) / 1000);
      }

      if (current && previous) {
        var currentDistance = Object(spherical_geometry_js__WEBPACK_IMPORTED_MODULE_8__["computeDistanceBetween"])(new spherical_geometry_js__WEBPACK_IMPORTED_MODULE_8__["LatLng"](current.latitude, current.longitude), new spherical_geometry_js__WEBPACK_IMPORTED_MODULE_8__["LatLng"](previous.latitude, previous.longitude));
        setSpeed(currentDistance / 1609.344 * 60 * 60);
        setDistance(distance + currentDistance);
      } //console.log(coordinates);

    }
  }, 1000);
  return __jsx(_templates_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontFamily: "sans-serif"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Run!"), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    time: duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx(_components_Speed__WEBPACK_IMPORTED_MODULE_10__["default"], {
    speed: speed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx(_components_Distance__WEBPACK_IMPORTED_MODULE_9__["default"], {
    meters: distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(StartStop, {
    isRunning: isRunning,
    toggle: setIsRunning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/finished",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(ButtonLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Stop")), __jsx(Console, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, coordinates.map(function (x, i) {
    var pointer = coordinates[coordinates.length - 1 - i];
    return __jsx(LineItem, {
      key: pointer.utc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Lat: ", pointer.latitude, " | Lng: ", pointer.longitude, " | UTC: ", pointer.utc);
  })));
};

var Button = _components_styles_theme__WEBPACK_IMPORTED_MODULE_7___default.a.button(_templateObject());
var ButtonLink = _components_styles_theme__WEBPACK_IMPORTED_MODULE_7___default.a.a(_templateObject2());
var Console = _components_styles_theme__WEBPACK_IMPORTED_MODULE_7___default.a.ul(_templateObject3());
var LineItem = _components_styles_theme__WEBPACK_IMPORTED_MODULE_7___default.a.li(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (Running);

/***/ }),

/***/ "./templates/Page.tsx":
/*!****************************!*\
  !*** ./templates/Page.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/GlobalStyle */ "./components/styles/GlobalStyle.ts");
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/theme */ "./components/styles/theme.ts");
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_styles_theme__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nicbovee/Projects/PrismaDemo/frontend/templates/Page.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Page = function Page(props) {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _components_styles_theme__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=running.js.cb96c1a6048ca3e2a205.hot-update.js.map