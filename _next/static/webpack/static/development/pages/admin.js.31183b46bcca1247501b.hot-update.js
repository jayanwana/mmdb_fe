webpackHotUpdate("static\\development\\pages\\admin.js",{

/***/ "./components/marketForm.js":
/*!**********************************!*\
  !*** ./components/marketForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarketForm; });
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
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-geocode */ "./node_modules/react-geocode/lib/index.js");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _utils_auth_token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/auth_token */ "./utils/auth_token.js");









var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\components\\marketForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







react_geocode__WEBPACK_IMPORTED_MODULE_12___default.a.setApiKey("AIzaSyC36kr5pALWRMYe2_PWaPtzfZc4CKNqPhU");
react_geocode__WEBPACK_IMPORTED_MODULE_12___default.a.setRegion("ng");

var MarketForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MarketForm, _Component);

  var _super = _createSuper(MarketForm);

  function MarketForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MarketForm);

    _this = _super.call(this, props);
    _this.state = {
      name: _this.props.market ? _this.props.market.name : "",
      description: _this.props.market ? _this.props.market.description : "",
      foodCategory: _this.props.market ? _this.props.market.foodCategory : "",
      location: _this.props.market ? _this.props.market.location : null,
      address: _this.props.market ? _this.props.market.address : "",
      img_1: null,
      img_2: null,
      img_3: null
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleFileInput = _this.handleFileInput.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MarketForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value));
    }
  }, {
    key: "handleFileInput",
    value: function handleFileInput(event) {
      console.log(event.target.files[0].name);
      var target = event.target;
      var name = target.name;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, event.target.files[0]));
    }
  }, {
    key: "submitForm",
    value: function () {
      var _submitForm = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var _this2 = this;

        var formData, key, token, headers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return react_geocode__WEBPACK_IMPORTED_MODULE_12___default.a.fromAddress(this.state.address).then(function (response) {
                  var _response$results$0$g = response.results[0].geometry.location,
                      lat = _response$results$0$g.lat,
                      lng = _response$results$0$g.lng;
                  console.log(lat, lng);

                  _this2.setState({
                    location: JSON.stringify({
                      coordinates: [lat, lng]
                    })
                  });
                }, function (error) {
                  console.error(error);
                });

              case 3:
                formData = new FormData();

                for (key in this.state) {
                  if (this.state[key]) {
                    console.log(this.state[key].name);

                    if (this.state[key].name) {
                      formData.append(key, this.state[key], this.state[key].name);
                    } else {
                      formData.append(key, this.state[key]);
                    }
                  }
                }

                token = _utils_auth_token__WEBPACK_IMPORTED_MODULE_14__["default"].getToken();
                headers = {
                  headers: {
                    "Content-type": "multipart/form-data",
                    "Authorization": "Bearer ".concat(token)
                  }
                };

                if (!this.props.update) {
                  _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__["default"].createMarket(formData).then(function (response) {
                    console.log(response.data);
                    alert("Market Successfully Added");
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("".concat("", "/admin"));
                  })["catch"](function (error) {
                    if (error.response.status === 401) {
                      _utils_auth_token__WEBPACK_IMPORTED_MODULE_14__["default"].deleteToken();
                      alert("Please Login Again");
                      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("".concat("", "/login"));
                    }

                    console.log(error);
                  });
                } else {
                  _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__["default"].updateMarket(this.props.market.id, formData, headers).then(function (response) {
                    console.log(response.data);
                    alert("Market Successfully Updated");
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("".concat("", "/admin"));
                  })["catch"](function (error) {
                    if (error.response.status === 401) {
                      _utils_auth_token__WEBPACK_IMPORTED_MODULE_14__["default"].deleteToken();
                      alert("Please Login Again");
                      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("".concat("", "/login"));
                    }

                    console.log(error);
                  });
                }

              case 8:
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
      var _this3 = this;

      return __jsx("div", {
        className: "form-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }
      }, __jsx("button", {
        className: "close-form",
        onClick: function onClick() {
          return _this3.props.close(true);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        onSubmit: this.submitForm,
        className: "marketForm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalName",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }
      }, "Market Name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        required: true,
        name: "name",
        type: "text",
        placeholder: "Enter Market Name",
        value: this.state.name,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalDescription",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }
      }, "Description"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        required: true,
        name: "description",
        type: "text",
        placeholder: "Brief Market Description",
        value: this.state.description,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalFoodCategory",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, "Food Category"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        required: true,
        name: "foodCategory",
        type: "text",
        placeholder: "Food Category",
        value: this.state.foodCategory,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalAdress",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, "Address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        required: true,
        name: "address",
        type: "text",
        placeholder: "Address",
        value: this.state.address,
        onChange: this.handleInputChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }
      }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalimg_1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }
      }, "Market Image 1"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        name: "img_1",
        type: "file",
        onChange: this.handleFileInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }, this.state.img_1 ? __jsx("img", {
        style: {
          width: "60px",
          height: "60px"
        },
        src: URL.createObjectURL(this.state.img_1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 34
        }
      }) : "")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalimg_2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }
      }, "Market Image 2"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        name: "img_2",
        type: "file",
        onChange: this.handleFileInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }
      }, this.state.img_2 ? __jsx("img", {
        style: {
          width: "60px",
          height: "60px"
        },
        src: URL.createObjectURL(this.state.img_2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 34
        }
      }) : "")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        controlId: "formHorizontalimg_3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Label, {
        column: true,
        sm: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 13
        }
      }, "Market Image 3"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Control, {
        name: "img_3",
        type: "file",
        onChange: this.handleFileInput,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 15
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }
      }, this.state.img_3 ? __jsx("img", {
        style: {
          width: "60px",
          height: "60px"
        },
        src: URL.createObjectURL(this.state.img_3),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 34
        }
      }) : "")), this.state.invalid ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Alert"], {
        variant: "warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 33
        }
      }, this.state.error) : '', __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        as: react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        sm: {
          span: 10,
          offset: 3
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        type: "submit",
        variant: "dark",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      }, "Submit")))));
    }
  }]);

  return MarketForm;
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

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/auth_token */ "./utils/auth_token.js");
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _components_marketForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/marketForm */ "./components/marketForm.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/favicon.ico */ "./public/favicon.ico");
/* harmony import */ var _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_favicon_ico__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Main */ "./components/Main.js");







