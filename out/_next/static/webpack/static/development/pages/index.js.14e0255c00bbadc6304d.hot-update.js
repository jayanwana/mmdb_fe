webpackHotUpdate("static\\development\\pages\\index.js",{

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
    value: function login(data, headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post("/login", data, headers);
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
    value: function findMarket(data, headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post('/market/search/', data, headers);
    }
  }, {
    key: "findMarketByLocation",
    value: function findMarketByLocation(data, headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post('/market/location/', data, headers);
    }
  }, {
    key: "test",
    value: function test(headers) {
      return _axios_setup__WEBPACK_IMPORTED_MODULE_2__["default"].post('/test/', {
        "email": "test2@theagromall.com"
      }, headers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9heGlvcy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1tRGF0YVNlcnZpY2UiLCJkYXRhIiwiaGVhZGVycyIsImF4aW9zIiwicG9zdCIsImdldCIsImlkIiwicGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsYTs7Ozs7OzswQkFDRUMsSSxFQUFNQyxPLEVBQVM7QUFDbkIsYUFBT0Msb0RBQUssQ0FBQ0MsSUFBTixDQUFXLFFBQVgsRUFBcUJILElBQXJCLEVBQTJCQyxPQUEzQixDQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU9DLG9EQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFWLENBQVA7QUFDRDs7OzhCQUVTQyxFLEVBQUk7QUFDWixhQUFPSCxvREFBSyxDQUFDRSxHQUFOLG1CQUFxQkMsRUFBckIsRUFBUDtBQUNEOzs7aUNBRVlMLEksRUFBTUMsTyxFQUFTO0FBQzFCLGFBQU9DLG9EQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFYLEVBQXVCSCxJQUF2QixFQUE2QkMsT0FBN0IsQ0FBUDtBQUNEOzs7aUNBRVlJLEUsRUFBSUwsSSxFQUFNQyxPLEVBQVM7QUFDOUIsYUFBT0Msb0RBQUssQ0FBQ0ksS0FBTixtQkFBdUJELEVBQXZCLEdBQTZCTCxJQUE3QixFQUFtQ0MsT0FBbkMsQ0FBUDtBQUNEOzs7aUNBRVlJLEUsRUFBSUosTyxFQUFTO0FBQ3hCLGFBQU9DLG9EQUFLLFVBQUwsbUJBQXdCRyxFQUF4QixHQUE4QkosT0FBOUIsQ0FBUDtBQUNEOzs7K0JBRVVELEksRUFBTUMsTyxFQUFTO0FBQ3hCLGFBQU9DLG9EQUFLLENBQUNDLElBQU4sQ0FBVyxpQkFBWCxFQUE4QkgsSUFBOUIsRUFBb0NDLE9BQXBDLENBQVA7QUFDRDs7O3lDQUVvQkQsSSxFQUFNQyxPLEVBQVM7QUFDbEMsYUFBT0Msb0RBQUssQ0FBQ0MsSUFBTixDQUFXLG1CQUFYLEVBQWdDSCxJQUFoQyxFQUFzQ0MsT0FBdEMsQ0FBUDtBQUNEOzs7eUJBQ0lBLE8sRUFBUztBQUNaLGFBQU9DLG9EQUFLLENBQUNDLElBQU4sQ0FBVyxRQUFYLEVBQXFCO0FBQy9CLGlCQUFTO0FBRHNCLE9BQXJCLEVBRVJGLE9BRlEsQ0FBUDtBQUdEOzs7Ozs7QUFHWSxtRUFBSUYsYUFBSixFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xNGUwMjU1YzAwYmJhZGM2MzA0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJy4vYXhpb3Muc2V0dXAnO1xyXG5cclxuY2xhc3MgTW1EYXRhU2VydmljZSB7XHJcbiAgbG9naW4oZGF0YSwgaGVhZGVycykge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvbG9naW5cIiwgZGF0YSwgaGVhZGVycylcclxuICB9XHJcblxyXG4gIGdldEFsbE1hcmtldHMoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KFwiL21hcmtldC9cIik7XHJcbiAgfVxyXG5cclxuICBnZXRNYXJrZXQoaWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9tYXJrZXQvJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1hcmtldChkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9tYXJrZXQvXCIsIGRhdGEsIGhlYWRlcnMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWFya2V0KGlkLCBkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9tYXJrZXQvJHtpZH1gLCBkYXRhLCBoZWFkZXJzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU1hcmtldChpZCwgaGVhZGVycykge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL21hcmtldC8ke2lkfWAsIGhlYWRlcnMpO1xyXG4gIH1cclxuXHJcbiAgZmluZE1hcmtldChkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21hcmtldC9zZWFyY2gvJywgZGF0YSwgaGVhZGVycyk7XHJcbiAgfVxyXG5cclxuICBmaW5kTWFya2V0QnlMb2NhdGlvbihkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL21hcmtldC9sb2NhdGlvbi8nLCBkYXRhLCBoZWFkZXJzKTtcclxuICB9XHJcbiAgdGVzdChoZWFkZXJzKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Rlc3QvJywge1xyXG5cdFwiZW1haWxcIjogXCJ0ZXN0MkB0aGVhZ3JvbWFsbC5jb21cIlxyXG59LCBoZWFkZXJzKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE1tRGF0YVNlcnZpY2UoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==