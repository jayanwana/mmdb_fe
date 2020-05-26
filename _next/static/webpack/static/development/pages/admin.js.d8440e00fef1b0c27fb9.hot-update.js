webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _MarketDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MarketDetail */ "./components/MarketDetail.js");
/* harmony import */ var _googleMaps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./googleMaps */ "./components/googleMaps.js");
/* harmony import */ var _locationSearch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locationSearch */ "./components/locationSearch.js");








var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\components\\Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Main = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Main, _Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      markets: [],
      currentMarket: null,
      currentIndex: -1,
      adminUser: _this.props.admin
    };
    _this.retrieveMarkets = _this.retrieveMarkets.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.selectMarket = _this.selectMarket.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.search = _this.search.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.getPosition = _this.getPosition.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.locationSearch = _this.locationSearch.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.retrieveMarkets();
    }
  }, {
    key: "retrieveMarkets",
    value: function retrieveMarkets() {
      var _this2 = this;

      _utils_axios_service__WEBPACK_IMPORTED_MODULE_11__["default"].getAllMarkets().then(function (response) {
        _this2.setState({
          markets: response.data
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "selectMarket",
    value: function selectMarket(market, index) {
      this.setState({
        currentMarket: market,
        currentIndex: index
      });
    }
  }, {
    key: "search",
    value: function () {
      var _search = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(term, method) {
        var _this3 = this;

        var postData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (term && method) {
                  postData = {
                    term: term,
                    method: method
                  };
                  _utils_axios_service__WEBPACK_IMPORTED_MODULE_11__["default"].findMarket(JSON.stringify(postData)).then(function (response) {
                    console.log(response.data);

                    _this3.setState({
                      markets: response.data,
                      currentMarket: null
                    });
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function search(_x, _x2) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "getPosition",
    value: function () {
      var _getPosition = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (res, rej) {
                  navigator.geolocation.getCurrentPosition(res, rej);
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPosition() {
        return _getPosition.apply(this, arguments);
      }

      return getPosition;
    }()
  }, {
    key: "locationSearch",
    value: function () {
      var _locationSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.getPosition().then(function (position) {
                  console.log(position.coords);
                  var postData = {
                    coordinates: [position.coords.latitude, position.coords.longitude]
                  };
                  _utils_axios_service__WEBPACK_IMPORTED_MODULE_11__["default"].findMarketByLocation(JSON.stringify(postData)).then(function (response) {
                    _this4.setState({
                      markets: response.data,
                      currentMarket: null
                    });
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function locationSearch() {
        return _locationSearch.apply(this, arguments);
      }

      return locationSearch;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          markets = _this$state.markets,
          currentIndex = _this$state.currentIndex,
          currentMarket = _this$state.currentMarket;
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }
      }, this.state.adminUser && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: {
          span: 10,
          offset: 9
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.props.handler,
        variant: "dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }, "Add Market")), !this.state.adminUser && __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 35
        }
      }, "Search The Market Database"), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handler: this.search,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }), !this.state.adminUser && __jsx(_locationSearch__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handler: this.locationSearch,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 35
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }, markets && markets.map(function (market, index) {
        return __jsx("li", {
          className: "list-group-item " + (index === currentIndex ? "active" : ""),
          onClick: function onClick() {
            return _this5.selectMarket(market, index);
          },
          key: index,
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }
        }, !_this5.state.adminUser && __jsx("strong", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 45
          }
        }, market.name), _this5.state.adminUser && __jsx("div", {
          className: "admin-control",
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }
        }, __jsx("strong", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }
        }, market.name), __jsx("div", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 21
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "dark",
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 23
          }
        }, "update"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "danger",
          onClick: function onClick() {
            return _this5.props["delete"](market.id);
          },
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 23
          }
        }, "delete"))));
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }
      }, markets.length > 0 ? __jsx(_MarketDetail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        currentMarket: currentMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 35
        }
      }) : "No Markets"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      }, markets.length > 0 && __jsx(_googleMaps__WEBPACK_IMPORTED_MODULE_14__["default"], {
        markets: markets,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 36
        }
      }))));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwic3RhdGUiLCJtYXJrZXRzIiwiY3VycmVudE1hcmtldCIsImN1cnJlbnRJbmRleCIsImFkbWluVXNlciIsImFkbWluIiwicmV0cmlldmVNYXJrZXRzIiwiYmluZCIsInNlbGVjdE1hcmtldCIsInNlYXJjaCIsImdldFBvc2l0aW9uIiwibG9jYXRpb25TZWFyY2giLCJNbURhdGFTZXJ2aWNlIiwiZ2V0QWxsTWFya2V0cyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcmtldCIsImluZGV4IiwidGVybSIsIm1ldGhvZCIsInBvc3REYXRhIiwiZmluZE1hcmtldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzIiwicmVqIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImNvb3JkaW5hdGVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmaW5kTWFya2V0QnlMb2NhdGlvbiIsInNwYW4iLCJvZmZzZXQiLCJoYW5kbGVyIiwibWFwIiwibmFtZSIsImlkIiwibGVuZ3RoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFBRSxFQURFO0FBRVhDLG1CQUFhLEVBQUUsSUFGSjtBQUdYQyxrQkFBWSxFQUFFLENBQUMsQ0FISjtBQUlYQyxlQUFTLEVBQUUsTUFBS0wsS0FBTCxD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHN0MsT0FBTyxDQUFDOEMsTUFBUixHQUFpQixDQUFqQixHQUFxQixNQUFDLHNEQUFEO0FBQWMscUJBQWEsRUFBRTdDLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBckIsR0FBcUUsWUFEeEUsQ0F6QkYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHRCxPQUFPLENBQUM4QyxNQUFSLEdBQWlCLENBQWpCLElBQXNCLE1BQUMsb0RBQUQ7QUFBVyxlQUFPLEVBQUU5QyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRHpCLENBNUJGLENBWEYsQ0FERjtBQThDRDs7OztFQW5IK0IrQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW4uanMuZDg0NDBlMDBmZWYxYjBjMjdmYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIEJ1dHRvbiwgQWxlcnR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IE1tRGF0YVNlcnZpY2UgZnJvbSBcIi4uL3V0aWxzL2F4aW9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IE1hcmtldERldGFpbCBmcm9tIFwiLi9NYXJrZXREZXRhaWxcIjtcclxuaW1wb3J0IE1hcmtldE1hcCBmcm9tIFwiLi9nb29nbGVNYXBzXCI7XHJcbmltcG9ydCBMb2NhdGlvblNlYXJjaCBmcm9tIFwiLi9sb2NhdGlvblNlYXJjaFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIgKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1hcmtldHM6IFtdLFxyXG4gICAgICBjdXJyZW50TWFya2V0OiBudWxsLFxyXG4gICAgICBjdXJyZW50SW5kZXg6IC0xLFxyXG4gICAgICBhZG1pblVzZXI6IHRoaXMucHJvcHMuYWRtaW5cclxuICAgICAgfTtcclxuICAgIHRoaXMucmV0cmlldmVNYXJrZXRzID0gdGhpcy5yZXRyaWV2ZU1hcmtldHMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VsZWN0TWFya2V0ID0gdGhpcy5zZWxlY3RNYXJrZXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmxvY2F0aW9uU2VhcmNoID0gdGhpcy5sb2NhdGlvblNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnJldHJpZXZlTWFya2V0cygpXHJcbiAgfVxyXG5cclxuICByZXRyaWV2ZU1hcmtldHMoKSB7XHJcbiAgICBNbURhdGFTZXJ2aWNlLmdldEFsbE1hcmtldHMoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWFya2V0czogcmVzcG9uc2UuZGF0YVxyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goXHJcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHNlbGVjdE1hcmtldChtYXJrZXQsIGluZGV4KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudE1hcmtldDogbWFya2V0LFxyXG4gICAgICBjdXJyZW50SW5kZXg6IGluZGV4XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2VhcmNoKHRlcm0sIG1ldGhvZCkge1xyXG4gICAgaWYgKHRlcm0gJiYgbWV0aG9kKXtcclxuICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICB0ZXJtOiB0ZXJtLFxyXG4gICAgICBtZXRob2Q6IG1ldGhvZFxyXG4gICAgfVxyXG4gICAgTW1EYXRhU2VydmljZS5maW5kTWFya2V0KEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHttYXJrZXRzOiByZXNwb25zZS5kYXRhLCBjdXJyZW50TWFya2V0OiBudWxsfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICB9fVxyXG5cclxuICBhc3luYyBnZXRQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlcywgcmVqKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9jYXRpb25TZWFyY2goKXtcclxuICAgIHRoaXMuZ2V0UG9zaXRpb24oKS50aGVuKHBvc2l0aW9uPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMpO1xyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IHtcclxuICAgICAgICBjb29yZGluYXRlczogW3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZV1cclxuICAgICAgfVxyXG4gICAgICBNbURhdGFTZXJ2aWNlLmZpbmRNYXJrZXRCeUxvY2F0aW9uKEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFya2V0czogcmVzcG9uc2UuZGF0YSwgY3VycmVudE1hcmtldDogbnVsbH0pXHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBtYXJrZXRzLCBjdXJyZW50SW5kZXgsIGN1cnJlbnRNYXJrZXR9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuYWRtaW5Vc2VyICYmXHJcbiAgICAgICAgICA8Q29sIHNtPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDkgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVyfSB2YXJpYW50PVwiZGFya1wiPkFkZCBNYXJrZXQ8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7IXRoaXMuc3RhdGUuYWRtaW5Vc2VyICYmIDxoND5TZWFyY2ggVGhlIE1hcmtldCBEYXRhYmFzZTwvaDQ+fVxyXG4gICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgIGhhbmRsZXI9e3RoaXMuc2VhcmNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgeyF0aGlzLnN0YXRlLmFkbWluVXNlciAmJiA8TG9jYXRpb25TZWFyY2ggaGFuZGxlcj17dGhpcy5sb2NhdGlvblNlYXJjaH0vPn1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAge21hcmtldHMgJiZcclxuICAgICAgICAgICAgICBtYXJrZXRzLm1hcCgobWFya2V0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaXN0LWdyb3VwLWl0ZW0gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIChpbmRleCA9PT0gY3VycmVudEluZGV4ID8gXCJhY3RpdmVcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZWxlY3RNYXJrZXQobWFya2V0LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5hZG1pblVzZXIgJiYgPHN0cm9uZz57bWFya2V0Lm5hbWV9PC9zdHJvbmc+fVxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hZG1pblVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnttYXJrZXQubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFya1wiPnVwZGF0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUobWFya2V0LmlkKX0gPmRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bWFya2V0cy5sZW5ndGggPiAwID8gPE1hcmtldERldGFpbCBjdXJyZW50TWFya2V0PXtjdXJyZW50TWFya2V0fS8+IDogXCJObyBNYXJrZXRzXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHttYXJrZXRzLmxlbmd0aCA+IDAgJiYgPE1hcmtldE1hcCBtYXJrZXRzPXttYXJrZXRzfS8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9