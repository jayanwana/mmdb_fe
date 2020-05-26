webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./utils/axios.service.js":
/*!********************************!*\
  !*** ./utils/axios.service.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _axios_setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./axios.setup */ "./utils/axios.setup.js");




var MmDataService = /*#__PURE__*/function () {
  function MmDataService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MmDataService);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MmDataService, [{
    key: "login",
    value: function login(data) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post("/login", data);
    }
  }, {
    key: "getAllMarkets",
    value: function getAllMarkets() {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].get("/market/");
    }
  }, {
    key: "getMarket",
    value: function getMarket(id) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].get("/market/".concat(id));
    }
  }, {
    key: "createMarket",
    value: function createMarket(data, headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post("/market/", data, headers);
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(id, data, headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].patch("/market/".concat(id), data, headers);
    }
  }, {
    key: "deleteMarket",
    value: function deleteMarket(id, headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/market/".concat(id), headers);
    }
  }, {
    key: "findMarket",
    value: function findMarket(data) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post('/market/search/', data);
    }
  }, {
    key: "findMarketByLocation",
    value: function findMarketByLocation(data) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post('/market/location/', data);
    }
  }, {
    key: "test",
    value: function test(headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post('/test/', JSON.stringify({
        email: "test2@theagromall.com"
      }));
    }
  }]);

  return MmDataService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new MmDataService());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9heGlvcy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1tRGF0YVNlcnZpY2UiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiZ2V0IiwiaWQiLCJoZWFkZXJzIiwicGF0Y2giLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsYTs7Ozs7OzswQkFDRUMsSSxFQUFNO0FBQ1YsYUFBT0Msb0RBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsRUFBcUJGLElBQXJCLENBQVA7QUFDRDs7O29DQUVlO0FBQ2QsYUFBT0Msb0RBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQVYsQ0FBUDtBQUNEOzs7OEJBRVNDLEUsRUFBSTtBQUNaLGFBQU9ILG9EQUFLLENBQUNFLEdBQU4sbUJBQXFCQyxFQUFyQixFQUFQO0FBQ0Q7OztpQ0FFWUosSSxFQUFNSyxPLEVBQVM7QUFDMUIsYUFBT0osb0RBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQVgsRUFBdUJGLElBQXZCLEVBQTZCSyxPQUE3QixDQUFQO0FBQ0Q7OztpQ0FFWUQsRSxFQUFJSixJLEVBQU1LLE8sRUFBUztBQUM5QixhQUFPSixvREFBSyxDQUFDSyxLQUFOLG1CQUF1QkYsRUFBdkIsR0FBNkJKLElBQTdCLEVBQW1DSyxPQUFuQyxDQUFQO0FBQ0Q7OztpQ0FFWUQsRSxFQUFJQyxPLEVBQVM7QUFDeEIsYUFBT0osb0RBQUssVUFBTCxtQkFBd0JHLEVBQXhCLEdBQThCQyxPQUE5QixDQUFQO0FBQ0Q7OzsrQkFFVUwsSSxFQUFNO0FBQ2YsYUFBT0Msb0RBQUssQ0FBQ0MsSUFBTixDQUFXLGlCQUFYLEVBQThCRixJQUE5QixDQUFQO0FBQ0Q7Ozt5Q0FFb0JBLEksRUFBTTtBQUN6QixhQUFPQyxvREFBSyxDQUFDQyxJQUFOLENBQVcsbUJBQVgsRUFBZ0NGLElBQWhDLENBQVA7QUFDRDs7O3lCQUNJSyxPLEVBQVM7QUFDWixhQUFPSixvREFBSyxDQUFDQyxJQUFOLENBQVcsUUFBWCxFQUFxQkssSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ0MsYUFBSyxFQUFDO0FBQVAsT0FBZixDQUFyQixDQUFQO0FBQ0Q7Ozs7OztBQUdZLG1FQUFJVixhQUFKLEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzLmJhZjQ4Y2U4ODU2ZmMxNzMyMDFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnLi9heGlvcy5zZXR1cCc7XHJcblxyXG5jbGFzcyBNbURhdGFTZXJ2aWNlIHtcclxuICBsb2dpbihkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9sb2dpblwiLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgZ2V0QWxsTWFya2V0cygpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoXCIvbWFya2V0L1wiKTtcclxuICB9XHJcblxyXG4gIGdldE1hcmtldChpZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL21hcmtldC8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFya2V0KGRhdGEsIGhlYWRlcnMpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KFwiL21hcmtldC9cIiwgZGF0YSwgaGVhZGVycyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXJrZXQoaWQsIGRhdGEsIGhlYWRlcnMpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL21hcmtldC8ke2lkfWAsIGRhdGEsIGhlYWRlcnMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTWFya2V0KGlkLCBoZWFkZXJzKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvbWFya2V0LyR7aWR9YCwgaGVhZGVycyk7XHJcbiAgfVxyXG5cclxuICBmaW5kTWFya2V0KGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFya2V0L3NlYXJjaC8nLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGZpbmRNYXJrZXRCeUxvY2F0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFya2V0L2xvY2F0aW9uLycsIGRhdGEpO1xyXG4gIH1cclxuICB0ZXN0KGhlYWRlcnMpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdGVzdC8nLCBKU09OLnN0cmluZ2lmeSh7ZW1haWw6XCJ0ZXN0MkB0aGVhZ3JvbWFsbC5jb21cIn0pKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE1tRGF0YVNlcnZpY2UoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==