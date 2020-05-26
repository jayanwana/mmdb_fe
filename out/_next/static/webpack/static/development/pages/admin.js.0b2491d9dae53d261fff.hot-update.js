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
          offset: 3
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
        }, __jsx("strong", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 19
          }
        }, market.name), _this5.state.adminUser && __jsx("div", {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 44
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }
        }, "update"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          variant: "danger",
          onClick: function onClick() {
            return _this5.props["delete"](market.id);
          },
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }
        }, "delete")));
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, markets.length > 0 ? __jsx(_MarketDetail__WEBPACK_IMPORTED_MODULE_13__["default"], {
        currentMarket: currentMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 35
        }
      }) : "No Markets"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }, markets.length > 0 && __jsx(_googleMaps__WEBPACK_IMPORTED_MODULE_14__["default"], {
        markets: markets,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4uanMiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwic3RhdGUiLCJtYXJrZXRzIiwiY3VycmVudE1hcmtldCIsImN1cnJlbnRJbmRleCIsImFkbWluVXNlciIsImFkbWluIiwicmV0cmlldmVNYXJrZXRzIiwiYmluZCIsInNlbGVjdE1hcmtldCIsInNlYXJjaCIsImdldFBvc2l0aW9uIiwibG9jYXRpb25TZWFyY2giLCJNbURhdGFTZXJ2aWNlIiwiZ2V0QWxsTWFya2V0cyIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1hcmtldCIsImluZGV4IiwidGVybSIsIm1ldGhvZCIsInBvc3REYXRhIiwiZmluZE1hcmtldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm9taXNlIiwicmVzIiwicmVqIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImNvb3JkaW5hdGVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmaW5kTWFya2V0QnlMb2NhdGlvbiIsInNwYW4iLCJvZmZzZXQiLCJoYW5kbGVyIiwibWFwIiwibmFtZSIsImlkIiwibGVuZ3RoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFPQSxLQUFQO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFBRSxFQURFO0FBRVhDLG1CQUFhLEVBQUUsSUFGSjtBQUdYQyxrQkFBWSxFQUFFLENBQUMsQ0FISjtBQUlYQyxlQUFTLEVBQUUsTUFBS0wsS0FBTCxD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QUE7QUFBQTtBQUFBO0FBQUEsU0FDR0QsT0FBTyxDQUFDOEMsTUFBUixHQUFpQixDQUFqQixJQUFzQixNQUFDLG9EQUFEO0FBQVcsZUFBTyxFQUFFOUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUR6QixDQXhCRixDQVhGLENBREY7QUEwQ0Q7Ozs7RUEvRytCK0MsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluLmpzLjBiMjQ5MWQ5ZGFlNTNkMjYxZmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sLCBCdXR0b24sIEFsZXJ0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBNbURhdGFTZXJ2aWNlIGZyb20gXCIuLi91dGlscy9heGlvcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyXCI7XHJcbmltcG9ydCBNYXJrZXREZXRhaWwgZnJvbSBcIi4vTWFya2V0RGV0YWlsXCI7XHJcbmltcG9ydCBNYXJrZXRNYXAgZnJvbSBcIi4vZ29vZ2xlTWFwc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSBcIi4vbG9jYXRpb25TZWFyY2hcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtYXJrZXRzOiBbXSxcclxuICAgICAgY3VycmVudE1hcmtldDogbnVsbCxcclxuICAgICAgY3VycmVudEluZGV4OiAtMSxcclxuICAgICAgYWRtaW5Vc2VyOiB0aGlzLnByb3BzLmFkbWluXHJcbiAgICAgIH07XHJcbiAgICB0aGlzLnJldHJpZXZlTWFya2V0cyA9IHRoaXMucmV0cmlldmVNYXJrZXRzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlbGVjdE1hcmtldCA9IHRoaXMuc2VsZWN0TWFya2V0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5sb2NhdGlvblNlYXJjaCA9IHRoaXMubG9jYXRpb25TZWFyY2guYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5yZXRyaWV2ZU1hcmtldHMoKVxyXG4gIH1cclxuXHJcbiAgcmV0cmlldmVNYXJrZXRzKCkge1xyXG4gICAgTW1EYXRhU2VydmljZS5nZXRBbGxNYXJrZXRzKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1hcmtldHM6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKFxyXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICApXHJcbiAgfVxyXG5cclxuICBzZWxlY3RNYXJrZXQobWFya2V0LCBpbmRleCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRNYXJrZXQ6IG1hcmtldCxcclxuICAgICAgY3VycmVudEluZGV4OiBpbmRleFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlYXJjaCh0ZXJtLCBtZXRob2QpIHtcclxuICAgIGlmICh0ZXJtICYmIG1ldGhvZCl7XHJcbiAgICBjb25zdCBwb3N0RGF0YSA9IHtcclxuICAgICAgdGVybTogdGVybSxcclxuICAgICAgbWV0aG9kOiBtZXRob2RcclxuICAgIH1cclxuICAgIE1tRGF0YVNlcnZpY2UuZmluZE1hcmtldChKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7bWFya2V0czogcmVzcG9uc2UuZGF0YSwgY3VycmVudE1hcmtldDogbnVsbH0pXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgfX1cclxuXHJcbiAgYXN5bmMgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXMsIHJlaik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvY2F0aW9uU2VhcmNoKCl7XHJcbiAgICB0aGlzLmdldFBvc2l0aW9uKCkudGhlbihwb3NpdGlvbj0+IHtcclxuICAgICAgY29uc29sZS5sb2cocG9zaXRpb24uY29vcmRzKTtcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSB7XHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IFtwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVdXHJcbiAgICAgIH1cclxuICAgICAgTW1EYXRhU2VydmljZS5maW5kTWFya2V0QnlMb2NhdGlvbihKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21hcmtldHM6IHJlc3BvbnNlLmRhdGEsIGN1cnJlbnRNYXJrZXQ6IG51bGx9KVxyXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbWFya2V0cywgY3VycmVudEluZGV4LCBjdXJyZW50TWFya2V0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmFkbWluVXNlciAmJlxyXG4gICAgICAgICAgPENvbCBzbT17eyBzcGFuOiAxMCwgb2Zmc2V0OiAzIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlcn0gdmFyaWFudD1cImRhcmtcIj5BZGQgTWFya2V0PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICB9XHJcbiAgICAgICAgeyF0aGlzLnN0YXRlLmFkbWluVXNlciAmJiA8aDQ+U2VhcmNoIFRoZSBNYXJrZXQgRGF0YWJhc2U8L2g0Pn1cclxuICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICBoYW5kbGVyPXt0aGlzLnNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHshdGhpcy5zdGF0ZS5hZG1pblVzZXIgJiYgPExvY2F0aW9uU2VhcmNoIGhhbmRsZXI9e3RoaXMubG9jYXRpb25TZWFyY2h9Lz59XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIHttYXJrZXRzICYmXHJcbiAgICAgICAgICAgICAgbWFya2V0cy5tYXAoKG1hcmtldCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAoaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IFwiYWN0aXZlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VsZWN0TWFya2V0KG1hcmtldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnttYXJrZXQubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWRtaW5Vc2VyICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj51cGRhdGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZShtYXJrZXQuaWQpfSA+ZGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHttYXJrZXRzLmxlbmd0aCA+IDAgPyA8TWFya2V0RGV0YWlsIGN1cnJlbnRNYXJrZXQ9e2N1cnJlbnRNYXJrZXR9Lz4gOiBcIk5vIE1hcmtldHNcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge21hcmtldHMubGVuZ3RoID4gMCAmJiA8TWFya2V0TWFwIG1hcmtldHM9e21hcmtldHN9Lz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=