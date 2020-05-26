webpackHotUpdate("static\\development\\pages\\admin.js",{

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
      this.setState({
        markets: this.props.markets
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMap"], {
        defaultZoom: 11,
        defaultCenter: {
          lat: 6.524379,
          lng: 3.379206
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
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
            lineNumber: 30,
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
          lineNumber: 43,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }, this.state.selectedMarket.name), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }, this.state.selectedMarket.description), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
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
      lineNumber: 68,
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
        lineNumber: 72,
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
        lineNumber: 73,
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
        lineNumber: 74,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dvb2dsZU1hcHMuanMiXSwibmFtZXMiOlsiQVBJX0tFWSIsIm1hcFVSTCIsIk1hcCIsInByb3BzIiwic3RhdGUiLCJtYXJrZXRzIiwic2VsZWN0ZWRNYXJrZXQiLCJzZXRTdGF0ZSIsImxhdCIsImxuZyIsInNsaWNlIiwibWFwIiwibWFya2V0IiwiaWQiLCJsb2NhdGlvbiIsImNvb3JkaW5hdGVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZm9vZENhdGVnb3J5IiwiQ29tcG9uZW50IiwiTWFwV3JhcHBlZCIsIndpdGhTY3JpcHRqcyIsIndpdGhHb29nbGVNYXAiLCJNYXJrZXRNYXAiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BLElBQU1BLE9BQU8sNENBQWI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsMkZBQXlGRCxPQUF4Rzs7SUFFTUUsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFBRSxJQURFO0FBRVhDLG9CQUFjLEVBQUU7QUFGTCxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUNtQjtBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFBRUYsZUFBTyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0U7QUFBdEIsT0FBZDtBQUNEOzs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFLE1BQUMsMkRBQUQ7QUFDRSxtQkFBVyxFQUFFLEVBRGY7QUFFRSxxQkFBYSxFQUFFO0FBQUVHLGFBQUcsRUFBRSxRQUFQO0FBQWlCQyxhQUFHLEVBQUU7QUFBdEIsU0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlHLEtBQUtMLEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixLQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJLLEtBQW5CLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCQyxHQUEvQixDQUFtQyxVQUFBQyxNQUFNO0FBQUEsZUFDOUQsTUFBQyx3REFBRDtBQUNFLGFBQUcsRUFBRUEsTUFBTSxDQUFDQyxFQURkO0FBRUUsa0JBQVEsRUFBRTtBQUNSTCxlQUFHLEVBQUVJLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsV0FBaEIsQ0FBNEIsQ0FBNUIsQ0FERztBQUVSTixlQUFHLEVBQUVHLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsV0FBaEIsQ0FBNEIsQ0FBNUI7QUFGRyxXQUZaO0FBTUUsaUJBQU8sRUFBRSxtQkFBTTtBQUNiLGtCQUFJLENBQUNSLFFBQUwsQ0FBYztBQUFDRCw0QkFBYyxFQUFFTTtBQUFqQixhQUFkO0FBQ0QsV0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRDhEO0FBQUEsT0FBekMsQ0FKekIsRUFpQkcsS0FBS1IsS0FBTCxDQUFXRSxjQUFYLElBQ0MsTUFBQyw0REFBRDtBQUNFLG9CQUFZLEVBQUUsd0JBQU07QUFDbEIsZ0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNELDBCQUFjLEVBQUU7QUFBakIsV0FBZDtBQUNELFNBSEg7QUFJRSxnQkFBUSxFQUFFO0FBQ1JFLGFBQUcsRUFBRSxLQUFLSixLQUFMLENBQVdFLGNBQVgsQ0FBMEJRLFFBQTFCLENBQW1DQyxXQUFuQyxDQUErQyxDQUEvQyxDQURHO0FBRVJOLGFBQUcsRUFBRSxLQUFLTCxLQUFMLENBQVdFLGNBQVgsQ0FBMEJRLFFBQTFCLENBQW1DQyxXQUFuQyxDQUErQyxDQUEvQztBQUZHLFNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssS0FBS1gsS0FBTCxDQUFXRSxjQUFYLENBQTBCVSxJQUEvQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJLEtBQUtaLEtBQUwsQ0FBV0UsY0FBWCxDQUEwQlcsV0FBOUIsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxLQUFLYixLQUFMLENBQVdFLGNBQVgsQ0FBMEJZLFlBQTlCLENBSEYsQ0FURixDQWxCSixDQURGO0FBcUNEOzs7O0VBakRlQywrQzs7QUFvRGxCLElBQU1DLFVBQVUsR0FBR0Msc0VBQVksTUFBQ0MsdUVBQWEsQ0FBQ3BCLEdBQUQsQ0FBZCxDQUEvQjtNQUFNa0IsVTtBQUVTLFNBQVNHLFNBQVQsQ0FBbUJwQixLQUFuQixFQUEwQjtBQUN2QyxTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVxQixXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsVUFBRDtBQUNFLFdBQU8sRUFBRXRCLEtBQUssQ0FBQ0UsT0FEakI7QUFFRSxnQkFBWSxFQUFFSixNQUZoQjtBQUdFLGtCQUFjLEVBQUU7QUFBSyxXQUFLLEVBQUU7QUFBRXdCLGNBQU07QUFBUixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIbEI7QUFJRSxvQkFBZ0IsRUFBRTtBQUFLLFdBQUssRUFBRTtBQUFFQSxjQUFNO0FBQVIsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSnBCO0FBS0UsY0FBVSxFQUFFO0FBQUssV0FBSyxFQUFFO0FBQUVBLGNBQU07QUFBUixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQVdEO01BWnVCRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcy4yZTc0NjU4YjEzOGY0MzlmMjA5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3aXRoR29vZ2xlTWFwLFxyXG4gIHdpdGhTY3JpcHRqcyxcclxuICBHb29nbGVNYXAsXHJcbiAgTWFya2VyLFxyXG4gIEluZm9XaW5kb3dcclxufSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcclxuY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdNQVBfQVBJXHJcbmNvbnN0IG1hcFVSTCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/dj0zLmV4cCZsaWJyYXJpZXM9Z2VvbWV0cnksZHJhd2luZyxwbGFjZXMma2V5PWArQVBJX0tFWVxyXG5cclxuY2xhc3MgTWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIgKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1hcmtldHM6IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkTWFya2V0OiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWFya2V0czogdGhpcy5wcm9wcy5tYXJrZXRzIH0pXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybihcclxuICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgIGRlZmF1bHRab29tPXsxMX1cclxuICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogNi41MjQzNzksIGxuZzogMy4zNzkyMDYgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm1hcmtldHMgJiYgdGhpcy5zdGF0ZS5tYXJrZXRzLnNsaWNlKDAsIDUpLm1hcChtYXJrZXQgPT4gKFxyXG4gICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICBrZXk9e21hcmtldC5pZH1cclxuICAgICAgICAgICAgcG9zaXRpb249e3tcclxuICAgICAgICAgICAgICBsYXQ6IG1hcmtldC5sb2NhdGlvbi5jb29yZGluYXRlc1swXSxcclxuICAgICAgICAgICAgICBsbmc6IG1hcmtldC5sb2NhdGlvbi5jb29yZGluYXRlc1sxXVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXJrZXQ6IG1hcmtldH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXQgJiYgKFxyXG4gICAgICAgICAgPEluZm9XaW5kb3dcclxuICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRNYXJrZXQ6IG51bGx9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcG9zaXRpb249e3tcclxuICAgICAgICAgICAgICBsYXQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXQubG9jYXRpb24uY29vcmRpbmF0ZXNbMF0sXHJcbiAgICAgICAgICAgICAgbG5nOiB0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0LmxvY2F0aW9uLmNvb3JkaW5hdGVzWzFdXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyPnt0aGlzLnN0YXRlLnNlbGVjdGVkTWFya2V0Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5zZWxlY3RlZE1hcmtldC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuc2VsZWN0ZWRNYXJrZXQuZm9vZENhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0luZm9XaW5kb3c+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBNYXBXcmFwcGVkID0gd2l0aFNjcmlwdGpzKHdpdGhHb29nbGVNYXAoTWFwKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZXRNYXAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIzMDBweFwiIH19PlxyXG4gICAgICA8TWFwV3JhcHBlZFxyXG4gICAgICAgIG1hcmtldHM9e3Byb3BzLm1hcmtldHN9XHJcbiAgICAgICAgZ29vZ2xlTWFwVVJMPXttYXBVUkx9XHJcbiAgICAgICAgbG9hZGluZ0VsZW1lbnQ9ezxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgMTAwJWAgfX0gLz59XHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAxMDAlYCB9fSAvPn1cclxuICAgICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9