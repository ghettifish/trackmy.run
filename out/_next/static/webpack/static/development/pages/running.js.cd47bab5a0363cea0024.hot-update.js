webpackHotUpdate("static/development/pages/running.js",{

/***/ "./pages/running.tsx":
/*!***************************!*\
  !*** ./pages/running.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Page */ "./templates/Page.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.tsx");
/* harmony import */ var _components_MileCounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MileCounter */ "./components/MileCounter.tsx");


var _jsxFileName = "/Users/nicbovee/Projects/PrismaDemo/frontend/pages/running.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var getCoordinates = function getCoordinates(arr, callback) {
  var response = null;
  var options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    response = {
      lat: crd.latitude,
      lng: crd.longitude,
      utc: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()()
    };
    callback([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr), [response]));
    return;
  }

  function error(err) {
    console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
};

var StartStop = function StartStop(props) {
  var isRunning = props.isRunning,
      toggle = props.toggle;
  return isRunning ? __jsx("a", {
    onClick: function onClick() {
      return toggle(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Pause") : __jsx("a", {
    onClick: function onClick() {
      return toggle(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Start");
};

function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(); // Remember the latest callback.

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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

var startTime = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();

var Running = function Running() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      coordinates = _useState[0],
      setCoordinates = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isRunning = _useState2[0],
      setIsRunning = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      duration = _useState3[0],
      setDuration = _useState3[1];

  useInterval(function () {
    if (isRunning) {
      getCoordinates(coordinates, setCoordinates);
      var currentTime = coordinates[coordinates.length - 1] && coordinates[coordinates.length - 1].utc;

      if (currentTime) {
        setDuration((currentTime - startTime) / 1000);
      }

      console.log(coordinates); //console.log(coordinates);
    }
  }, 1000);
  return __jsx(_templates_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Run!"), __jsx(_components_MileCounter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    time: duration,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(StartStop, {
    isRunning: isRunning,
    toggle: setIsRunning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/finished",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Stop")));
};

/* harmony default export */ __webpack_exports__["default"] = (Running);

/***/ })

})
//# sourceMappingURL=running.js.cd47bab5a0363cea0024.hot-update.js.map