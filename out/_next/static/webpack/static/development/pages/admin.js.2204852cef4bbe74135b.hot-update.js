webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/MarketDetail.js":
/*!************************************!*\
  !*** ./components/MarketDetail.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarketDetail; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");





var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\components\\MarketDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var imageBase = "https://mmdb-api.uc.r.appspot.com/static/MarketImages/";

var MarketDetail = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MarketDetail, _Component);

  var _super = _createSuper(MarketDetail);

  function MarketDetail(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MarketDetail);

    _this = _super.call(this, props);
    _this.state = {
      currentMarket: _this.props.currentMarket,
      imageList: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MarketDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentMarket = this.props.currentMarket;
      var Images = this.state.imageList.map(function (key, index) {
        __jsx("img", {
          key: index,
          scr: key,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }
        });
      });
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, currentMarket ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, "Market"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, "Market Name:")), " ", currentMarket.name), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, "Food Category:")), " ", currentMarket.foodCategory), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, "Description:")), " ", currentMarket.description), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, currentMarket ? this.state.imageList.map(function (key, index) {
        return __jsx("img", {
          key: index,
          src: key,
          width: "60",
          height: "80",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }
        });
      }) : '')) : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, "Please click on a Market...")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.currentMarket !== state.currentMarket) {
        if (props.currentMarket) {
          var imageList = [];

          for (var key in props.currentMarket.img) {
            if (key === '_id') {
              continue;
            }

            var imagePath = "".concat(imageBase).concat(props.currentMarket.img[key]);
            imageList.push(imagePath);
          }

          return {
            imageList: imageList
          };
        }
      }

      return null;
    }
  }]);

  return MarketDetail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtldERldGFpbC5qcyJdLCJuYW1lcyI6WyJpbWFnZUJhc2UiLCJNYXJrZXREZXRhaWwiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudE1hcmtldCIsImltYWdlTGlzdCIsIkltYWdlcyIsIm1hcCIsImtleSIsImluZGV4IiwibmFtZSIsImZvb2RDYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaW1hZ2VQYXRoIiwicHVzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdEQUFsQjs7SUFFcUJDLFk7Ozs7O0FBQ25CLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEVBQUUsTUFBS0YsS0FBTCxDQUFXRSxhQURmO0FBRVhDLGVBQVMsRUFBRTtBQUZBLEtBQWI7QUFGaUI7QUFNbEI7Ozs7NkJBaUJRO0FBQUE7O0FBQ1AsVUFBTUQsYUFBYSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0UsYUFBakM7QUFDQSxVQUFNRSxNQUFNLEdBQUcsS0FBS0gsS0FBTCxDQUFXRSxTQUFYLENBQXFCRSxHQUFyQixDQUF5QixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZTtBQUNyRDtBQUFLLGFBQUcsRUFBRUEsS0FBVjtBQUFpQixhQUFHLEVBQUVELEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRCxPQUZjLENBQWY7QUFHQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0osYUFBYSxHQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsRUFHVyxHQUhYLEVBSUdBLGFBQWEsQ0FBQ00sSUFKakIsQ0FGRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLEVBR1csR0FIWCxFQUlHTixhQUFhLENBQUNPLFlBSmpCLENBUkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERixFQUdXLEdBSFgsRUFJR1AsYUFBYSxDQUFDUSxXQUpqQixDQWRGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1IsYUFBYSxHQUFFLEtBQUtELEtBQUwsQ0FBV0UsU0FBWCxDQUFxQkUsR0FBckIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWU7QUFDdEQsZUFBUTtBQUFLLGFBQUcsRUFBRUEsS0FBVjtBQUFpQixhQUFHLEVBQUVELEdBQXRCO0FBQTJCLGVBQUssRUFBQyxJQUFqQztBQUFzQyxnQkFBTSxFQUFDLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQUNELE9BRmUsQ0FBRixHQUVULEVBSFAsQ0FyQkYsQ0FEWSxHQThCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FGRixDQS9CSixDQURGO0FBc0NNOzs7NkNBMUR3Qk4sSyxFQUFPQyxLLEVBQU87QUFDNUMsVUFBR0QsS0FBSyxDQUFDRSxhQUFOLEtBQXdCRCxLQUFLLENBQUNDLGFBQWpDLEVBQStDO0FBQzdDLFlBQUlGLEtBQUssQ0FBQ0UsYUFBVixFQUF3QjtBQUN4QixjQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsZUFBSyxJQUFJRyxHQUFULElBQWdCTixLQUFLLENBQUNFLGFBQU4sQ0FBb0JTLEdBQXBDLEVBQXdDO0FBQ3RDLGdCQUFHTCxHQUFHLEtBQUcsS0FBVCxFQUFlO0FBQUU7QUFBVTs7QUFDM0IsZ0JBQU1NLFNBQVMsYUFBTWQsU0FBTixTQUFrQkUsS0FBSyxDQUFDRSxhQUFOLENBQW9CUyxHQUFwQixDQUF3QkwsR0FBeEIsQ0FBbEIsQ0FBZjtBQUNBSCxxQkFBUyxDQUFDVSxJQUFWLENBQWVELFNBQWY7QUFDRDs7QUFDRCxpQkFBTztBQUNMVCxxQkFBUyxFQUFFQTtBQUROLFdBQVA7QUFHQztBQUFDOztBQUNGLGFBQU8sSUFBUDtBQUNIOzs7O0VBdkJ1Q1csK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluLmpzLjIyMDQ4NTJjZWY0YmJlNzQxMzViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuY29uc3QgaW1hZ2VCYXNlID0gXCJodHRwczovL21tZGItYXBpLnVjLnIuYXBwc3BvdC5jb20vc3RhdGljL01hcmtldEltYWdlcy9cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2V0RGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIgKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRNYXJrZXQ6IHRoaXMucHJvcHMuY3VycmVudE1hcmtldCxcclxuICAgICAgaW1hZ2VMaXN0OiBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgIGlmKHByb3BzLmN1cnJlbnRNYXJrZXQgIT09IHN0YXRlLmN1cnJlbnRNYXJrZXQpe1xyXG4gICAgICBpZiAocHJvcHMuY3VycmVudE1hcmtldCl7XHJcbiAgICAgIGxldCBpbWFnZUxpc3QgPSBbXTtcclxuICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzLmN1cnJlbnRNYXJrZXQuaW1nKXtcclxuICAgICAgICBpZihrZXk9PT0nX2lkJyl7IGNvbnRpbnVlIH1cclxuICAgICAgICBjb25zdCBpbWFnZVBhdGggPSBgJHtpbWFnZUJhc2V9JHtwcm9wcy5jdXJyZW50TWFya2V0LmltZ1trZXldfWBcclxuICAgICAgICBpbWFnZUxpc3QucHVzaChpbWFnZVBhdGgpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbWFnZUxpc3Q6IGltYWdlTGlzdFxyXG4gICAgICB9XHJcbiAgICAgIH19XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50TWFya2V0ID0gdGhpcy5wcm9wcy5jdXJyZW50TWFya2V0XHJcbiAgICBjb25zdCBJbWFnZXMgPSB0aGlzLnN0YXRlLmltYWdlTGlzdC5tYXAoKGtleSwgaW5kZXgpPT4ge1xyXG4gICAgICA8aW1nIGtleT17aW5kZXh9IHNjcj17a2V5fS8+XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7Y3VycmVudE1hcmtldCA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoND5NYXJrZXQ8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TWFya2V0IE5hbWU6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRNYXJrZXQubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Gb29kIENhdGVnb3J5Ojwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtjdXJyZW50TWFya2V0LmZvb2RDYXRlZ29yeX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPntcIiBcIn1cclxuICAgICAgICAgICAgICB7Y3VycmVudE1hcmtldC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50TWFya2V0PyB0aGlzLnN0YXRlLmltYWdlTGlzdC5tYXAoKGtleSwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIGtleT17aW5kZXh9IHNyYz17a2V5fSB3aWR0aD1cIjYwXCIgaGVpZ2h0PVwiODBcIi8+KVxyXG4gICAgICAgICAgICAgIH0pIDogJydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8cD5QbGVhc2UgY2xpY2sgb24gYSBNYXJrZXQuLi48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==