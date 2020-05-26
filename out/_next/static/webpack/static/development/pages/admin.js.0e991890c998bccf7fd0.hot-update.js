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
        className: "market-detail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, currentMarket ? __jsx("div", {
        className: "market-detail-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      }, "Market Details"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }
      }, "Market Name:")), " ", currentMarket.name), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 19
        }
      }, "Food Category:")), " ", currentMarket.foodCategory), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 19
        }
      }, "Description:")), " ", currentMarket.description)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
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
            lineNumber: 63,
            columnNumber: 25
          }
        });
      }) : '')) : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtldERldGFpbC5qcyJdLCJuYW1lcyI6WyJpbWFnZUJhc2UiLCJNYXJrZXREZXRhaWwiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudE1hcmtldCIsImltYWdlTGlzdCIsIkltYWdlcyIsIm1hcCIsImtleSIsImluZGV4IiwibmFtZSIsImZvb2RDYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaW1hZ2VQYXRoIiwicHVzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLHdEQUFsQjs7SUFFcUJDLFk7Ozs7O0FBQ25CLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEVBQUUsTUFBS0YsS0FBTCxDQUFXRSxhQURmO0FBRVhDLGVBQVMsRUFBRTtBQUZBLEtBQWI7QUFGaUI7QUFNbEI7Ozs7NkJBaUJRO0FBQUE7O0FBQ1AsVUFBTUQsYUFBYSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0UsYUFBakM7QUFDQSxVQUFNRSxNQUFNLEdBQUcsS0FBS0gsS0FBTCxDQUFXRSxTQUFYLENBQXFCRSxHQUFyQixDQUF5QixVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZTtBQUNyRDtBQUFLLGFBQUcsRUFBRUEsS0FBVjtBQUFpQixhQUFHLEVBQUVELEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRCxPQUZjLENBQWY7QUFHQSxhQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0osYUFBYSxHQUNaO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERixFQUdXLEdBSFgsRUFJR0EsYUFBYSxDQUFDTSxJQUpqQixDQUZGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBREYsRUFHVyxHQUhYLEVBSUdOLGFBQWEsQ0FBQ08sWUFKakIsQ0FSRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLEVBR1csR0FIWCxFQUlHUCxhQUFhLENBQUNRLFdBSmpCLENBZEYsQ0FERixFQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dSLGFBQWEsR0FBRSxLQUFLRCxLQUFMLENBQVdFLFNBQVgsQ0FBcUJFLEdBQXJCLENBQXlCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFlO0FBQ3RELGVBQVE7QUFBSyxhQUFHLEVBQUVBLEtBQVY7QUFBaUIsYUFBRyxFQUFFRCxHQUF0QjtBQUEyQixlQUFLLEVBQUMsSUFBakM7QUFBc0MsZ0JBQU0sRUFBQyxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFDRCxPQUZlLENBQUYsR0FFVCxFQUhQLENBdkJGLENBRFksR0FnQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBRkYsQ0FqQ0osQ0FERjtBQXdDTTs7OzZDQTVEd0JOLEssRUFBT0MsSyxFQUFPO0FBQzVDLFVBQUdELEtBQUssQ0FBQ0UsYUFBTixLQUF3QkQsS0FBSyxDQUFDQyxhQUFqQyxFQUErQztBQUM3QyxZQUFJRixLQUFLLENBQUNFLGFBQVYsRUFBd0I7QUFDeEIsY0FBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLGVBQUssSUFBSUcsR0FBVCxJQUFnQk4sS0FBSyxDQUFDRSxhQUFOLENBQW9CUyxHQUFwQyxFQUF3QztBQUN0QyxnQkFBR0wsR0FBRyxLQUFHLEtBQVQsRUFBZTtBQUFFO0FBQVU7O0FBQzNCLGdCQUFNTSxTQUFTLGFBQU1kLFNBQU4sU0FBa0JFLEtBQUssQ0FBQ0UsYUFBTixDQUFvQlMsR0FBcEIsQ0FBd0JMLEdBQXhCLENBQWxCLENBQWY7QUFDQUgscUJBQVMsQ0FBQ1UsSUFBVixDQUFlRCxTQUFmO0FBQ0Q7O0FBQ0QsaUJBQU87QUFDTFQscUJBQVMsRUFBRUE7QUFETixXQUFQO0FBR0M7QUFBQzs7QUFDRixhQUFPLElBQVA7QUFDSDs7OztFQXZCdUNXLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcy4wZTk5MTg5MGM5OThiY2NmN2ZkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmNvbnN0IGltYWdlQmFzZSA9IFwiaHR0cHM6Ly9tbWRiLWFwaS51Yy5yLmFwcHNwb3QuY29tL3N0YXRpYy9NYXJrZXRJbWFnZXMvXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtldERldGFpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjdXJyZW50TWFya2V0OiB0aGlzLnByb3BzLmN1cnJlbnRNYXJrZXQsXHJcbiAgICAgIGltYWdlTGlzdDogW11cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XHJcbiAgICBpZihwcm9wcy5jdXJyZW50TWFya2V0ICE9PSBzdGF0ZS5jdXJyZW50TWFya2V0KXtcclxuICAgICAgaWYgKHByb3BzLmN1cnJlbnRNYXJrZXQpe1xyXG4gICAgICBsZXQgaW1hZ2VMaXN0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcy5jdXJyZW50TWFya2V0LmltZyl7XHJcbiAgICAgICAgaWYoa2V5PT09J19pZCcpeyBjb250aW51ZSB9XHJcbiAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gYCR7aW1hZ2VCYXNlfSR7cHJvcHMuY3VycmVudE1hcmtldC5pbWdba2V5XX1gXHJcbiAgICAgICAgaW1hZ2VMaXN0LnB1c2goaW1hZ2VQYXRoKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW1hZ2VMaXN0OiBpbWFnZUxpc3RcclxuICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY3VycmVudE1hcmtldCA9IHRoaXMucHJvcHMuY3VycmVudE1hcmtldFxyXG4gICAgY29uc3QgSW1hZ2VzID0gdGhpcy5zdGF0ZS5pbWFnZUxpc3QubWFwKChrZXksIGluZGV4KT0+IHtcclxuICAgICAgPGltZyBrZXk9e2luZGV4fSBzY3I9e2tleX0vPlxyXG4gICAgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0LWRldGFpbFwiPlxyXG4gICAgICAgIHtjdXJyZW50TWFya2V0ID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZXQtZGV0YWlsLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg0Pk1hcmtldCBEZXRhaWxzPC9oND5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hcmtldCBOYW1lOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudE1hcmtldC5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Rm9vZCBDYXRlZ29yeTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRNYXJrZXQuZm9vZENhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50TWFya2V0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnRNYXJrZXQ/IHRoaXMuc3RhdGUuaW1hZ2VMaXN0Lm1hcCgoa2V5LCBpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcga2V5PXtpbmRleH0gc3JjPXtrZXl9IHdpZHRoPVwiNjBcIiBoZWlnaHQ9XCI4MFwiLz4pXHJcbiAgICAgICAgICAgICAgfSkgOiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxwPlBsZWFzZSBjbGljayBvbiBhIE1hcmtldC4uLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9