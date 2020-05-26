webpackHotUpdate("static\\development\\pages\\admin.js",{

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
    value: function createMarket(data) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post("/market/", data, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(id, data) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].patch("/market/".concat(id), data);
    }
  }, {
    key: "deleteMarket",
    value: function deleteMarket(id) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/market/".concat(id));
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
    value: function test() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9heGlvcy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1tRGF0YVNlcnZpY2UiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiZ2V0IiwiaWQiLCJoZWFkZXJzIiwicGF0Y2giLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsYTs7Ozs7OzswQkFDRUMsSSxFQUFNO0FBQ1YsYUFBT0Msb0RBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsRUFBcUJGLElBQXJCLENBQVA7QUFDRDs7O29DQUVlO0FBQ2QsYUFBT0Msb0RBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQVYsQ0FBUDtBQUNEOzs7OEJBRVNDLEUsRUFBSTtBQUNaLGFBQU9ILG9EQUFLLENBQUNFLEdBQU4sbUJBQXFCQyxFQUFyQixFQUFQO0FBQ0Q7OztpQ0FFWUosSSxFQUFNO0FBQ2pCLGFBQU9DLG9EQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFYLEVBQXVCRixJQUF2QixFQUE2QjtBQUFHSyxlQUFPLEVBQUU7QUFDNUMsMEJBQWdCO0FBRDRCO0FBQVosT0FBN0IsQ0FBUDtBQUdEOzs7aUNBRVlELEUsRUFBSUosSSxFQUFNO0FBQ3JCLGFBQU9DLG9EQUFLLENBQUNLLEtBQU4sbUJBQXVCRixFQUF2QixHQUE2QkosSUFBN0IsQ0FBUDtBQUNEOzs7aUNBRVlJLEUsRUFBSTtBQUNmLGFBQU9ILG9EQUFLLFVBQUwsbUJBQXdCRyxFQUF4QixFQUFQO0FBQ0Q7OzsrQkFFVUosSSxFQUFNO0FBQ2YsYUFBT0Msb0RBQUssQ0FBQ0MsSUFBTixDQUFXLGlCQUFYLEVBQThCRixJQUE5QixDQUFQO0FBQ0Q7Ozt5Q0FFb0JBLEksRUFBTTtBQUN6QixhQUFPQyxvREFBSyxDQUFDQyxJQUFOLENBQVcsbUJBQVgsRUFBZ0NGLElBQWhDLENBQVA7QUFDRDs7OzJCQUNNO0FBQ0wsYUFBT0Msb0RBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsRUFBcUJLLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLGFBQUssRUFBQztBQUFQLE9BQWYsQ0FBckIsQ0FBUDtBQUNEOzs7Ozs7QUFHWSxtRUFBSVYsYUFBSixFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcy43N2YzNDEyZTA4Yjc3MmQ3NWRjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJy4vYXhpb3Muc2V0dXAnO1xyXG5cclxuY2xhc3MgTW1EYXRhU2VydmljZSB7XHJcbiAgbG9naW4oZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvbG9naW5cIiwgZGF0YSlcclxuICB9XHJcblxyXG4gIGdldEFsbE1hcmtldHMoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KFwiL21hcmtldC9cIik7XHJcbiAgfVxyXG5cclxuICBnZXRNYXJrZXQoaWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9tYXJrZXQvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1hcmtldChkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9tYXJrZXQvXCIsIGRhdGEsIHsgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICB9fSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXJrZXQoaWQsIGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL21hcmtldC8ke2lkfWAsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTWFya2V0KGlkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvbWFya2V0LyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBmaW5kTWFya2V0KGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFya2V0L3NlYXJjaC8nLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGZpbmRNYXJrZXRCeUxvY2F0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbWFya2V0L2xvY2F0aW9uLycsIGRhdGEpO1xyXG4gIH1cclxuICB0ZXN0KCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy90ZXN0LycsIEpTT04uc3RyaW5naWZ5KHtlbWFpbDpcInRlc3QyQHRoZWFncm9tYWxsLmNvbVwifSkpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTW1EYXRhU2VydmljZSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9