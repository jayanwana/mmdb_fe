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
        return console.log(error.response.status);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJzZXRTdGF0ZSIsImNsZWFyVGltZW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIlRlc3QiLCJ0ZXN0IiwiYmluZCIsInRva2VuIiwiQXV0aFRva2VuIiwiZ2V0VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsIk1tRGF0YVNlcnZpY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7OztBQUdKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRTtBQURHLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCLFdBQUtDLFNBQUwsR0FBaUJDLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDLGNBQUksQ0FBQ0osS0FBTCxDQUFXSywwQkFBWDs7QUFDQSxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFSixnQkFBTSxFQUFFO0FBQVYsU0FBZDtBQUNELE9BSDBCLEVBR3hCLElBSHdCLENBQTNCO0FBSUQ7OzsyQ0FFc0I7QUFDckIsVUFBSSxLQUFLQyxTQUFULEVBQW9CSSxZQUFZLENBQUMsS0FBS0osU0FBTixDQUFaO0FBQ3JCOzs7NkJBRVE7QUFDUCxVQUFJLENBQUMsS0FBS0YsS0FBTCxDQUFXQyxNQUFoQixFQUF3QixPQUFPLElBQVA7QUFDeEIsYUFDRTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNHQUZGLEVBTUUsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsVUFBRSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQU5GLEVBU0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFURixDQURGO0FBYUQ7Ozs7RUFwQ2lCTSw0Q0FBSyxDQUFDQyxTOzswRkFBcEJWLEssOEJBQzhCLEk7O0FBc0NwQ0EsS0FBSyxDQUFDVyxTQUFOLEdBQWtCO0FBQ2hCTCw0QkFBMEIsRUFBRU0saURBQVMsQ0FBQ0M7QUFEdEIsQ0FBbEI7QUFJQWIsS0FBSyxDQUFDYyxZQUFOLEdBQXFCO0FBQ25CUiw0QkFBMEIsRUFBRSxzQ0FBTSxDQUFFO0FBRGpCLENBQXJCOztJQUlNUyxJOzs7OztBQUNKLGdCQUFZZCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGdDQUFPQSxLQUFQO0FBQ0EsV0FBS2UsSUFBTCxHQUFZLE9BQUtBLElBQUwsQ0FBVUMsSUFBViwwR0FBWjtBQUZpQjtBQUdsQjs7OzsyQkFDSztBQUNKLFVBQU1DLEtBQUssR0FBR0MsMERBQVMsQ0FBQ0MsUUFBVixFQUFkO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0EsVUFBTUssT0FBTyxHQUFHO0FBQUdBLGVBQU8sRUFBRTtBQUN4QiwwQkFBZ0Isa0JBRFE7QUFFeEIsNENBQTJCTCxLQUEzQjtBQUZ3QjtBQUFaLE9BQWhCO0FBSUFNLG1FQUFhLENBQUNSLElBQWQsQ0FBbUJPLE9BQW5CLEVBQTRCRSxJQUE1QixDQUFpQyxVQUFBQyxRQUFRLEVBQUk7QUFDM0NMLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFRLENBQUNDLElBQXJCO0FBQ0QsT0FGRCxXQUdFLFVBQUFDLEtBQUs7QUFBQSxlQUFJUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBSyxDQUFDRixRQUFOLENBQWVHLE1BQTNCLENBQUo7QUFBQSxPQUhQO0FBS0Q7Ozs2QkFDTztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLO0FBQVEsZUFBTyxFQUFFLEtBQUtiLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUwsQ0FERjtBQUdEOzs7O0VBdEJnQlAsNENBQUssQ0FBQ0MsUzs7QUF5QlZWLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy42MjdhYmFlZWFiYWE3NWIwMTNkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IE1tRGF0YVNlcnZpY2UgZnJvbSBcIi4uL3V0aWxzL2F4aW9zLnNlcnZpY2VcIjtcbmltcG9ydCBBdXRoVG9rZW4gZnJvbSBcIi4uL3V0aWxzL2F1dGhfdG9rZW5cIlxuXG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHBhZ2VUcmFuc2l0aW9uRGVsYXlFbnRlciA9IHRydWVcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyKClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMudGltZW91dElkKSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmxvYWRlZCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYmctc3VjY2VzcyBwYWdlXCI+XG4gICAgICAgIDxoMT5BYm91dCB1czwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE5vdGljZSBob3cgYSBsb2FkaW5nIHNwaW5uZXIgc2hvd2VkIHVwIHdoaWxlIG15IGNvbnRlbnQgd2FzIFwibG9hZGluZ1wiP1xuICAgICAgICAgIFByZXR0eSBuZWF0LCBodWg/XG4gICAgICAgIDwvcD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnLyd9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5HbyBiYWNrIGhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFRlc3QvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkFib3V0LnByb3BUeXBlcyA9IHtcbiAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5BYm91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiAoKSA9PiB7fSxcbn1cblxuY2xhc3MgVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnRlc3QgPSB0aGlzLnRlc3QuYmluZCh0aGlzKVxuICB9XG4gIHRlc3QoKXtcbiAgICBjb25zdCB0b2tlbiA9IEF1dGhUb2tlbi5nZXRUb2tlbigpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICBjb25zdCBoZWFkZXJzID0geyAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9fVxuICAgIE1tRGF0YVNlcnZpY2UudGVzdChoZWFkZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgfSkuY2F0Y2goXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5zdGF0dXMpXG4gICAgKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRlc3R9PnRlc3Q8L2J1dHRvbj48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=