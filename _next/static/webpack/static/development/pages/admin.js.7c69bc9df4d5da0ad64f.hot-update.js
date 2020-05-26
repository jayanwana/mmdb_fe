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
      clear ? this.setState({
        showForm: !this.state.showForm,
        market: null
      }) : this.setState({
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
          lineNumber: 85,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }, "Admin"), __jsx("link", {
        rel: "icon",
        href: _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charset: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
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
          lineNumber: 91,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }), this.state.showForm && __jsx(_components_marketForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: rand(),
        close: this.showForm,
        market: this.state.market,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
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
          lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi5qcyJdLCJuYW1lcyI6WyJBZG1pbiIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJhZG1pblVzZXIiLCJzaG93Rm9ybSIsIm1hcmtldCIsInVwZGF0ZSIsImJpbmQiLCJkZWxldGVNYXJrZXQiLCJ1cGRhdGVNYXJrZXQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJzZXRTdGF0ZSIsInRva2VuIiwiQXV0aFRva2VuIiwiZ2V0VG9rZW4iLCJkZiIsImRlY29kZVRva2VuIiwiQXV0aCIsImlzVmFsaWQiLCJjb25zb2xlIiwibG9nIiwiZGVjb2RlZFRva2VuIiwiZXhwIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXIiLCJpZCIsIk1tRGF0YVNlcnZpY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWNvIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBT0EsS0FBUDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsS0FERztBQUVYQyxlQUFTLEVBQUUsS0FGQTtBQUdYQyxjQUFRLEVBQUUsS0FIQztBQUlYQyxZQUFNLEVBQUUsSUFKRztBQUtYQyxZQUFNLEVBQUU7QUFMRyxLQUFiO0FBT0EsVUFBS0YsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNHLElBQWQseUdB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MkZwQ0EsS0FBSyxDQUFDMkMsU0FBTixHQUFrQjtBQUNoQjlCLDRCQUEwQixFQUFFK0Isa0RBQVMsQ0FBQ0M7QUFEdEIsQ0FBbEI7QUFJQTdDLEtBQUssQ0FBQzhDLFlBQU4sR0FBcUI7QUFDbkJqQyw0QkFBMEIsRUFBRSxzQ0FBTSxDQUFFO0FBRGpCLENBQXJCO0FBS2ViLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcy43YzY5YmM5ZGY0ZDVkYTBhZDY0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sLCBCdXR0b24sIEFsZXJ0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBdXRoVG9rZW4gZnJvbSBcIi4uL3V0aWxzL2F1dGhfdG9rZW5cIjtcclxuaW1wb3J0IE1tRGF0YVNlcnZpY2UgZnJvbSBcIi4uL3V0aWxzL2F4aW9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IE1hcmtldEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9tYXJrZXRGb3JtJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnO1xyXG5pbXBvcnQgaWNvIGZyb20gJy4uL3B1YmxpYy9mYXZpY29uLmljbyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbic7XHJcblxyXG5cclxuY2xhc3MgQWRtaW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwYWdlVHJhbnNpdGlvbkRlbGF5RW50ZXIgPSB0cnVlXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICBhZG1pblVzZXI6IGZhbHNlLFxyXG4gICAgICBzaG93Rm9ybTogZmFsc2UsXHJcbiAgICAgIG1hcmtldDogbnVsbCxcclxuICAgICAgdXBkYXRlOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93Rm9ybSA9IHRoaXMuc2hvd0Zvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVsZXRlTWFya2V0ID0gdGhpcy5kZWxldGVNYXJrZXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudXBkYXRlTWFya2V0ID0gdGhpcy51cGRhdGVNYXJrZXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyKClcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgICBsZXQgdG9rZW4gPSBBdXRoVG9rZW4uZ2V0VG9rZW4oKTtcclxuICAgIGxldCBkZiA9IEF1dGhUb2tlbi5kZWNvZGVUb2tlbih0b2tlbilcclxuICAgIC8vIGNvbnNvbGUubG9nKGRmKVxyXG4gICAgaWYgKHRva2VuKXtcclxuICAgICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICBsZXQgQXV0aCA9IG5ldyBBdXRoVG9rZW4odG9rZW4pO1xyXG4gICAgICBpZiAoQXV0aC5pc1ZhbGlkKCkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZG1pblVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhBdXRoLmRlY29kZWRUb2tlbi5leHApO1xyXG4gICAgfVxyXG4gIH19XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMudGltZW91dElkKSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpXHJcbiAgfVxyXG5cclxuICBzaG93Rm9ybShjbGVhcil7XHJcbiAgICBjbGVhciA/XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm0sIG1hcmtldDogbnVsbH0pIDpcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXJrZXQobWFya2V0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWFya2V0OiBtYXJrZXQsXHJcbiAgICAgIHVwZGF0ZTogdHJ1ZSxcclxuICAgICAgc2hvd0Zvcm06IHRydWUsXHJcbiAgICB9KVxyXG4gICAgLy9cclxuICB9XHJcblxyXG4gIGRlbGV0ZU1hcmtldChpZCkge1xyXG4gICAgTW1EYXRhU2VydmljZS5kZWxldGVNYXJrZXQoaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICBhbGVydChcIk1hcmtldCBTdWNjZXNzZnVsbHkgRGVsZXRlZFwiKVxyXG4gICAgICBSb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYWRtaW5gKTtcclxuICAgIH0pLmNhdGNoKFxyXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCByYW5kID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMClcclxuICAgIGlmICghdGhpcy5zdGF0ZS5hZG1pblVzZXIpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+QWRtaW48L3RpdGxlPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2ljb30gLz5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIi8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJpZytTaG91bGRlcnMrRGlzcGxheXxNb250c2VycmF0fE9yYml0cm9ufFJvYm90byZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE5hdmlnYXRpb24vPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Zvcm0gJiZcclxuICAgICAgICAgICAgPE1hcmtldEZvcm0ga2V5PXtyYW5kKCl9IGNsb3NlPXt0aGlzLnNob3dGb3JtfSBtYXJrZXQ9e3RoaXMuc3RhdGUubWFya2V0fS8+fVxyXG4gICAgICAgICAgPGgxPkFkbWluPC9oMT5cclxuICAgICAgICAgIDxNYWluIGFkbWluPXt0cnVlfSBoYW5kbGVyPXt0aGlzLnNob3dGb3JtfSB1cGRhdGU9e3RoaXMudXBkYXRlTWFya2V0fSBkZWxldGU9e3RoaXMuZGVsZXRlTWFya2V0fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICB9XHJcbn1cclxuXHJcbkFkbWluLnByb3BUeXBlcyA9IHtcclxuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn1cclxuXHJcbkFkbWluLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogKCkgPT4ge30sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblxyXG4iXSwic291cmNlUm9vdCI6IiJ9