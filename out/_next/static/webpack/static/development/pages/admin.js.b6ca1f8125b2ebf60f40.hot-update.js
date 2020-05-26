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

        var postData, headers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (term && method) {
                  postData = {
                    term: term,
                    method: method
                  };
                  headers = {
                    headers: {
                      "Content-type": "application/json"
                    }
                  };
                  _utils_axios_service__WEBPACK_IMPORTED_MODULE_11__["default"].findMarket(JSON.stringify(postData), headers).then(function (response) {
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

        var headers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                headers = {
                  headers: {
                    "Content-type": "application/json"
                  }
                };
                this.getPosition().then(function (position) {
                  var postData = {
                    coordinates: [position.coords.latitude, position.coords.longitude]
                  };
                  _utils_axios_service__WEBPACK_IMPORTED_MODULE_11__["default"].findMarketByLocation(JSON.stringify(postData), headers).then(function (response) {
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

              case 2:
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
          lineNumber: 84,
          columnNumber: 7
        }
      }, this.state.adminUser && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.props.handler,
        className: "add-market",
        variant: "dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, "Add Market"), !this.state.adminUser && __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 35
        }
      }, "Search The Market Database"), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handler: this.search,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }), !this.state.adminUser && __jsx(_locationSearch__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handler: this.locationSearch,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 35
        }
      }), __jsx("div", {
        className: "market-display",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "market-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
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
            lineNumber: 98,
            columnNumber: 19
          }
        }, !_this5.state.adminUser && __jsx("strong", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 47
          }
        }, market.name), _this5.state.adminUser && __jsx("div", {
          className: "admin-control",
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 23
          }
        }, __jsx("strong", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }
        }, market.name), __jsx("div", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "dark",
          onClick: function onClick() {
            return _this5.props.update(market);
          },
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 27
          }
        }, "update"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "danger",
          onClick: function onClick() {
            return _this5.props["delete"](market.id);
          },
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 27
          }
        }, "delete"))));
      }))), markets.length > 0 ? __jsx(_MarketDetail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        currentMarket: currentMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 33
        }
      }) : "No Markets"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }
      }, markets.length > 0 && __jsx(_googleMaps__WEBPACK_IMPORTED_MODULE_14__["default"], {
        markets: markets,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 34
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwic3RhdGUiLCJtYXJrZXRzIiwiY3VycmVudE1hcmtldCIsImN1cnJlbnRJbmRleCIsImFkbWluVXNlciIsImFkbWluIiwicmV0cmlldmVNYXJrZXRzIiwiYmluZCIsInNlbGVjdE1hcmtldCIsInNlYXJjaCIsImdldFBvc2l0aW9uIiwibG9jYXRpb25TZWFyY2giLCJNbURhdGFTZXJ2aWNlIiwiZ2V0QWxsTWFya2V0cyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcmtldCIsImluZGV4IiwidGVybSIsIm1ldGhvZCIsInBvc3REYXRhIiwiaGVhZGVycyIsImZpbmRNYXJrZXQiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlcyIsInJlaiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZGluYXRlcyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZmluZE1hcmtldEJ5TG9jYXRpb24iLCJoYW5kbGVyIiwibWFwIiwibmFtZSIsInVwZGF0ZSIsImlkIiwibGVuZ3RoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFBRSxFQURFO0FBRVhDLG1CQUFhLEVBQUUsSUFGSjtBQUdYQyxrQkFBWSxFQUFFLENBQUMsQ0FISjtBQUlYQyxlQUFTLEVBQUUsTUFBS0wsS0FB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QUFMLFdBQWtCc0IsTUFBTSxDQUFDeUIsRUFBekIsQ0FBTjtBQUFBLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsQ0FGRixDQVZKLENBRFU7QUFBQSxPQUFaLENBRkosQ0FERixDQURGLEVBMkJHN0MsT0FBTyxDQUFDOEMsTUFBUixHQUFpQixDQUFqQixHQUFxQixNQUFDLHNEQUFEO0FBQWMscUJBQWEsRUFBRTdDLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBckIsR0FBcUUsWUEzQnhFLENBVEYsRUFzQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHRCxPQUFPLENBQUM4QyxNQUFSLEdBQWlCLENBQWpCLElBQXNCLE1BQUMsb0RBQUQ7QUFBVyxlQUFPLEVBQUU5QyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRHpCLENBdENGLENBREY7QUE0Q0Q7Ozs7RUFySCtCK0MsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluLmpzLmI2Y2ExZjgxMjViMmViZjYwZjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sLCBCdXR0b24sIEFsZXJ0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBNbURhdGFTZXJ2aWNlIGZyb20gXCIuLi91dGlscy9heGlvcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBNYXJrZXREZXRhaWwgZnJvbSBcIi4vTWFya2V0RGV0YWlsXCI7XHJcbmltcG9ydCBNYXJrZXRNYXAgZnJvbSBcIi4vZ29vZ2xlTWFwc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSBcIi4vbG9jYXRpb25TZWFyY2hcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtYXJrZXRzOiBbXSxcclxuICAgICAgY3VycmVudE1hcmtldDogbnVsbCxcclxuICAgICAgY3VycmVudEluZGV4OiAtMSxcclxuICAgICAgYWRtaW5Vc2VyOiB0aGlzLnByb3BzLmFkbWluXHJcbiAgICAgIH07XHJcbiAgICB0aGlzLnJldHJpZXZlTWFya2V0cyA9IHRoaXMucmV0cmlldmVNYXJrZXRzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlbGVjdE1hcmtldCA9IHRoaXMuc2VsZWN0TWFya2V0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5sb2NhdGlvblNlYXJjaCA9IHRoaXMubG9jYXRpb25TZWFyY2guYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5yZXRyaWV2ZU1hcmtldHMoKVxyXG4gIH1cclxuXHJcbiAgcmV0cmlldmVNYXJrZXRzKCkge1xyXG4gICAgTW1EYXRhU2VydmljZS5nZXRBbGxNYXJrZXRzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1hcmtldHM6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKFxyXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICBzZWxlY3RNYXJrZXQobWFya2V0LCBpbmRleCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRNYXJrZXQ6IG1hcmtldCxcclxuICAgICAgY3VycmVudEluZGV4OiBpbmRleFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlYXJjaCh0ZXJtLCBtZXRob2QpIHtcclxuICAgIGlmICh0ZXJtICYmIG1ldGhvZCl7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IHtcclxuICAgICAgdGVybTogdGVybSxcclxuICAgICAgbWV0aG9kOiBtZXRob2RcclxuICAgIH1cclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgIH19XHJcbiAgICBNbURhdGFTZXJ2aWNlLmZpbmRNYXJrZXQoSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpLCBoZWFkZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFya2V0czogcmVzcG9uc2UuZGF0YSwgY3VycmVudE1hcmtldDogbnVsbH0pXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgfX1cclxuXHJcbiAgYXN5bmMgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXMsIHJlaik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvY2F0aW9uU2VhcmNoKCl7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICB9fVxyXG4gICAgdGhpcy5nZXRQb3NpdGlvbigpLnRoZW4ocG9zaXRpb249PiB7XHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXVxyXG4gICAgICB9XHJcbiAgICAgIE1tRGF0YVNlcnZpY2UuZmluZE1hcmtldEJ5TG9jYXRpb24oSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpLCBoZWFkZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXJrZXRzOiByZXNwb25zZS5kYXRhLCBjdXJyZW50TWFya2V0OiBudWxsfSlcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG1hcmtldHMsIGN1cnJlbnRJbmRleCwgY3VycmVudE1hcmtldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5hZG1pblVzZXIgJiZcclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVyfSBjbGFzc05hbWU9XCJhZGQtbWFya2V0XCIgdmFyaWFudD1cImRhcmtcIj5BZGQgTWFya2V0PC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHshdGhpcy5zdGF0ZS5hZG1pblVzZXIgJiYgPGg0PlNlYXJjaCBUaGUgTWFya2V0IERhdGFiYXNlPC9oND59XHJcbiAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgaGFuZGxlcj17dGhpcy5zZWFyY2h9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7IXRoaXMuc3RhdGUuYWRtaW5Vc2VyICYmIDxMb2NhdGlvblNlYXJjaCBoYW5kbGVyPXt0aGlzLmxvY2F0aW9uU2VhcmNofS8+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0LWRpc3BsYXlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2V0LWxpc3RcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICB7bWFya2V0cyAmJlxyXG4gICAgICAgICAgICAgICAgbWFya2V0cy5tYXAoKG1hcmtldCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgIChpbmRleCA9PT0gY3VycmVudEluZGV4ID8gXCJhY3RpdmVcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VsZWN0TWFya2V0KG1hcmtldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuYWRtaW5Vc2VyICYmIDxzdHJvbmc+e21hcmtldC5uYW1lfTwvc3Ryb25nPn1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hZG1pblVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnttYXJrZXQubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYXJrXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy51cGRhdGUobWFya2V0KX0+dXBkYXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUobWFya2V0LmlkKX0gPmRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge21hcmtldHMubGVuZ3RoID4gMCA/IDxNYXJrZXREZXRhaWwgY3VycmVudE1hcmtldD17Y3VycmVudE1hcmtldH0vPiA6IFwiTm8gTWFya2V0c1wifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7bWFya2V0cy5sZW5ndGggPiAwICYmIDxNYXJrZXRNYXAgbWFya2V0cz17bWFya2V0c30vPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=