webpackHotUpdate_N_E("pages/cadastrar",{

/***/ "./pages/cadastrar.jsx":
/*!*****************************!*\
  !*** ./pages/cadastrar.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "C:\\Users\\guilh\\Documents\\imersao_cinco\\site\\pages\\cadastrar.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Cadastrar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    description: '',
    status: ''
  }),
      meta = _useState[0],
      setMeta = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setMeta(_objectSpread(_objectSpread({}, meta), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var sendMeta = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(meta);
              setResponse({
                formSave: true
              });
              _context.prev = 3;
              _context.next = 6;
              return fetch('http://localhost:8080/metas', {
                method: 'POST',
                body: JSON.stringify(meta),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  formSave: false,
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro: Meta nao cadastrada com sucesso, tente mais tarde!'
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));

    return function sendMeta(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {
        fluid: true,
        className: "form",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("style", {
          children: ".form{\n                            background-color: #171941;\n                            color: #bf38ac;\n                            padding-top: 30px;\n                            padding-bottom: 150px;\n                            margin-bottom: 0rem !important;\n                        }"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
            className: "display-4 text-center",
            children: "Cadastrar minha meta"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: response.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 54
          }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: response.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 56
          }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
            onSubmit: sendMeta,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
                "for": "exampleEmail",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
                type: "email",
                name: "email",
                id: "exampleEmail",
                placeholder: "with a placeholder"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
              children: "Nome "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Nome da meta",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 125
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 131
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
              children: "Descricao "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
              type: "text",
              name: "description",
              id: "description",
              placeholder: "Descricao da meta",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 144
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 150
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
              children: "Status "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
              type: "text",
              name: "status",
              id: "status",
              placeholder: "Status da meta",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 131
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 137
            }, this), response.formSave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
              type: "submit",
              disabled: true,
              children: "Enviando..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 50
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
              type: "submit",
              children: "Cadastrar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 104
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

_s(Cadastrar, "41Q4vQ6JvBR+6Bb9al1pE3jQyCk=");

_c = Cadastrar;
/* harmony default export */ __webpack_exports__["default"] = (Cadastrar);

var _c;

$RefreshReg$(_c, "Cadastrar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FkYXN0cmFyLmpzeCJdLCJuYW1lcyI6WyJDYWRhc3RyYXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm1ldGEiLCJzZXRNZXRhIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZE1ldGEiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJyZXNwb25zZUVudiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxlQUFXLEVBQUUsRUFGZ0I7QUFHN0JDLFVBQU0sRUFBRTtBQUhxQixHQUFELENBRGY7QUFBQSxNQUNWQyxJQURVO0FBQUEsTUFDSkMsT0FESTs7QUFBQSxtQkFPZUwsc0RBQVEsQ0FBQztBQUNyQ00sWUFBUSxFQUFFLEtBRDJCO0FBRXJDQyxRQUFJLEVBQUUsRUFGK0I7QUFHckNDLFdBQU8sRUFBRTtBQUg0QixHQUFELENBUHZCO0FBQUEsTUFPVkMsUUFQVTtBQUFBLE1BT0FDLFdBUEE7O0FBYWpCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFdBQUlQLE9BQU8saUNBQU1ELElBQU4scUdBQWFRLENBQUMsQ0FBQ0MsTUFBRixDQUFTWixJQUF0QixFQUE2QlcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXRDLEdBQVg7QUFBQSxHQUF2Qjs7QUFFQSxNQUFNQyxRQUFRO0FB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QURKO0FBNENIOztHQWpHUVAsUzs7S0FBQUEsUztBQW1HTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FkYXN0cmFyLjA0MWU0YmE3MWNhMzE4MTBmYmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSnVtYm90cm9uLCBDb250YWluZXIsIEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIEZvcm1UZXh0IH0gZnJvbSAncmVhY3RzdHJhcCdcclxuXHJcbmZ1bmN0aW9uIENhZGFzdHJhcigpIHtcclxuICAgIGNvbnN0IFttZXRhLCBzZXRNZXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSBlID0+IHNldE1ldGEoeyAuLi5tZXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcblxyXG4gICAgY29uc3Qgc2VuZE1ldGEgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXRhKVxyXG5cclxuICAgICAgICBzZXRSZXNwb25zZSh7IGZvcm1TYXZlOiB0cnVlIH0pXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tZXRhcycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWV0YSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZUVudi5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlRW52Lm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJybzogTWV0YSBuYW8gY2FkYXN0cmFkYSBjb20gc3VjZXNzbywgdGVudGUgbWFpcyB0YXJkZSEnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgLmZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxOTQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiZjM4YWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IHRleHQtY2VudGVyXCI+Q2FkYXN0cmFyIG1pbmhhIG1ldGE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnZXJyb3InID8gPHA+e3Jlc3BvbnNlLm1lc3NhZ2V9PC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNwb25zZS50eXBlID09PSAnc3VjY2VzcycgPyA8cD57cmVzcG9uc2UubWVzc2FnZX08L3A+IDogXCJcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtzZW5kTWV0YX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlRW1haWxcIj5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZXhhbXBsZUVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ3aXRoIGEgcGxhY2Vob2xkZXJcIiAvPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBtZXRhXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+IDxiciAvPjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmljYW8gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaWNhbyBkYSBtZXRhXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+IDxiciAvPjxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXMgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0dXNcIiBpZD1cInN0YXR1c1wiIHBsYWNlaG9sZGVyPVwiU3RhdHVzIGRhIG1ldGFcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz4gPGJyIC8+PGJyIC8+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UuZm9ybVNhdmUgPyA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD5FbnZpYW5kby4uLjwvYnV0dG9uPiA6IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNhZGFzdHJhcjwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWRhc3RyYXIiXSwic291cmNlUm9vdCI6IiJ9