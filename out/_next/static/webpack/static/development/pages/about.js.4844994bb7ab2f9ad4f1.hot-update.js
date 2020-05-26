webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _utils_auth_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/auth_token */ "./utils/auth_token.js");







var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\pages\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var About = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(About, _React$Component);

  var _super = _createSuper(About);

  function About(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, About);

    _this = _super.call(this, props);
    _this.state = {
      loaded: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.props.pageTransitionReadyToEnter();

        _this2.setState({
          loaded: true
        });
      }, 2000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.loaded) return null;
      return __jsx("div", {
        className: "container bg-success page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, "About us"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, "Notice how a loading spinner showed up while my content was \"loading\"? Pretty neat, huh?"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        as: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "btn btn-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, "Go back home")), __jsx(Test, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(About, "pageTransitionDelayEnter", true);

About.propTypes = {
  pageTransitionReadyToEnter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
};
About.defaultProps = {
  pageTransitionReadyToEnter: function pageTransitionReadyToEnter() {}
};

var Test = /*#__PURE__*/function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Test, _React$Component2);

  var _super2 = _createSuper(Test);

  function Test(props) {
    var _this3;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Test);

    _this3 = _super2.call(this, props);
    _this3.test = _this3.test.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3));
    return _this3;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Test, [{
    key: "test",
    value: function test() {
      var token = _utils_auth_token__WEBPACK_IMPORTED_MODULE_11__["default"].getToken();
      console.log(token);
      var headers = {
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer ".concat(token)
        }
      };
      _utils_axios_service__WEBPACK_IMPORTED_MODULE_10__["default"].test(headers).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        return console.log(error.name);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx("button", {
        onClick: this.test,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 12
        }
      }, "test"));
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJzZXRTdGF0ZSIsImNsZWFyVGltZW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIlRlc3QiLCJ0ZXN0IiwiYmluZCIsInRva2VuIiwiQXV0aFRva2VuIiwiZ2V0VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsIk1tRGF0YVNlcnZpY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7QUFHSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUU7QUFERyxLQUFiO0FBRmlCO0FBS2xCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixXQUFLQyxTQUFMLEdBQWlCQyxVQUFVLENBQUMsWUFBTTtBQUNoQyxjQUFJLENBQUNKLEtBQUwsQ0FBV0ssMEJBQVg7O0FBQ0EsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUosZ0JBQU0sRUFBRTtBQUFWLFNBQWQ7QUFDRCxPQUgwQixFQUd4QixJQUh3QixDQUEzQjtBQUlEOzs7MkNBRXNCO0FBQ3JCLFVBQUksS0FBS0MsU0FBVCxFQUFvQkksWUFBWSxDQUFDLEtBQUtKLFNBQU4sQ0FBWjtBQUNyQjs7OzZCQUVRO0FBQ1AsVUFBSSxDQUFDLEtBQUtGLEtBQUwsQ0FBV0MsTUFBaEIsRUFBd0IsT0FBTyxJQUFQO0FBQ3hCLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzR0FGRixFQU1FLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLFVBQUUsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FORixFQVNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEYsQ0FERjtBQWFEOzs7O0VBcENpQk0sNENBQUssQ0FBQ0MsUzs7MEZBQXBCVixLLDhCQUM4QixJOztBQXNDcENBLEtBQUssQ0FBQ1csU0FBTixHQUFrQjtBQUNoQkwsNEJBQTBCLEVBQUVNLGlEQUFTLENBQUNDO0FBRHRCLENBQWxCO0FBSUFiLEtBQUssQ0FBQ2MsWUFBTixHQUFxQjtBQUNuQlIsNEJBQTBCLEVBQUUsc0NBQU0sQ0FBRTtBQURqQixDQUFyQjs7SUFJTVMsSTs7Ozs7QUFDSixnQkFBWWQsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixnQ0FBT0EsS0FBUDtBQUNBLFdBQUtlLElBQUwsR0FBWSxPQUFLQSxJQUFMLENBQVVDLElBQVYsMEdBQVo7QUFGaUI7QUFHbEI7Ozs7MkJBQ0s7QUFDSixVQUFNQyxLQUFLLEdBQUdDLDBEQUFTLENBQUNDLFFBQVYsRUFBZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBLFVBQU1LLE9BQU8sR0FBRztBQUFHQSxlQUFPLEVBQUU7QUFDeEIsMEJBQWdCLGtCQURRO0FBRXhCLDRDQUEyQkwsS0FBM0I7QUFGd0I7QUFBWixPQUFoQjtBQUlBTSxtRUFBYSxDQUFDUixJQUFkLENBQW1CTyxPQUFuQixFQUE0QkUsSUFBNUIsQ0FBaUMsVUFBQUMsUUFBUSxFQUFJO0FBQzNDTCxlQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBUSxDQUFDQyxJQUFyQjtBQUNELE9BRkQsV0FHRSxVQUFBQyxLQUFLO0FBQUEsZUFBSVAsT0FBTyxDQUFDQyxHQUFSLENBQVlNLEtBQUssQ0FBQ0MsSUFBbEIsQ0FBSjtBQUFBLE9BSFA7QUFLRDs7OzZCQUNPO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUs7QUFBUSxlQUFPLEVBQUUsS0FBS2IsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBTCxDQURGO0FBR0Q7Ozs7RUF0QmdCUCw0Q0FBSyxDQUFDQyxTOztBQXlCVlYsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzLjQ4NDQ5OTRiYjdhYjJmOWFkNGYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTW1EYXRhU2VydmljZSBmcm9tIFwiLi4vdXRpbHMvYXhpb3Muc2VydmljZVwiO1xuaW1wb3J0IEF1dGhUb2tlbiBmcm9tIFwiLi4vdXRpbHMvYXV0aF90b2tlblwiXG5cblxuY2xhc3MgQWJvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcGFnZVRyYW5zaXRpb25EZWxheUVudGVyID0gdHJ1ZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMucGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIoKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KVxuICAgIH0sIDIwMDApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubG9hZGVkKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBiZy1zdWNjZXNzIHBhZ2VcIj5cbiAgICAgICAgPGgxPkFib3V0IHVzPC9oMT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTm90aWNlIGhvdyBhIGxvYWRpbmcgc3Bpbm5lciBzaG93ZWQgdXAgd2hpbGUgbXkgY29udGVudCB3YXMgXCJsb2FkaW5nXCI/XG4gICAgICAgICAgUHJldHR5IG5lYXQsIGh1aD9cbiAgICAgICAgPC9wPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArICcvJ30+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPkdvIGJhY2sgaG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8VGVzdC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuQWJvdXQucHJvcFR5cGVzID0ge1xuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkFib3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6ICgpID0+IHt9LFxufVxuXG5jbGFzcyBUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMudGVzdCA9IHRoaXMudGVzdC5iaW5kKHRoaXMpXG4gIH1cbiAgdGVzdCgpe1xuICAgIGNvbnN0IHRva2VuID0gQXV0aFRva2VuLmdldFRva2VuKCk7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7ICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgIH19XG4gICAgTW1EYXRhU2VydmljZS50ZXN0KGhlYWRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICB9KS5jYXRjaChcbiAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm5hbWUpXG4gICAgKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRlc3R9PnRlc3Q8L2J1dHRvbj48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=