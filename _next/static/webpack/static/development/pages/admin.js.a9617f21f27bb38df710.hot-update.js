webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");






var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\components\\nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  float: right;\n  margin-left: 4px;\n "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  z-index: 1;\n  border-radius: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  float: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  color: lightblue;\n  border-radius: 4px;\n  border: 2px solid ", ";\n  display: inline-block;\n  padding: 0px 16px;\n  font-size: 1em;\n  margin-left: 2px;\n  float: right;\n\n  &:focus, &:active, &:visited {\n    background: transparent;\n    color: white;\n  };\n  &:hover {\n    background: grey;\n    color: lightblue;\n  };\n  &:active {\n    background: lightblue;\n    color: black;\n  };\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Linka = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a(_templateObject(), function (props) {
  return props.primary ? "lightblue" : "white";
});
var StyledNav = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"])(_templateObject2());
var StyledNavbar = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"])(_templateObject3());
var StyledNavItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"])(_templateObject4());

var Navigation = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Navigation, _Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
        bg: "dark",
        sticky: "top",
        expand: "lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"].Brand, {
        id: "brand",
        style: {
          color: "white"
        },
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, "MMDB"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"].Toggle, {
        bg: "light",
        "aria-controls": "basic-navbar-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
        className: "ml-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about",
        as: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }, "About"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/login",
        as: "/login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, "Admin"))))));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6WyJMaW5rYSIsInN0eWxlZCIsImEiLCJwcm9wcyIsInByaW1hcnkiLCJTdHlsZWROYXYiLCJOYXYiLCJTdHlsZWROYXZiYXIiLCJOYXZiYXIiLCJTdHlsZWROYXZJdGVtIiwiTmF2SXRlbSIsIk5hdmlnYXRpb24iLCJjb2xvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsQ0FBVixvQkFHVyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLFdBQWhCLEdBQThCLE9BQWxDO0FBQUEsQ0FIaEIsQ0FBWDtBQXdCQSxJQUFNQyxTQUFTLEdBQUdKLGlFQUFNLENBQUNLLG9EQUFELENBQVQsb0JBQWY7QUFJQSxJQUFNQyxZQUFZLEdBQUdOLGlFQUFNLENBQUNPLHVEQUFELENBQVQsb0JBQWxCO0FBS0EsSUFBTUMsYUFBYSxHQUFHUixpRUFBTSxDQUFDUyx3REFBRCxDQUFULG9CQUFuQjs7SUFNTUMsVTs7Ozs7Ozs7Ozs7Ozt3Q0FFZ0IsQ0FDbkI7Ozs2QkFFUztBQUNSLGFBQ0UsTUFBQyx1REFBRDtBQUFRLFVBQUUsRUFBQyxNQUFYO0FBQWtCLGNBQU0sRUFBQyxLQUF6QjtBQUErQixjQUFNLEVBQUMsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsdURBQUQsQ0FBUSxLQUFSO0FBQWMsVUFBRSxFQUFDLE9BQWpCO0FBQXlCLGFBQUssRUFBRTtBQUFDQyxlQUFLLEVBQUM7QUFBUCxTQUFoQztBQUFpRCxZQUFJLEVBQUMsR0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsdURBQUQsQ0FBUSxNQUFSO0FBQWUsVUFBRSxFQUFDLE9BQWxCO0FBQTBCLHlCQUFjLGtCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRSxNQUFDLHVEQUFELENBQVEsUUFBUjtBQUFpQixVQUFFLEVBQUMsa0JBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG9EQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsVUFBRSxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBREYsRUFNRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsVUFBRSxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBTkYsQ0FERixDQUhGLENBREY7QUFvQkQ7Ozs7RUExQnNCQywrQzs7QUEyQnhCO0FBRWNGLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcy5hOTYxN2YyMWYyN2JiMzhkZjcxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IExpbmthID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ID8gXCJsaWdodGJsdWVcIiA6IFwid2hpdGVcIn07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAmOmZvY3VzLCAmOmFjdGl2ZSwgJjp2aXNpdGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB9O1xyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTmF2ID0gc3R5bGVkKE5hdilgXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBTdHlsZWROYXZiYXIgPSBzdHlsZWQoTmF2YmFyKWBcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuYFxyXG5cclxuY29uc3QgU3R5bGVkTmF2SXRlbSA9IHN0eWxlZChOYXZJdGVtKWBcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuIGA7XHJcblxyXG5cclxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgc3RpY2t5PVwidG9wXCIgZXhwYW5kPVwibGdcIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGlkPVwiYnJhbmRcIiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19IGhyZWY9XCIvXCIgPk1NREI8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBiZz1cImxpZ2h0XCIgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIi8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9hYm91dCd9PlxyXG4gICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBhcz17cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL2xvZ2luJ30+XHJcbiAgICAgICAgICAgICAgICA8YT5BZG1pbjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=