var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\mmdb_fe\\pages\\admin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Admin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Admin, _Component);

  var _super = _createSuper(Admin);

  function Admin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Admin);

    _this = _super.call(this, props);
    _this.state = {
      loaded: false,
      adminUser: false,
      showForm: false,
      market: null,
      update: false
    };
    _this.showForm = _this.showForm.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.deleteMarket = _this.deleteMarket.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.updateMarket = _this.updateMarket.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.props.pageTransitionReadyToEnter();

        _this2.setState({
          loaded: true
        });
      }, 2000);
      var token = _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"].getToken();
      var df = _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"].decodeToken(token); // console.log(df)

      if (token) {
        // console.log(token);
        var Auth = new _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"](token);

        if (Auth.isValid()) {
          console.log('valid');
          this.setState({
            adminUser: true
          });
          console.log(Auth.decodedToken.exp);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeoutId) clearTimeout(this.timeoutId);
    }
  }, {
    key: "showForm",
    value: function showForm(clear) {
      clear ? this.setState({
        showForm: !this.state.showForm,
        market: null,
        update: false
      }) : this.setState({
        showForm: !this.state.showForm
      });
    }
  }, {
    key: "updateMarket",
    value: function updateMarket(market) {
      this.setState({
        market: market,
        update: true,
        showForm: true
      }); //
    }
  }, {
    key: "deleteMarket",
    value: function deleteMarket(id) {
      var token = _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"].getToken();
      var headers = {
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer ".concat(token)
        }
      };
      _utils_axios_service__WEBPACK_IMPORTED_MODULE_13__["default"].deleteMarket(id, headers).then(function (response) {
        console.log(response.data);
        alert("Market Successfully Deleted");
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("".concat("", "/admin"));
      })["catch"](function (error) {
        if (error.response.status === 401) {
          _utils_auth_token__WEBPACK_IMPORTED_MODULE_12__["default"].deleteToken();
          alert("Please Login Again");
          next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("".concat("", "/login"));
        }

        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var rand = function rand() {
        return Math.floor(Math.random() * 100);
      };

      if (!this.state.adminUser) {
        return null;
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }, "Admin"), __jsx("link", {
        rel: "icon",
        href: _public_favicon_ico__WEBPACK_IMPORTED_MODULE_16___default.a,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charset: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
        integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
        crossOrigin: "anonymous",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Montserrat|Orbitron|Roboto&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }), this.state.showForm && __jsx(_components_marketForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: rand(),
        close: this.showForm,
        market: this.state.market,
        update: this.state.update,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, "Admin"), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_17__["default"], {
        admin: true,
        handler: this.showForm,
        update: this.updateMarket,
        "delete": this.deleteMarket,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Admin, "pageTransitionDelayEnter", true);

Admin.propTypes = {
  pageTransitionReadyToEnter: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func
};
Admin.defaultProps = {
  pageTransitionReadyToEnter: function pageTransitionReadyToEnter() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Admin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtldEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOlsiR2VvY29kZSIsInNldEFwaUtleSIsInNldFJlZ2lvbiIsIk1hcmtldEZvcm0iLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsIm1hcmtldCIsImRlc2NyaXB0aW9uIiwiZm9vZENhdGVnb3J5IiwibG9jYXRpb24iLCJhZGRyZXNzIiwiaW1nXzEiLCJpbWdfMiIsImltZ18zIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRmlsZUlucHV0Iiwic3VibWl0Rm9ybSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlcyIsInByZXZlbnREZWZhdWx0IiwiZnJvbUFkZHJlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwiZ2VvbWV0cnkiLCJsYXQiLCJsbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29vcmRpbmF0ZXMiLCJlcnJvciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJrZXkiLCJhcHBlbmQiLCJ0b2tlbiIsIkF1dGhUb2tlbiIsImdldFRva2VuIiwiaGVhZGVycyIsInVwZGF0ZSIsIk1tRGF0YVNlcnZpY2UiLCJjcmVhdGVNYXJrZXQiLCJkYXRhIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwic3RhdHVzIiwiZGVsZXRlVG9rZW4iLCJ1cGRhdGVNYXJrZXQiLCJpZCIsImNsb3NlIiwiUm93Iiwid2lkdGgiLCJoZWlnaHQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbnZhbGlkIiwic3BhbiIsIm9mZnNldCIsIkNvbXBvbmVudCIsIkFkbWluIiwibG9hZGVkIiwiYWRtaW5Vc2VyIiwic2hvd0Zvcm0iLCJkZWxldGVNYXJrZXQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicGFnZVRyYW5zaXRpb25SZWFkeVRvRW50ZXIiLCJkZiIsImRlY29kZVRva2VuIiwiQXV0aCIsImlzVmFsaWQiLCJkZWNvZGVkVG9rZW4iLCJleHAiLCJjbGVhclRpbWVvdXQiLCJjbGVhciIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpY28iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxxREFBTyxDQUFDQyxTQUFSO0FBQ0FELHFEQUFPLENBQUNFLFNBQVIsQ0FBa0IsSUFBbEI7O0lBRXFCQyxVOzs7OztBQUNuQixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBT0EsS0FBUDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUsTUFBS0YsS0FBTCxDQUFXRyxNQUFYLEdBQW1CLE1BQUtILEtBQUwsQ0FBV0csTUFBWCxDQUFrQkQsSUFBckMsR0FBNEMsRUFEekM7QUFFVEUsaUJBQVcsRUFBRSxNQUFLSixLQUFMLENBQVdHLE1BQVgsR0FBbUIsTUFBS0gsS0FBTCxDQUFXRyxNQUFYLENBQWtCQyxXQUFyQyxHQUFtRCxFQUZ2RDtBQUdUQyxrQkFBWSxFQUFFLE1BQUtMLEtBQUwsQ0FBV0csTUFBWCxHQUFtQixNQUFLSCxLQUFMLENBQVdHLE1BQVgsQ0FBa0JFLFlBQXJDLEdBQW9ELEVBSHpEO0FBSVRDLGNBQVEsRUFBRSxNQUFLTixLQUFMLENBQVdHLE1BQVgsR0FBbUIsTUFBS0gsS0FBTCxDQUFXRyxNQUFYLENBQWtCRyxRQUFyQyxHQUFnRCxJQUpqRDtBQUtUQyxhQUFPLEVBQUUsTUFBS1AsS0FBTCxDQUFXRyxNQUFYLEdBQW1CLE1BQUtILEtBQUwsQ0FBV0csTUFBWCxDQUFrQkksT0FBckMsR0FBK0MsRUFML0M7QUFNVEMsV0FBSyxFQUFFLElBTkU7QUFPVEMsV0FBSyxFQUFFLElBUEU7QUFRVEMsV0FB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O0FBQXlCLGFBQUssRUFBRSxLQUFLYixRQUFyQztBQUErQyxjQUFNLEVBQUUsS0FBS2pFLEtBQUwsQ0FBV0UsTUFBbEU7QUFBMEUsY0FBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV3lDLE1BQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFISixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsRUFLRSxNQUFDLHlEQUFEO0FBQU0sYUFBSyxFQUFFLElBQWI7QUFBbUIsZUFBTyxFQUFFLEtBQUt3QixRQUFqQztBQUEyQyxjQUFNLEVBQUUsS0FBS2YsWUFBeEQ7QUFBc0Usa0JBQVEsS0FBS2dCLFlBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixDQVRGLENBREY7QUFtQkQ7Ozs7RUFuR2lCTCwrQzs7MEZBQWRDLEssOEJBQzhCLEk7O0FBcUdwQ0EsS0FBSyxDQUFDcUIsU0FBTixHQUFrQjtBQUNoQmQsNEJBQTBCLEVBQUVlLGtEQUFTLENBQUNDO0FBRHRCLENBQWxCO0FBSUF2QixLQUFLLENBQUN3QixZQUFOLEdBQXFCO0FBQ25CakIsNEJBQTBCLEVBQUUsc0NBQU0sQ0FBRTtBQURqQixDQUFyQjtBQUtlUCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW4uanMuMzExODNiNDZiY2NhMTI0NzUwMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wsIEJ1dHRvbiwgQWxlcnR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEdlb2NvZGUgZnJvbSBcInJlYWN0LWdlb2NvZGVcIjtcclxuaW1wb3J0IE1tRGF0YVNlcnZpY2UgZnJvbSBcIi4uL3V0aWxzL2F4aW9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IEF1dGhUb2tlbiBmcm9tIFwiLi4vdXRpbHMvYXV0aF90b2tlblwiXHJcblxyXG5HZW9jb2RlLnNldEFwaUtleShwcm9jZXNzLmVudi5HTUFQX0FQSSlcclxuR2VvY29kZS5zZXRSZWdpb24oXCJuZ1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtldEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm1hcmtldD8gdGhpcy5wcm9wcy5tYXJrZXQubmFtZSA6IFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMubWFya2V0PyB0aGlzLnByb3BzLm1hcmtldC5kZXNjcmlwdGlvbiA6IFwiXCIsXHJcbiAgICAgICAgZm9vZENhdGVnb3J5OiB0aGlzLnByb3BzLm1hcmtldD8gdGhpcy5wcm9wcy5tYXJrZXQuZm9vZENhdGVnb3J5IDogXCJcIixcclxuICAgICAgICBsb2NhdGlvbjogdGhpcy5wcm9wcy5tYXJrZXQ/IHRoaXMucHJvcHMubWFya2V0LmxvY2F0aW9uIDogbnVsbCxcclxuICAgICAgICBhZGRyZXNzOiB0aGlzLnByb3BzLm1hcmtldD8gdGhpcy5wcm9wcy5tYXJrZXQuYWRkcmVzcyA6IFwiXCIsXHJcbiAgICAgICAgaW1nXzE6IG51bGwsXHJcbiAgICAgICAgaW1nXzI6IG51bGwsXHJcbiAgICAgICAgaW1nXzM6IG51bGxcclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUZpbGVJbnB1dCA9IHRoaXMuaGFuZGxlRmlsZUlucHV0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRmlsZUlucHV0KGV2ZW50KXtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5maWxlc1swXS5uYW1lKTtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogZXZlbnQudGFyZ2V0LmZpbGVzWzBdfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzdWJtaXRGb3JtKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBhd2FpdCBHZW9jb2RlLmZyb21BZGRyZXNzKHRoaXMuc3RhdGUuYWRkcmVzcykudGhlbihcclxuICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XHJcbiAgICAgICAgY29uc29sZS5sb2cobGF0LCBsbmcpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9jYXRpb246IEpTT04uc3RyaW5naWZ5KHtjb29yZGluYXRlczogW2xhdCwgbG5nXX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnN0YXRlKXtcclxuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZVtrZXldLm5hbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0ubmFtZSkge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSxcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldLm5hbWVcclxuICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxyXG4gICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSxcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG4gICAgY29uc3QgdG9rZW4gPSBBdXRoVG9rZW4uZ2V0VG9rZW4oKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7ICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH19XHJcblxyXG4gICAgaWYoIXRoaXMucHJvcHMudXBkYXRlKXtcclxuICAgICAgTW1EYXRhU2VydmljZS5jcmVhdGVNYXJrZXQoZm9ybURhdGEpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICBhbGVydChcIk1hcmtldCBTdWNjZXNzZnVsbHkgQWRkZWRcIilcclxuICAgICAgUm91dGVyLnB1c2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2FkbWluYCk7XHJcbiAgICB9KS5jYXRjaChlcnJvciA9PntcclxuICAgICAgaWYoZXJyb3IucmVzcG9uc2Uuc3RhdHVzPT09NDAxKXtcclxuICAgICAgICBBdXRoVG9rZW4uZGVsZXRlVG9rZW4oKVxyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIExvZ2luIEFnYWluXCIpXHJcbiAgICAgICAgUm91dGVyLnB1c2goYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2xvZ2luYCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpfVxyXG4gICAgICApfSBlbHNlIHtcclxuICAgICAgICBNbURhdGFTZXJ2aWNlLnVwZGF0ZU1hcmtldCh0aGlzLnByb3BzLm1hcmtldC5pZCwgZm9ybURhdGEsIGhlYWRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgYWxlcnQoXCJNYXJrZXQgU3VjY2Vzc2Z1bGx5IFVwZGF0ZWRcIilcclxuICAgICAgICBSb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vYWRtaW5gKTtcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cz09PTQwMSl7XHJcbiAgICAgICAgICBBdXRoVG9rZW4uZGVsZXRlVG9rZW4oKVxyXG4gICAgICAgICAgYWxlcnQoXCJQbGVhc2UgTG9naW4gQWdhaW5cIilcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9sb2dpbmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtZm9ybVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2xvc2UodHJ1ZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0gY2xhc3NOYW1lPVwibWFya2V0Rm9ybVwiPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY29udHJvbElkPVwiZm9ybUhvcml6b250YWxOYW1lXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT17M30+TWFya2V0IE5hbWU8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1hcmtldCBOYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5EZXNjcmlwdGlvbjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPENvbCBzbT17OH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJyaWVmIE1hcmtldCBEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY29udHJvbElkPVwiZm9ybUhvcml6b250YWxGb29kQ2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5Gb29kIENhdGVnb3J5PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Q29sIHNtPXs4fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImZvb2RDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZvb2QgQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9vZENhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjb250cm9sSWQ9XCJmb3JtSG9yaXpvbnRhbEFkcmVzc1wiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9PkFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezh9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY29udHJvbElkPVwiZm9ybUhvcml6b250YWxpbWdfMVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209ezN9Pk1hcmtldCBJbWFnZSAxPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1nXzFcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZUlucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pbWdfMT8gPGltZyBzdHlsZT17e3dpZHRoOiBcIjYwcHhcIiwgaGVpZ2h0OlwiNjBweFwifX0gc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuc3RhdGUuaW1nXzEpfS8+OiBcIlwifVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsaW1nXzJcIj5cclxuICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPXszfT5NYXJrZXQgSW1hZ2UgMjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImltZ18yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVJbnB1dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW1nXzI/IDxpbWcgc3R5bGU9e3t3aWR0aDogXCI2MHB4XCIsIGhlaWdodDpcIjYwcHhcIn19IHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnN0YXRlLmltZ18yKX0vPjogXCJcIn1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjb250cm9sSWQ9XCJmb3JtSG9yaXpvbnRhbGltZ18zXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT17M30+TWFya2V0IEltYWdlIDM8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWdfM1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlSW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmltZ18zPyA8aW1nIHN0eWxlPXt7d2lkdGg6IFwiNjBweFwiLCBoZWlnaHQ6XCI2MHB4XCJ9fSBzcmM9e1VSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5zdGF0ZS5pbWdfMyl9Lz46IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmludmFsaWQgPyA8QWxlcnQgdmFyaWFudD0nd2FybmluZyc+e3RoaXMuc3RhdGUuZXJyb3J9PC9BbGVydD4gOiAnJ31cclxuICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9PlxyXG4gICAgICAgICAgICA8Q29sIHNtPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDMgfX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImRhcmtcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sLCBCdXR0b24sIEFsZXJ0fSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBBdXRoVG9rZW4gZnJvbSBcIi4uL3V0aWxzL2F1dGhfdG9rZW5cIjtcclxuaW1wb3J0IE1tRGF0YVNlcnZpY2UgZnJvbSBcIi4uL3V0aWxzL2F4aW9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IE1hcmtldEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9tYXJrZXRGb3JtJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnO1xyXG5pbXBvcnQgaWNvIGZyb20gJy4uL3B1YmxpYy9mYXZpY29uLmljbyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbic7XHJcblxyXG5cclxuY2xhc3MgQWRtaW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwYWdlVHJhbnNpdGlvbkRlbGF5RW50ZXIgPSB0cnVlXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICBhZG1pblVzZXI6IGZhbHNlLFxyXG4gICAgICBzaG93Rm9ybTogZmFsc2UsXHJcbiAgICAgIG1hcmtldDogbnVsbCxcclxuICAgICAgdXBkYXRlOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaG93Rm9ybSA9IHRoaXMuc2hvd0Zvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVsZXRlTWFya2V0ID0gdGhpcy5kZWxldGVNYXJrZXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudXBkYXRlTWFya2V0ID0gdGhpcy51cGRhdGVNYXJrZXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyKClcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgICBsZXQgdG9rZW4gPSBBdXRoVG9rZW4uZ2V0VG9rZW4oKTtcclxuICAgIGxldCBkZiA9IEF1dGhUb2tlbi5kZWNvZGVUb2tlbih0b2tlbilcclxuICAgIC8vIGNvbnNvbGUubG9nKGRmKVxyXG4gICAgaWYgKHRva2VuKXtcclxuICAgICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICBsZXQgQXV0aCA9IG5ldyBBdXRoVG9rZW4odG9rZW4pO1xyXG4gICAgICBpZiAoQXV0aC5pc1ZhbGlkKCkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhZG1pblVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhBdXRoLmRlY29kZWRUb2tlbi5leHApO1xyXG4gICAgfVxyXG4gIH19XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMudGltZW91dElkKSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpXHJcbiAgfVxyXG5cclxuICBzaG93Rm9ybShjbGVhcil7XHJcbiAgICBjbGVhciA/XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93Rm9ybTogIXRoaXMuc3RhdGUuc2hvd0Zvcm0sIG1hcmtldDogbnVsbCwgdXBkYXRlOiBmYWxzZX0pIDpcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dGb3JtOiAhdGhpcy5zdGF0ZS5zaG93Rm9ybX0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVNYXJrZXQobWFya2V0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWFya2V0OiBtYXJrZXQsXHJcbiAgICAgIHVwZGF0ZTogdHJ1ZSxcclxuICAgICAgc2hvd0Zvcm06IHRydWUsXHJcbiAgICB9KVxyXG4gICAgLy9cclxuICB9XHJcblxyXG4gIGRlbGV0ZU1hcmtldChpZCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBBdXRoVG9rZW4uZ2V0VG9rZW4oKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7ICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIH19XHJcbiAgICBNbURhdGFTZXJ2aWNlLmRlbGV0ZU1hcmtldChpZCwgaGVhZGVycykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgIGFsZXJ0KFwiTWFya2V0IFN1Y2Nlc3NmdWxseSBEZWxldGVkXCIpXHJcbiAgICAgIFJvdXRlci5wdXNoKGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMfS9hZG1pbmApO1xyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXM9PT00MDEpe1xyXG4gICAgICAgIEF1dGhUb2tlbi5kZWxldGVUb2tlbigpXHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgTG9naW4gQWdhaW5cIilcclxuICAgICAgICBSb3V0ZXIucHVzaChgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH0vbG9naW5gKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHJhbmQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKVxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmFkbWluVXNlcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5BZG1pbjwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17aWNvfSAvPlxyXG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmlnK1Nob3VsZGVycytEaXNwbGF5fE1vbnRzZXJyYXR8T3JiaXRyb258Um9ib3RvJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93Rm9ybSAmJlxyXG4gICAgICAgICAgICA8TWFya2V0Rm9ybSBrZXk9e3JhbmQoKX0gY2xvc2U9e3RoaXMuc2hvd0Zvcm19IG1hcmtldD17dGhpcy5zdGF0ZS5tYXJrZXR9IHVwZGF0ZT17dGhpcy5zdGF0ZS51cGRhdGV9Lz59XHJcbiAgICAgICAgICA8aDE+QWRtaW48L2gxPlxyXG4gICAgICAgICAgPE1haW4gYWRtaW49e3RydWV9IGhhbmRsZXI9e3RoaXMuc2hvd0Zvcm19IHVwZGF0ZT17dGhpcy51cGRhdGVNYXJrZXR9IGRlbGV0ZT17dGhpcy5kZWxldGVNYXJrZXR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gIH1cclxufVxyXG5cclxuQWRtaW4ucHJvcFR5cGVzID0ge1xyXG4gIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxufVxyXG5cclxuQWRtaW4uZGVmYXVsdFByb3BzID0ge1xyXG4gIHBhZ2VUcmFuc2l0aW9uUmVhZHlUb0VudGVyOiAoKSA9PiB7fSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=