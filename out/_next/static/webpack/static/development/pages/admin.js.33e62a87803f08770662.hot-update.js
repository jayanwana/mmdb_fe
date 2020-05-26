webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/auth_token */ "./utils/auth_token.js");
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _components_marketForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/marketForm */ "./components/marketForm.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/favicon.ico */ "./public/favicon.ico");
/* harmony import */ var _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_favicon_ico__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Main */ "./components/Main.js");







var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\pages\\admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Admin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Admin, _Component);

  var _super = _createSuper(Admin);

  function Admin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Admin);

    _this = _super.call(this, props);
    _this.state = {
      loaded: false,
      adminUser: false,
      showForm: false,
      market: null,
      update: false
    };
    _this.showForm = _this.showForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.deleteMarket = _this.deleteMarket.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.updateMarket = _this.updateMarket.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.props.pageTransitionReadyToEnter();

        _this2.setState({
          loaded: true
        });
      }, 2000);
      var token = _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"].getToken();
      var df = _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"].decodeToken(token); // console.log(df)

      if (token) {
        // console.log(token);
        var Auth = new _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"](token);

        if (Auth.isValid()) {
          console.log('valid');
          this.setState({
            adminUser: true
          });
          console.log(Auth.decodedToken.exp);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) clearTimeout(this.timeoutId);
    }
  }, {
    key: "showForm",
    value: function showForm(clear) {
      this.setState({
        showForm: !this.state.showForm
      });
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(market) {
      this.setState({
        market: market,
        update: true,
        showForm: true
      }); //
    }
  }, {
    key: "deleteMarket",
    value: function deleteMarket(id) {
      _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__["default"].deleteMarket(id).then(function (response) {
        console.log(response.data);
        alert("Market Successfully Deleted");
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("".concat("", "/admin"));
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var rand = function rand() {
        return Math.floor(Math.random() * 100);
      };

      if (!this.state.adminUser) {
        return null;
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }, "Admin"), __jsx("link", {
        rel: "icon",
        href: _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charset: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
        integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }), this.state.showForm && __jsx(_components_marketForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: rand(),
        close: this.showForm,
        market: this.state.market,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }, "Admin"), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_17__["default"], {
        admin: true,
        handler: this.showForm,
        update: this.updateMarket,
        "delete": this.deleteMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Admin, "pageTransitionDelayEnter", true);

Admin.propTypes = {
  pageTransitionReadyToEnter: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};
Admin.defaultProps = {
  pageTransitionReadyToEnter: function pageTransitionReadyToEnter() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Admin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi5qcyJdLCJuYW1lcyI6WyJBZG1pbiIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJhZG1pblVzZXIiLCJzaG93Rm9ybSIsIm1hcmtldCIsInVwZGF0ZSIsImJpbmQiLCJkZWxldGVNYXJrZXQiLCJ1cGRhdGVNYXJrZXQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJzZXRTdGF0ZSIsInRva2VuIiwiQXV0aFRva2VuIiwiZ2V0VG9rZW4iLCJkZiIsImRlY29kZVRva2VuIiwiQXV0aCIsImlzVmFsaWQiLCJjb25zb2xlIiwibG9nIiwiZGVjb2RlZFRva2VuIiwiZXhwIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXIiLCJpZCIsIk1tRGF0YVNlcnZpY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWNvIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBT0EsS0FBUDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsS0FERztBQUVYQyxlQUFTLEVBQUUsS0FGQTtBQUdYQyxjQUFRLEVBQUUsS0FIQztBQUlYQyxZQUFNLEVBQUUsSUFKRztBQUtYQyxZQUFNLEVBQUU7QUFMRyxLQUFiO0FBT0EsVUFBS0YsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNHLElBQWQseUdB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QUEwQixFQUFFLHNDQUFNLENBQUU7QUFEakIsQ0FBckI7QUFLZWIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluLmpzLjMzZTYyYTg3ODAzZjA4NzcwNjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIEJ1dHRvbiwgQWxlcnR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEF1dGhUb2tlbiBmcm9tIFwiLi4vdXRpbHMvYXV0aF90b2tlblwiO1xyXG5pbXBvcnQgTW1EYXRhU2VydmljZSBmcm9tIFwiLi4vdXRpbHMvYXhpb3Muc2VydmljZVwiO1xyXG5pbXBvcnQgTWFya2V0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL21hcmtldEZvcm0nO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdic7XHJcbmltcG9ydCBpY28gZnJvbSAnLi4vcHVibGljL2Zhdmljb24uaWNvJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluJztcclxuXHJcblxyXG5jbGFzcyBBZG1pbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHBhZ2VUcmFuc2l0aW9uRGVsYXlFbnRlciA9IHRydWVcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIgKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgIGFkbWluVXNlcjogZmFsc2UsXHJcbiAgICAgIHNob3dGb3JtOiBmYWxzZSxcclxuICAgICAgbWFya2V0OiBudWxsLFxyXG4gICAgICB1cGRhdGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dGb3JtID0gdGhpcy5zaG93Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kZWxldGVNYXJrZXQgPSB0aGlzLmRlbGV0ZU1hcmtldC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGVNYXJrZXQgPSB0aGlzLnVwZGF0ZU1hcmtldC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMucGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIoKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXHJcbiAgICB9LCAyMDAwKTtcclxuICAgIGxldCB0b2tlbiA9IEF1dGhUb2tlbi5nZXRUb2tlbigpO1xyXG4gICAgbGV0IGRmID0gQXV0aFRva2VuLmRlY29kZVRva2VuKHRva2VuKVxyXG4gICAgLy8gY29uc29sZS5sb2coZGYpXHJcbiAgICBpZiAodG9rZW4pe1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgIGxldCBBdXRoID0gbmV3IEF1dGhUb2tlbih0b2tlbik7XHJcbiAgICAgIGlmIChBdXRoLmlzVmFsaWQoKSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkbWluVXNlcjogdHJ1ZSxcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEF1dGguZGVjb2RlZFRva2VuLmV4cCk7XHJcbiAgICB9XHJcbiAgfX1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcclxuICB9XHJcblxyXG4gIHNob3dGb3JtKGNsZWFyKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXJrZXQobWFya2V0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWFya2V0OiBtYXJrZXQsXHJcbiAgICAgIHVwZGF0ZTogdHJ1ZSxcclxuICAgICAgc2hvd0Zvcm06IHRydWUsXHJcbiAgICB9KVxyXG4gICAgLy9cclxuICB9XHJcblxyXG4gIGRlbGV0ZU1hcmtldChpZCkge1xyXG4gICAgTW1EYXRhU2VydmljZS5kZWxldGVNYXJrZXQoaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICBhbGVydChcIk1hcmtldCBTdWNjZXNzZnVsbHkgRGVsZXRlZFwiKVxyXG4gICAgICBSb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYWRtaW5gKTtcclxuICAgIH0pLmNhdGNoKFxyXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCByYW5kID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcclxuICAgIGlmICghdGhpcy5zdGF0ZS5hZG1pblVzZXIpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+QWRtaW48L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2ljb30gLz5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIi8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJpZytTaG91bGRlcnMrRGlzcGxheXxNb250c2VycmF0fE9yYml0cm9ufFJvYm90byZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE5hdmlnYXRpb24vPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Zvcm0gJiZcclxuICAgICAgICAgICAgPE1hcmtldEZvcm0ga2V5PXtyYW5kKCl9IGNsb3NlPXt0aGlzLnNob3dGb3JtfSBtYXJrZXQ9e3RoaXMuc3RhdGUubWFya2V0fS8+fVxyXG4gICAgICAgICAgPGgxPkFkbWluPC9oMT5cclxuICAgICAgICAgIDxNYWluIGFkbWluPXt0cnVlfSBoYW5kbGVyPXt0aGlzLnNob3dGb3JtfSB1cGRhdGU9e3RoaXMudXBkYXRlTWFya2V0fSBkZWxldGU9e3RoaXMuZGVsZXRlTWFya2V0fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICB9XHJcbn1cclxuXHJcbkFkbWluLnByb3BUeXBlcyA9IHtcclxuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn1cclxuXHJcbkFkbWluLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogKCkgPT4ge30sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblxyXG4iXSwic291cmNlUm9vdCI6IiJ9