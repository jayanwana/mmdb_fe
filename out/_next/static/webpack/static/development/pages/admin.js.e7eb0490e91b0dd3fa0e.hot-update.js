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
      }, this.state.adminUser && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        onClick: this.props.handler,
        className: "add-market",
        variant: "dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, "Add Market"), !this.state.adminUser && __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 35
        }
      }, "Search The Market Database"), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        handler: this.search,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }), !this.state.adminUser && __jsx(_locationSearch__WEBPACK_IMPORTED_MODULE_15__["default"], {
        handler: this.locationSearch,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 35
        }
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
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
            lineNumber: 93,
            columnNumber: 17
          }
        }, !_this5.state.adminUser && __jsx("strong", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 45
          }
        }, market.name), _this5.state.adminUser && __jsx("div", {
          className: "admin-control",
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }
        }, __jsx("strong", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }
        }, market.name), __jsx("div", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "dark",
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
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
            lineNumber: 107,
            columnNumber: 23
          }
        }, "delete"))));
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      }, markets.length > 0 ? __jsx(_MarketDetail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        currentMarket: currentMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 35
        }
      }) : "No Markets"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }
      }, markets.length > 0 && __jsx(_googleMaps__WEBPACK_IMPORTED_MODULE_14__["default"], {
        markets: markets,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwic3RhdGUiLCJtYXJrZXRzIiwiY3VycmVudE1hcmtldCIsImN1cnJlbnRJbmRleCIsImFkbWluVXNlciIsImFkbWluIiwicmV0cmlldmVNYXJrZXRzIiwiYmluZCIsInNlbGVjdE1hcmtldCIsInNlYXJjaCIsImdldFBvc2l0aW9uIiwibG9jYXRpb25TZWFyY2giLCJNbURhdGFTZXJ2aWNlIiwiZ2V0QWxsTWFya2V0cyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcmtldCIsImluZGV4IiwidGVybSIsIm1ldGhvZCIsInBvc3REYXRhIiwiZmluZE1hcmtldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzIiwicmVqIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImNvb3JkaW5hdGVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmaW5kTWFya2V0QnlMb2NhdGlvbiIsImhhbmRsZXIiLCJtYXAiLCJuYW1lIiwiaWQiLCJsZW5ndGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU9BLEtBQVA7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQUFFLEVBREU7QUFFWEMsbUJBQWEsRUFBRSxJQUZKO0FBR1hDLGtCQUFZLEVBQUUsQ0FBQyxDQUhKO0FBSVhDLGVBQVMsRUFBRSxNQUFLTCxLQUFMLENBQVdNO0FBSlgsS0FBYjtBQU1BLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIseUdBQXZCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFDQSxVQUFLRSxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRixJQUFaLHlHQUFkO0FBQ0EsVUFBS0csV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCSCxJQUFqQix5R0FBbkI7QUFDQSxVQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLHlHQUF0QjtBQVppQjtBQWFsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsZUFBTDtBQUNEOzs7c0NBRWlCO0FBQUE7O0FBQ2hCTSxtRUFBYSxDQUFDQyxhQUFkLEdBQThCQyxJQUE5QixDQUFtQyxVQUFBQyxRQUFRLEVBQUk7QUFDN0MsY0FBSSxDQUFDQyxRQUFMLENBQWM7QUFDWmYsaUJBQU8sRUFBRWMsUUFBUSxDQUFDRTtBQUROLFNBQWQ7QUFHRCxPQUpELFdBS0ksVUFBQUMsS0FBSztBQUFBLGVBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQUo7QUFBQSxPQUxUO0FBT0Q7OztpQ0FFWUcsTSxFQUFRQyxLLEVBQU87QUFDMUIsV0FBS04sUUFBTCxDQUFjO0FBQ1pkLHFCQUFhLEVBQUVtQixNQURIO0FBRVpsQixvQkFBWSxFQUFFbUI7QUFGRixPQUFkO0FBSUQ7Ozs7c05BRVlDLEksRUFBTUMsTTs7Ozs7Ozs7QUFDakIsb0JBQUlELElBQUksSUFBSUMsTUFBWixFQUFtQjtBQUNiQywwQkFEYSxHQUNGO0FBQ2ZGLHdCQUFJLEVBQUVBLElBRFM7QUFFZkMsMEJBQU0sRUFBRUE7QUFGTyxtQkFERTtBQUtuQlosK0VBQWEsQ0FBQ2MsVUFBZCxDQUF5QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVILFFBQWYsQ0FBekIsRUFBbURYLElBQW5ELENBQXdELFVBQUFDLFFBQVEsRUFBSTtBQUNsRUksMkJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFRLENBQUNFLElBQXJCOztBQUNBLDBCQUFJLENBQUNELFFBQUwsQ0FBYztBQUFDZiw2QkFBTyxFQUFFYyxRQUFRLENBQUNFLElBQW5CO0FBQXlCZixtQ0FBYSxFQUFFO0FBQXhDLHFCQUFkO0FBQ0QsbUJBSEQsV0FHUyxVQUFBZ0IsS0FBSztBQUFBLDJCQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUEsbUJBSGQ7QUFJRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUdRLElBQUlXLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM3QkMsMkJBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDSixHQUF6QyxFQUE4Q0MsR0FBOUM7QUFDSCxpQkFGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1QLHFCQUFLckIsV0FBTCxHQUFtQkksSUFBbkIsQ0FBd0IsVUFBQXFCLFFBQVEsRUFBRztBQUNqQ2hCLHlCQUFPLENBQUNDLEdBQVIsQ0FBWWUsUUFBUSxDQUFDQyxNQUFyQjtBQUNBLHNCQUFNWCxRQUFRLEdBQUc7QUFDZlksK0JBQVcsRUFBRSxDQUFDRixRQUFRLENBQUNDLE1BQVQsQ0FBZ0JFLFFBQWpCLEVBQTJCSCxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JHLFNBQTNDO0FBREUsbUJBQWpCO0FBR0EzQiwrRUFBYSxDQUFDNEIsb0JBQWQsQ0FBbUNiLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxRQUFmLENBQW5DLEVBQTZEWCxJQUE3RCxDQUFrRSxVQUFBQyxRQUFRLEVBQUk7QUFDNUUsMEJBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNmLDZCQUFPLEVBQUVjLFFBQVEsQ0FBQ0UsSUFBbkI7QUFBeUJmLG1DQUFhLEVBQUU7QUFBeEMscUJBQWQ7QUFDRCxtQkFGRCxXQUVTLFVBQUFnQixLQUFLO0FBQUEsMkJBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQUo7QUFBQSxtQkFGZDtBQUdELGlCQVJELFdBUVMsVUFBQUEsS0FBSztBQUFBLHlCQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUEsaUJBUmQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFXTztBQUFBOztBQUFBLHdCQUN5QyxLQUFLbEIsS0FEOUM7QUFBQSxVQUNDQyxPQURELGVBQ0NBLE9BREQ7QUFBQSxVQUNVRSxZQURWLGVBQ1VBLFlBRFY7QUFBQSxVQUN3QkQsYUFEeEIsZUFDd0JBLGFBRHhCO0FBRVAsYUFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0YsS0FBTCxDQUFXSSxTQUFYLElBQ0MsTUFBQyx1REFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLTCxLQUFMLENBQVcwQyxPQUE1QjtBQUFxQyxpQkFBUyxFQUFDLFlBQS9DO0FBQTRELGVBQU8sRUFBQyxNQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLEVBSUcsQ0FBQyxLQUFLekMsS0FBTCxDQUFXSSxTQUFaLElBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSjVCLEVBS0UsTUFBQyxtREFBRDtBQUNFLGVBQU8sRUFBRSxLQUFLSyxNQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsRUFRRyxDQUFDLEtBQUtULEtBQUwsQ0FBV0ksU0FBWixJQUF5QixNQUFDLHdEQUFEO0FBQWdCLGVBQU8sRUFBRSxLQUFLTyxjQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUjVCLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1YsT0FBTyxJQUNOQSxPQUFPLENBQUN5QyxHQUFSLENBQVksVUFBQ3JCLE1BQUQsRUFBU0MsS0FBVDtBQUFBLGVBQ1Y7QUFDRSxtQkFBUyxFQUNQLHNCQUNDQSxLQUFLLEtBQUtuQixZQUFWLEdBQXlCLFFBQXpCLEdBQW9DLEVBRHJDLENBRko7QUFLRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDSyxZQUFMLENBQWtCYSxNQUFsQixFQUEwQkMsS0FBMUIsQ0FBTjtBQUFBLFdBTFg7QUFNRSxhQUFHLEVBQUVBLEtBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFHLENBQUMsTUFBSSxDQUFDdEIsS0FBTCxDQUFXSSxTQUFaLElBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBU2lCLE1BQU0sQ0FBQ3NCLElBQWhCLENBUjVCLEVBU0csTUFBSSxDQUFDM0MsS0FBTCxDQUFXSSxTQUFYLElBQ0M7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBU2lCLE1BQU0sQ0FBQ3NCLElBQWhCLENBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyx1REFBRDtBQUFRLGlCQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsdURBQUQ7QUFBUSxpQkFBTyxFQUFDLFFBQWhCO0FBQXlCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUM1QyxLQUFMLFdBQWtCc0IsTUFBTSxDQUFDdUIsRUFBekIsQ0FBTjtBQUFBLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsQ0FGQSxDQVZKLENBRFU7QUFBQSxPQUFaLENBRkosQ0FERixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0czQyxPQUFPLENBQUM0QyxNQUFSLEdBQWlCLENBQWpCLEdBQXFCLE1BQUMsc0RBQUQ7QUFBYyxxQkFBYSxFQUFFM0MsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFyQixHQUFxRSxZQUR4RSxDQXpCRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dELE9BQU8sQ0FBQzRDLE1BQVIsR0FBaUIsQ0FBakIsSUFBc0IsTUFBQyxvREFBRDtBQUFXLGVBQU8sRUFBRTVDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEekIsQ0E1QkYsQ0FURixDQURGO0FBNENEOzs7O0VBakgrQjZDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pbi5qcy5lN2ViMDQ5MGU5MWIwZGQzZmEwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCwgQnV0dG9uLCBBbGVydH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgTW1EYXRhU2VydmljZSBmcm9tIFwiLi4vdXRpbHMvYXhpb3Muc2VydmljZVwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgTWFya2V0RGV0YWlsIGZyb20gXCIuL01hcmtldERldGFpbFwiO1xyXG5pbXBvcnQgTWFya2V0TWFwIGZyb20gXCIuL2dvb2dsZU1hcHNcIjtcclxuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gXCIuL2xvY2F0aW9uU2VhcmNoXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWFya2V0czogW10sXHJcbiAgICAgIGN1cnJlbnRNYXJrZXQ6IG51bGwsXHJcbiAgICAgIGN1cnJlbnRJbmRleDogLTEsXHJcbiAgICAgIGFkbWluVXNlcjogdGhpcy5wcm9wcy5hZG1pblxyXG4gICAgICB9O1xyXG4gICAgdGhpcy5yZXRyaWV2ZU1hcmtldHMgPSB0aGlzLnJldHJpZXZlTWFya2V0cy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWxlY3RNYXJrZXQgPSB0aGlzLnNlbGVjdE1hcmtldC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMubG9jYXRpb25TZWFyY2ggPSB0aGlzLmxvY2F0aW9uU2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucmV0cmlldmVNYXJrZXRzKClcclxuICB9XHJcblxyXG4gIHJldHJpZXZlTWFya2V0cygpIHtcclxuICAgIE1tRGF0YVNlcnZpY2UuZ2V0QWxsTWFya2V0cygpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtYXJrZXRzOiByZXNwb25zZS5kYXRhXHJcbiAgICAgIH0pXHJcbiAgICB9KS5jYXRjaChcclxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TWFya2V0KG1hcmtldCwgaW5kZXgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50TWFya2V0OiBtYXJrZXQsXHJcbiAgICAgIGN1cnJlbnRJbmRleDogaW5kZXhcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZWFyY2godGVybSwgbWV0aG9kKSB7XHJcbiAgICBpZiAodGVybSAmJiBtZXRob2Qpe1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgIHRlcm06IHRlcm0sXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kXHJcbiAgICB9XHJcbiAgICBNbURhdGFTZXJ2aWNlLmZpbmRNYXJrZXQoSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe21hcmtldHM6IHJlc3BvbnNlLmRhdGEsIGN1cnJlbnRNYXJrZXQ6IG51bGx9KVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gIH19XHJcblxyXG4gIGFzeW5jIGdldFBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzLCByZWopO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2NhdGlvblNlYXJjaCgpe1xyXG4gICAgdGhpcy5nZXRQb3NpdGlvbigpLnRoZW4ocG9zaXRpb249PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uLmNvb3Jkcyk7XHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0ge1xyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBbcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXVxyXG4gICAgICB9XHJcbiAgICAgIE1tRGF0YVNlcnZpY2UuZmluZE1hcmtldEJ5TG9jYXRpb24oSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttYXJrZXRzOiByZXNwb25zZS5kYXRhLCBjdXJyZW50TWFya2V0OiBudWxsfSlcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG1hcmtldHMsIGN1cnJlbnRJbmRleCwgY3VycmVudE1hcmtldH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5hZG1pblVzZXIgJiZcclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVyfSBjbGFzc05hbWU9XCJhZGQtbWFya2V0XCIgdmFyaWFudD1cImRhcmtcIj5BZGQgTWFya2V0PC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHshdGhpcy5zdGF0ZS5hZG1pblVzZXIgJiYgPGg0PlNlYXJjaCBUaGUgTWFya2V0IERhdGFiYXNlPC9oND59XHJcbiAgICAgICAgPFNlYXJjaEJhclxyXG4gICAgICAgICAgaGFuZGxlcj17dGhpcy5zZWFyY2h9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7IXRoaXMuc3RhdGUuYWRtaW5Vc2VyICYmIDxMb2NhdGlvblNlYXJjaCBoYW5kbGVyPXt0aGlzLmxvY2F0aW9uU2VhcmNofS8+fVxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICB7bWFya2V0cyAmJlxyXG4gICAgICAgICAgICAgIG1hcmtldHMubWFwKChtYXJrZXQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbSBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgKGluZGV4ID09PSBjdXJyZW50SW5kZXggPyBcImFjdGl2ZVwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbGVjdE1hcmtldChtYXJrZXQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmFkbWluVXNlciAmJiA8c3Ryb25nPnttYXJrZXQubmFtZX08L3N0cm9uZz59XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFkbWluVXNlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e21hcmtldC5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYXJrXCI+dXBkYXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZShtYXJrZXQuaWQpfSA+ZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHttYXJrZXRzLmxlbmd0aCA+IDAgPyA8TWFya2V0RGV0YWlsIGN1cnJlbnRNYXJrZXQ9e2N1cnJlbnRNYXJrZXR9Lz4gOiBcIk5vIE1hcmtldHNcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge21hcmtldHMubGVuZ3RoID4gMCAmJiA8TWFya2V0TWFwIG1hcmtldHM9e21hcmtldHN9Lz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=