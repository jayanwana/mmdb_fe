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
    value: function showForm() {
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
      if (!this.state.adminUser) {
        return null;
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }, "Admin"), __jsx("link", {
        rel: "icon",
        href: _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charset: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
          lineNumber: 88,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }
      }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }), this.state.showForm && __jsx(_components_marketForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        close: this.showForm,
        market: this.state.market,
        update: this.state.update,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, "Admin"), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_17__["default"], {
        admin: true,
        handler: this.showForm,
        "delete": this.deleteMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi5qcyJdLCJuYW1lcyI6WyJBZG1pbiIsInByb3BzIiwic3RhdGUiLCJsb2FkZWQiLCJhZG1pblVzZXIiLCJzaG93Rm9ybSIsIm1hcmtldCIsInVwZGF0ZSIsImJpbmQiLCJkZWxldGVNYXJrZXQiLCJ1cGRhdGVNYXJrZXQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJzZXRTdGF0ZSIsInRva2VuIiwiQXV0aFRva2VuIiwiZ2V0VG9rZW4iLCJkZiIsImRlY29kZVRva2VuIiwiQXV0aCIsImlzVmFsaWQiLCJjb25zb2xlIiwibG9nIiwiZGVjb2RlZFRva2VuIiwiZXhwIiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJNbURhdGFTZXJ2aWNlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFsZXJ0IiwiUm91dGVyIiwicHVzaCIsImVycm9yIiwiaWNvIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBT0EsS0FBUDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsS0FERztBQUVYQyxlQUFTLEVBQUUsS0FGQTtBQUdYQyxjQUFRLEVBQUUsS0FIQztBQUlYQyxZQUFNLEVBQUUsSUFKRztBQUtYQyxZQUFNLEVBQUU7QUFMRyxLQUFiO0FBT0EsVUFBS0YsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNHLElBQWQseUdBQWhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENB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QUMsdUdBQVg7QUFBbUgsV0FBRyxFQUFDLFlBQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFORixDQURGLEVBU0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUcsS0FBS2xDLEtBQUwsQ0FBV0csUUFBWCxJQUNDLE1BQUMsK0RBQUQ7QUFBWSxhQUFLLEVBQUUsS0FBS0EsUUFBeEI7QUFBa0MsY0FBTSxFQUFFLEtBQUtILEtBQUwsQ0FBV0ksTUFBckQ7QUFBNkQsY0FBTSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ssTUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQUtFLE1BQUMseURBQUQ7QUFBTSxhQUFLLEVBQUUsSUFBYjtBQUFtQixlQUFPLEVBQUUsS0FBS0YsUUFBakM7QUFBMkMsa0JBQVEsS0FBS0ksWUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLENBVEYsQ0FERjtBQW1CRDs7OztFQXRGaUI0QiwrQzs7MEZBQWRyQyxLLDhCQUM4QixJOztBQXdGcENBLEtBQUssQ0FBQ3NDLFNBQU4sR0FBa0I7QUFDaEJ6Qiw0QkFBMEIsRUFBRTBCLGtEQUFTLENBQUNDO0FBRHRCLENBQWxCO0FBSUF4QyxLQUFLLENBQUN5QyxZQUFOLEdBQXFCO0FBQ25CNUIsNEJBQTBCLEVBQUUsc0NBQU0sQ0FBRTtBQURqQixDQUFyQjtBQUtlYixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW4uanMuYWZlODI0M2Q4ZmJkMzg1NDVjMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCwgQnV0dG9uLCBBbGVydH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQXV0aFRva2VuIGZyb20gXCIuLi91dGlscy9hdXRoX3Rva2VuXCI7XHJcbmltcG9ydCBNbURhdGFTZXJ2aWNlIGZyb20gXCIuLi91dGlscy9heGlvcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCBNYXJrZXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvbWFya2V0Rm9ybSc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2JztcclxuaW1wb3J0IGljbyBmcm9tICcuLi9wdWJsaWMvZmF2aWNvbi5pY28nO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4nO1xyXG5cclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcGFnZVRyYW5zaXRpb25EZWxheUVudGVyID0gdHJ1ZVxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgYWRtaW5Vc2VyOiBmYWxzZSxcclxuICAgICAgc2hvd0Zvcm06IGZhbHNlLFxyXG4gICAgICBtYXJrZXQ6IG51bGwsXHJcbiAgICAgIHVwZGF0ZTogZmFsc2VcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd0Zvcm0gPSB0aGlzLnNob3dGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRlbGV0ZU1hcmtldCA9IHRoaXMuZGVsZXRlTWFya2V0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwZGF0ZU1hcmtldCA9IHRoaXMudXBkYXRlTWFya2V0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5wYWdlVHJhbnNpdGlvblJlYWR5VG9FbnRlcigpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkZWQ6IHRydWUgfSlcclxuICAgIH0sIDIwMDApO1xyXG4gICAgbGV0IHRva2VuID0gQXV0aFRva2VuLmdldFRva2VuKCk7XHJcbiAgICBsZXQgZGYgPSBBdXRoVG9rZW4uZGVjb2RlVG9rZW4odG9rZW4pXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZilcclxuICAgIGlmICh0b2tlbil7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgbGV0IEF1dGggPSBuZXcgQXV0aFRva2VuKHRva2VuKTtcclxuICAgICAgaWYgKEF1dGguaXNWYWxpZCgpKXtcclxuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQnKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWRtaW5Vc2VyOiB0cnVlLFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coQXV0aC5kZWNvZGVkVG9rZW4uZXhwKTtcclxuICAgIH1cclxuICB9fVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKVxyXG4gIH1cclxuXHJcbiAgc2hvd0Zvcm0oKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXJrZXQobWFya2V0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWFya2V0OiBtYXJrZXQsXHJcbiAgICAgIHVwZGF0ZTogdHJ1ZSxcclxuICAgICAgc2hvd0Zvcm06IHRydWUsXHJcbiAgICB9KVxyXG4gICAgLy8gXHJcbiAgfVxyXG5cclxuICBkZWxldGVNYXJrZXQoaWQpIHtcclxuICAgIE1tRGF0YVNlcnZpY2UuZGVsZXRlTWFya2V0KGlkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgYWxlcnQoXCJNYXJrZXQgU3VjY2Vzc2Z1bGx5IERlbGV0ZWRcIilcclxuICAgICAgUm91dGVyLnB1c2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2FkbWluYCk7XHJcbiAgICB9KS5jYXRjaChcclxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmFkbWluVXNlcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5BZG1pbjwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17aWNvfSAvPlxyXG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmlnK1Nob3VsZGVycytEaXNwbGF5fE1vbnRzZXJyYXR8T3JiaXRyb258Um9ib3RvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Rm9ybSAmJlxyXG4gICAgICAgICAgICA8TWFya2V0Rm9ybSBjbG9zZT17dGhpcy5zaG93Rm9ybX0gbWFya2V0PXt0aGlzLnN0YXRlLm1hcmtldH0gdXBkYXRlPXt0aGlzLnN0YXRlLnVwZGF0ZX0vPn1cclxuICAgICAgICAgIDxoMT5BZG1pbjwvaDE+XHJcbiAgICAgICAgICA8TWFpbiBhZG1pbj17dHJ1ZX0gaGFuZGxlcj17dGhpcy5zaG93Rm9ybX0gZGVsZXRlPXt0aGlzLmRlbGV0ZU1hcmtldH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgfVxyXG59XHJcblxyXG5BZG1pbi5wcm9wVHlwZXMgPSB7XHJcbiAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG59XHJcblxyXG5BZG1pbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgcGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXI6ICgpID0+IHt9LFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==