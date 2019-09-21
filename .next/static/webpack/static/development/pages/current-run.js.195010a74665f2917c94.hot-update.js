webpackHotUpdate("static/development/pages/current-run.js",{

/***/ "./pages/current-run.tsx":
/*!*******************************!*\
  !*** ./pages/current-run.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/Page */ "./templates/Page.tsx");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.tsx");
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/theme */ "./components/styles/theme.ts");
/* harmony import */ var _components_Distance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Distance */ "./components/Distance.tsx");
/* harmony import */ var _components_Speed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Speed */ "./components/Speed.tsx");
/* harmony import */ var _components_FullPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FullPage */ "./components/FullPage.tsx");

var _jsxFileName = "/Users/nicolasbovee/Projects/trackmy.run/pages/current-run.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #16103a;\n    min-height: 500px;\n    max-height: 500px;\n    overflow: scroll;\n    margin-block-start: 0;\n    padding-inline-start: 0;\n    li {\n        font-size: 8px;\n        color: #fff;\n        list-style-type: none;\n        font-family: monospace;\n        padding: 0;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: block;\n    padding: 10px 30px ;\n    border: none;\n    background: ", ";\n    font-family: sans-serif;\n    font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 10px 30px ;\n    background: none;\n    color: ", ";\n    border: solid 1px ", ";\n    margin: 15px;\n    font-family: sans-serif;\n    font-size: 18px;\n    text-transform: uppercase;\n    border-radius: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    visibility: ", ";\n    color: ", ";\n    text-transform: uppercase;\n    font-size: 18px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var socket = io('http://localhost:8000');

var CurrentRun = function CurrentRun() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    distance: 0,
    speed: 0,
    duration: 0
  }),
      currentRun = _useState[0],
      setCurrentRun = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    socket.on('currentRun', function (details) {
      console.log(details);
      setCurrentRun(JSON.parse(details));
    });
  }, [currentRun]);
  return __jsx(_templates_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_FullPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
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
  }, "Nic's Current Run."), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    time: currentRun.duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_Speed__WEBPACK_IMPORTED_MODULE_6__["default"], {
    speed: currentRun.speed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_Distance__WEBPACK_IMPORTED_MODULE_5__["default"], {
    meters: currentRun.distance,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))));
};

var InfoText = _components_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].p(_templateObject(), function (props) {
  return props.isRunning ? "hidden" : "visible";
}, function (props) {
  return props.theme.green;
});
var Button = _components_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject2(), function (props) {
  return props.theme.green;
}, function (props) {
  return props.theme.green;
});
var Center = _components_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
var ButtonLink = _components_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].a(_templateObject4(), function (props) {
  return props.theme.green;
});
var Console = _components_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject5());
/* harmony default export */ __webpack_exports__["default"] = (CurrentRun);

/***/ })

})
//# sourceMappingURL=current-run.js.195010a74665f2917c94.hot-update.js.map