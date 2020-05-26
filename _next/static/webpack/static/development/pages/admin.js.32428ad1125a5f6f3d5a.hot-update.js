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
      showForm: false
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
    value: function showForm() {
      this.setState({
        showForm: !this.state.showForm
      });
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(id, data) {
      _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__["default"].updateMarket(id, data);
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
      if (!this.state.adminUser) {
        return null;
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }, "Admin"), __jsx("link", {
        rel: "icon",
        href: _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charset: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
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
          lineNumber: 81,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }
      }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }), this.state.showForm && __jsx(_components_marketForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        close: this.showForm,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 35
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }, "Admin"), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_17__["default"], {
        admin: true,
        handler: this.showForm,
        "delete": this.deleteMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi5qcyJdLCJuYW1lcyI6WyJBZG1pbiIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJhZG1pblVzZXIiLCJzaG93Rm9ybSIsImJpbmQiLCJkZWxldGVNYXJrZXQiLCJ1cGRhdGVNYXJrZXQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJzZXRTdGF0ZSIsInRva2VuIiwiQXV0aFRva2VuIiwiZ2V0VG9rZW4iLCJkZiIsImRlY29kZVRva2VuIiwiQXV0aCIsImlzVmFsaWQiLCJjb25zb2xlIiwibG9nIiwiZGVjb2RlZFRva2VuIiwiZXhwIiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJkYXRhIiwiTW1EYXRhU2VydmljZSIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0IiwiUm91dGVyIiwicHVzaCIsImVycm9yIiwiaWNvIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBT0EsS0FBUDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsS0FERztBQUVYQyxlQUFTLEVBQUUsS0FGQTtBQUdYQyxjQUFRLEVBQUU7QUFIQyxLQUFiO0FBS0EsVUFBS0EsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQseUdBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFDQSxVQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVHLEtBQUtoQyxLQUFMLENBQVdHLFFBQVgsSUFBdUIsTUFBQywrREFBRDtBQUFZLGFBQUssRUFBRSxLQUFLQSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRjFCLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQUlFLE1BQUMseURBQUQ7QUFBTSxhQUFLLEVBQUUsSUFBYjtBQUFtQixlQUFPLEVBQUUsS0FBS0EsUUFBakM7QUFBMkMsa0JBQVEsS0FBS0UsWUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpGLENBVEYsQ0FERjtBQWtCRDs7OztFQTlFaUI0QiwrQzs7MEZBQWRuQyxLLDhCQUM4QixJOztBQWdGcENBLEtBQUssQ0FBQ29DLFNBQU4sR0FBa0I7QUFDaEJ6Qiw0QkFBMEIsRUFBRTBCLGtEQUFTLENBQUNDO0FBRHRCLENBQWxCO0FBSUF0QyxLQUFLLENBQUN1QyxZQUFOLEdBQXFCO0FBQ25CNUIsNEJBQTBCLEVBQUUsc0NBQU0sQ0FBRTtBQURqQixDQUFyQjtBQUtlWCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW4uanMuMzI0MjhhZDExMjVhNWY2ZjNkNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCwgQnV0dG9uLCBBbGVydH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXV0aFRva2VuIGZyb20gXCIuLi91dGlscy9hdXRoX3Rva2VuXCI7XHJcbmltcG9ydCBNbURhdGFTZXJ2aWNlIGZyb20gXCIuLi91dGlscy9heGlvcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCBNYXJrZXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvbWFya2V0Rm9ybSc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2JztcclxuaW1wb3J0IGljbyBmcm9tICcuLi9wdWJsaWMvZmF2aWNvbi5pY28nO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4nO1xyXG5cclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcGFnZVRyYW5zaXRpb25EZWxheUVudGVyID0gdHJ1ZVxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgYWRtaW5Vc2VyOiBmYWxzZSxcclxuICAgICAgc2hvd0Zvcm06IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dGb3JtID0gdGhpcy5zaG93Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kZWxldGVNYXJrZXQgPSB0aGlzLmRlbGV0ZU1hcmtldC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGVNYXJrZXQgPSB0aGlzLnVwZGF0ZU1hcmtldC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMucGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIoKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGVkOiB0cnVlIH0pXHJcbiAgICB9LCAyMDAwKTtcclxuICAgIGxldCB0b2tlbiA9IEF1dGhUb2tlbi5nZXRUb2tlbigpO1xyXG4gICAgbGV0IGRmID0gQXV0aFRva2VuLmRlY29kZVRva2VuKHRva2VuKVxyXG4gICAgLy8gY29uc29sZS5sb2coZGYpXHJcbiAgICBpZiAodG9rZW4pe1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgIGxldCBBdXRoID0gbmV3IEF1dGhUb2tlbih0b2tlbik7XHJcbiAgICAgIGlmIChBdXRoLmlzVmFsaWQoKSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGFkbWluVXNlcjogdHJ1ZSxcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEF1dGguZGVjb2RlZFRva2VuLmV4cCk7XHJcbiAgICB9XHJcbiAgfX1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcclxuICB9XHJcblxyXG4gIHNob3dGb3JtKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm19KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWFya2V0KGlkLCBkYXRhKSB7XHJcbiAgICBNbURhdGFTZXJ2aWNlLnVwZGF0ZU1hcmtldChpZCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGRlbGV0ZU1hcmtldChpZCkge1xyXG4gICAgTW1EYXRhU2VydmljZS5kZWxldGVNYXJrZXQoaWQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICBhbGVydChcIk1hcmtldCBTdWNjZXNzZnVsbHkgRGVsZXRlZFwiKVxyXG4gICAgICBSb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYWRtaW5gKTtcclxuICAgIH0pLmNhdGNoKFxyXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuYWRtaW5Vc2VyKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkFkbWluPC90aXRsZT5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtpY299IC8+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCIvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CaWcrU2hvdWxkZXJzK0Rpc3BsYXl8TW9udHNlcnJhdHxPcmJpdHJvbnxSb2JvdG8mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dGb3JtICYmIDxNYXJrZXRGb3JtIGNsb3NlPXt0aGlzLnNob3dGb3JtfS8+fVxyXG4gICAgICAgICAgPGgxPkFkbWluPC9oMT5cclxuICAgICAgICAgIDxNYWluIGFkbWluPXt0cnVlfSBoYW5kbGVyPXt0aGlzLnNob3dGb3JtfSBkZWxldGU9e3RoaXMuZGVsZXRlTWFya2V0fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICB9XHJcbn1cclxuXHJcbkFkbWluLnByb3BUeXBlcyA9IHtcclxuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbn1cclxuXHJcbkFkbWluLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcjogKCkgPT4ge30sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pblxyXG4iXSwic291cmNlUm9vdCI6IiJ9