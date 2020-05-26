webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/googleMaps.js":
/*!**********************************!*\
  !*** ./components/googleMaps.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarketMap; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\components\\googleMaps.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var API_KEY = "AIzaSyC36kr5pALWRMYe2_PWaPtzfZc4CKNqPhU";
var mapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + API_KEY;

var Map = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Map, _Component);

  var _super = _createSuper(Map);

  function Map(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    _this = _super.call(this, props);
    _this.state = {
      markets: null,
      selectedMarket: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(mapURL);
      this.setState({
        markets: this.props.markets
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMap"], {
        defaultZoom: 9,
        defaultCenter: {
          lat: 6.524379,
          lng: 3.379206
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }
      }, this.state.markets && this.state.markets.slice(0, 5).map(function (market) {
        return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["Marker"], {
          key: market.id,
          position: {
            lat: market.location.coordinates[0],
            lng: market.location.coordinates[1]
          },
          onClick: function onClick() {
            _this2.setState({
              selectedMarket: market
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }
        });
      }), this.state.selectedMarket && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["InfoWindow"], {
        onCloseClick: function onCloseClick() {
          _this2.setState({
            selectedMarket: null
          });
        },
        position: {
          lat: this.state.selectedMarket.location.coordinates[0],
          lng: this.state.selectedMarket.location.coordinates[1]
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }, this.state.selectedMarket.name), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }, this.state.selectedMarket.description), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, this.state.selectedMarket.foodCategory))));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var MapWrapped = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withScriptjs"])(_c = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withGoogleMap"])(Map));
_c2 = MapWrapped;
function MarketMap(props) {
  return __jsx("div", {
    style: {
      width: "100%",
      height: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(MapWrapped, {
    markets: props.markets,
    googleMapURL: mapURL,
    loadingElement: __jsx("div", {
      style: {
        height: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }),
    containerElement: __jsx("div", {
      style: {
        height: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 27
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }));
}
_c3 = MarketMap;

var _c, _c2, _c3;

$RefreshReg$(_c, "MapWrapped$withScriptjs");
$RefreshReg$(_c2, "MapWrapped");
$RefreshReg$(_c3, "MarketMap");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dvb2dsZU1hcHMuanMiXSwibmFtZXMiOlsiQVBJX0tFWSIsIm1hcFVSTCIsIk1hcCIsInByb3BzIiwic3RhdGUiLCJtYXJrZXRzIiwic2VsZWN0ZWRNYXJrZXQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJsYXQiLCJsbmciLCJzbGljZSIsIm1hcCIsIm1hcmtldCIsImlkIiwibG9jYXRpb24iLCJjb29yZGluYXRlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvb2RDYXRlZ29yeSIsIkNvbXBvbmVudCIsIk1hcFdyYXBwZWQiLCJ3aXRoU2NyaXB0anMiLCJ3aXRoR29vZ2xlTWFwIiwiTWFya2V0TWFwIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQSxJQUFNQSxPQUFPLDRDQUFiO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLDJGQUF5RkQsT0FBeEc7O0lBRU1FLEc7Ozs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBT0EsS0FBUDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBQUUsSUFERTtBQUVYQyxvQkFBYyxFQUFFO0FBRkwsS0FBYjtBQUZpQjtBQU1sQjs7Ozt3Q0FDbUI7QUFDbEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0FBQ0EsV0FBS1EsUUFBTCxDQUFjO0FBQUVKLGVBQU8sRUFBRSxLQUFLRixLQUFMLENBQVdFO0FBQXRCLE9BQWQ7QUFDRDs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRSxNQUFDLDJEQUFEO0FBQ0UsbUJBQVcsRUFBRSxDQURmO0FBRUUscUJBQWEsRUFBRTtBQUFFSyxhQUFHLEVBQUUsUUFBUDtBQUFpQkMsYUFBRyxFQUFFO0FBQXRCLFNBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJRyxLQUFLUCxLQUFM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dmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWUyNDI3MDAzYzU4ZWRkOTg0ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2l0aEdvb2dsZU1hcCxcclxuICB3aXRoU2NyaXB0anMsXHJcbiAgR29vZ2xlTWFwLFxyXG4gIE1hcmtlcixcclxuICBJbmZvV2luZG93XHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5HTUFQX0FQSVxyXG5jb25zdCBtYXBVUkwgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP3Y9My5leHAmbGlicmFyaWVzPWdlb21ldHJ5LGRyYXdpbmcscGxhY2VzJmtleT1gK0FQSV9LRVlcclxuXHJcbmNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtYXJrZXRzOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZE1hcmtldDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2cobWFwVVJMKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtYXJrZXRzOiB0aGlzLnByb3BzLm1hcmtldHMgfSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8R29vZ2xlTWFwXHJcbiAgICAgICAgZGVmYXVsdFpvb209ezl9XHJcbiAgICAgICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDYuNTI0Mzc5LCBsbmc6IDMuMzc5MjA2IH19XHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tYXJrZXRzICYmIHRoaXMuc3RhdGUubWFya2V0cy5zbGljZSgwLCA1KS5tYXAobWFya2V0ID0+IChcclxuICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAga2V5PXttYXJrZXQuaWR9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgbGF0OiBtYXJrZXQubG9jYXRpb24uY29vcmRpbmF0ZXNbMF0sXHJcbiAgICAgICAgICAgICAgbG5nOiBtYXJrZXQubG9jYXRpb24uY29vcmRpbmF0ZXNbMV1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWFya2V0OiBtYXJrZXR9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0ICYmIChcclxuICAgICAgICAgIDxJbmZvV2luZG93XHJcbiAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkTWFya2V0OiBudWxsfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgbGF0OiB0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0LmxvY2F0aW9uLmNvb3JkaW5hdGVzWzBdLFxyXG4gICAgICAgICAgICAgIGxuZzogdGhpcy5zdGF0ZS5zZWxlY3RlZE1hcmtldC5sb2NhdGlvbi5jb29yZGluYXRlc1sxXVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj57dGhpcy5zdGF0ZS5zZWxlY3RlZE1hcmtldC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0LmZvb2RDYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9JbmZvV2luZG93PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgTWFwV3JhcHBlZCA9IHdpdGhTY3JpcHRqcyh3aXRoR29vZ2xlTWFwKE1hcCkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2V0TWFwKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgPE1hcFdyYXBwZWRcclxuICAgICAgICBtYXJrZXRzPXtwcm9wcy5tYXJrZXRzfVxyXG4gICAgICAgIGdvb2dsZU1hcFVSTD17bWFwVVJMfVxyXG4gICAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XHJcbiAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==