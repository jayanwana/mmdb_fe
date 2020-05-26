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
          lineNumber: 31,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, "About us"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, "Notice how a loading spinner showed up while my content was \"loading\"? Pretty neat, huh?"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        as: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "btn btn-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, "Go back home")), __jsx(Test, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
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
      var token = AuthToken.getToken();
      var headers = {
        headers: {
          "Content-type": "multipart/form-data",
          "Authorization": "Bearer ".concat(token)
        }
      };
      _utils_axios_service__WEBPACK_IMPORTED_MODULE_10__["default"].test(headers).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }
      }, __jsx("button", {
        onClick: this.test,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6WyJBYm91dCIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJzZXRTdGF0ZSIsImNsZWFyVGltZW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIlRlc3QiLCJ0ZXN0IiwiYmluZCIsInRva2VuIiwiQXV0aFRva2VuIiwiZ2V0VG9rZW4iLCJoZWFkZXJzIiwiTW1EYXRhU2VydmljZSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxLOzs7OztBQUdKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRTtBQURHLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCLFdBQUtDLFNBQUwsR0FBaUJDLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDLGNBQUksQ0FBQ0osS0FBTCxDQUFXSywwQkFBWDs7QUFDQSxjQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFSixnQkFBTSxFQUFFO0FBQVYsU0FBZDtBQUNELE9BSDBCLEVBR3hCLElBSHdCLENBQTNCO0FBSUQ7OzsyQ0FFc0I7QUFDckIsVUFBSSxLQUFLQyxTQUFULEVBQW9CSSxZQUFZLENBQUMsS0FBS0osU0FBTixDQUFaO0FBQ3JCOzs7NkJBRVE7QUFDUCxVQUFJLENBQUMsS0FBS0YsS0FBTCxDQUFXQyxNQUFoQixFQUF3QixPQUFPLElBQVA7QUFDeEIsYUFDRTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNHQUZGLEVBTUUsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsVUFBRSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQU5GLEVBU0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFURixDQURGO0FBYUQ7Ozs7RUFwQ2lCTSw0Q0FBSyxDQUFDQyxTOzswRkFBcEJWLEssOEJBQzhCLEk7O0FBc0NwQ0EsS0FBSyxDQUFDVyxTQUFOLEdBQWtCO0FBQ2hCTCw0QkFBMEIsRUFBRU0saURBQVMsQ0FBQ0M7QUFEdEIsQ0FBbEI7QUFJQWIsS0FBSyxDQUFDYyxZQUFOLEdBQXFCO0FBQ25CUiw0QkFBMEIsRUFBRSxzQ0FBTSxDQUFFO0FBRGpCLENBQXJCOztJQUlNUyxJOzs7OztBQUNKLGdCQUFZZCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGdDQUFPQSxLQUFQO0FBQ0EsV0FBS2UsSUFBTCxHQUFZLE9BQUtBLElBQUwsQ0FBVUMsSUFBViwwR0FBWjtBQUZpQjtBQUdsQjs7OzsyQkFDSztBQUNKLFVBQU1DLEtBQUssR0FBR0MsU0FBUyxDQUFDQyxRQUFWLEVBQWQ7QUFDQSxVQUFNQyxPQUFPLEdBQUc7QUFBR0EsZUFBTyxFQUFFO0FBQ3hCLDBCQUFnQixxQkFEUTtBQUV4Qiw0Q0FBMkJILEtBQTNCO0FBRndCO0FBQVosT0FBaEI7QUFJQUksbUVBQWEsQ0FBQ04sSUFBZCxDQUFtQkssT0FBbkIsRUFBNEJFLElBQTVCLENBQWlDLFVBQUFDLFFBQVEsRUFBSTtBQUMzQ0MsZUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBckI7QUFDRCxPQUZELFdBR0UsVUFBQUMsS0FBSztBQUFBLGVBQUlILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaLENBQUo7QUFBQSxPQUhQO0FBS0Q7Ozs2QkFDTztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLO0FBQVEsZUFBTyxFQUFFLEtBQUtaLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUwsQ0FERjtBQUdEOzs7O0VBckJnQlAsNENBQUssQ0FBQ0MsUzs7QUF3QlZWLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy42YjIwNGJiZDQyZWY5M2IyODhmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IE1tRGF0YVNlcnZpY2UgZnJvbSBcIi4uL3V0aWxzL2F4aW9zLnNlcnZpY2VcIjtcblxuXG5jbGFzcyBBYm91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwYWdlVHJhbnNpdGlvbkRlbGF5RW50ZXIgPSB0cnVlXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5wYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcigpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkZWQpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJnLXN1Y2Nlc3MgcGFnZVwiPlxuICAgICAgICA8aDE+QWJvdXQgdXM8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBOb3RpY2UgaG93IGEgbG9hZGluZyBzcGlubmVyIHNob3dlZCB1cCB3aGlsZSBteSBjb250ZW50IHdhcyBcImxvYWRpbmdcIj9cbiAgICAgICAgICBQcmV0dHkgbmVhdCwgaHVoP1xuICAgICAgICA8L3A+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy8nfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCI+R28gYmFjayBob21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxUZXN0Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5BYm91dC5wcm9wVHlwZXMgPSB7XG4gIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcbn1cblxuQWJvdXQuZGVmYXVsdFByb3BzID0ge1xuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogKCkgPT4ge30sXG59XG5cbmNsYXNzIFRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy50ZXN0ID0gdGhpcy50ZXN0LmJpbmQodGhpcylcbiAgfVxuICB0ZXN0KCl7XG4gICAgY29uc3QgdG9rZW4gPSBBdXRoVG9rZW4uZ2V0VG9rZW4oKTtcbiAgICBjb25zdCBoZWFkZXJzID0geyAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9fVxuICAgIE1tRGF0YVNlcnZpY2UudGVzdChoZWFkZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgfSkuY2F0Y2goXG4gICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICApXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj48YnV0dG9uIG9uQ2xpY2s9e3RoaXMudGVzdH0+dGVzdDwvYnV0dG9uPjwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==