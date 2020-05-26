webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/loginForm.js":
/*!*********************************!*\
  !*** ./components/loginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _utils_auth_token__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/auth_token */ "./utils/auth_token.js");









var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\components\\loginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var LoginForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginForm, _Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LoginForm);

    _this = _super.call(this, props);
    _this.state = {
      email: "",
      password: ""
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value));
    }
  }, {
    key: "submitForm",
    value: function () {
      var _submitForm = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var _this2 = this;

        var postData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // event.preventDefault()
                if (this.state.email && this.state.password) {
                  postData = {
                    email: this.state.email,
                    password: this.state.password
                  };
                  console.log('submit');
                  _utils_axios_service__WEBPACK_IMPORTED_MODULE_12__["default"].login(JSON.stringify(postData)).then(function (response) {
                    _this2.setState({
                      email: "",
                      password: "",
                      invalid: false,
                      error: ""
                    });

                    _utils_auth_token__WEBPACK_IMPORTED_MODULE_13__["default"].storeToken(response.data.access_token);
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("".concat("", "/admin"));
                  })["catch"](function (error) {
                    console.log(error);

                    _this2.setState({
                      invalid: true,
                      error: "Invalid Login Details."
                    });
                  });
                } else {
                  this.setState({
                    invalid: true,
                    error: "Please fill all fields."
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submitForm(_x) {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.submitForm,
        className: "login-form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 5
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalEmail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        required: true,
        name: "email",
        type: "text",
        placeholder: "Email",
        value: this.state.email,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalPassword",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        required: true,
        name: "password",
        type: "password",
        placeholder: "Password",
        value: this.state.password,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: {
          span: 10,
          offset: 3
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        onClick: this.submitForm,
        variant: "dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, "Login"))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luRm9ybS5qcyJdLCJuYW1lcyI6WyJMb2dpbkZvcm0iLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsInN1Ym1pdEZvcm0iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInNldFN0YXRlIiwicG9zdERhdGEiLCJjb25zb2xlIiwibG9nIiwiTW1EYXRhU2VydmljZSIsImxvZ2luIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImludmFsaWQiLCJlcnJvciIsIkF1dGhUb2tlbiIsInN0b3JlVG9rZW4iLCJkYXRhIiwiYWNjZXNzX3Rva2VuIiwiUm91dGVyIiwicHVzaCIsIlJvdyIsInNwYW4iLCJvZmZzZXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR3FCQSxTOzs7OztBQUNqQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUUsRUFESTtBQUVYQyxjQUFRLEVBQUU7QUFGQyxLQUFiO0FBSUEsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLHlHQUF6QjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIseUdBQWxCO0FBUGlCO0FBUWxCOzs7O3NDQUNpQkUsSyxFQUFPO0FBQ3pCLFVBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFyQjtBQUNBLFVBQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFyQjtBQUNBLFVBQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRSxJQUFwQjtBQUVBLFdBQUtDLFFBQUwsK0ZB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LFlBQUksRUFBQyxVQUhQO0FBSUUsbUJBQVcsRUFBQyxVQUpkO0FBS0UsYUFBSyxFQUFFLEtBQUs1QixLQUFMLENBQVdFLFFBTHBCO0FBTUUsZ0JBQVEsRUFBRSxLQUFLQyxpQkFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBRkYsQ0FkRixFQTJCRSxNQUFDLHFEQUFELENBQU0sS0FBTjtBQUFZLFVBQUUsRUFBRXlCLG9EQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUFLLFVBQUUsRUFBRTtBQUFFQyxjQUFJLEVBQUUsRUFBUjtBQUFZQyxnQkFBTSxFQUFFO0FBQXBCLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsdURBQUQ7QUFBUSxlQUFPLEVBQUUsS0FBS3pCLFVBQXRCO0FBQWtDLGVBQU8sRUFBQyxNQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0EzQkYsQ0FEQTtBQW1DQzs7OztFQXZGa0MwQiwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbG9naW4uanMuMjI2YWM1MjZlMTE1NWFlOTRhZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgIFJvdywgQ29sLCBCdXR0b24sIEFsZXJ0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBNbURhdGFTZXJ2aWNlIGZyb20gJy4uL3V0aWxzL2F4aW9zLnNlcnZpY2UnO1xyXG5pbXBvcnQgQXV0aFRva2VuIGZyb20gJy4uL3V0aWxzL2F1dGhfdG9rZW4nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3VibWl0Rm9ybShldmVudCkge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgJiYgdGhpcy5zdGF0ZS5wYXNzd29yZCkge1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdCcpO1xyXG4gICAgTW1EYXRhU2VydmljZS5sb2dpbihKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBpbnZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgfSlcclxuICAgICAgQXV0aFRva2VuLnN0b3JlVG9rZW4ocmVzcG9uc2UuZGF0YS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICBSb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYWRtaW5gKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgTG9naW4gRGV0YWlscy5cIlxyXG4gICAgICB9KTtcclxuICAgIH0pfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaW52YWxpZDogdHJ1ZSxcclxuICAgICAgICBlcnJvcjogXCJQbGVhc2UgZmlsbCBhbGwgZmllbGRzLlwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsRW1haWxcIj5cclxuICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgIDxDb2wgc209ezh9PlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsUGFzc3dvcmRcIj5cclxuICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgIDxDb2wgc209ezh9PlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICA8Q29sIHNtPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDMgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0Rm9ybX0gdmFyaWFudD1cImRhcmtcIj5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9