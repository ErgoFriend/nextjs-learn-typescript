webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/ergop/github/hello-next/pages/index.tsx";






var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    key: props.id,
    className: "jsx-3950785544",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/post/[id]",
    as: "/post/".concat(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "jsx-3950785544",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: props.image,
    className: "jsx-3950785544",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3950785544",
    __self: this
  }, "li.jsx-3950785544{list-style:none;margin:5px 0;}a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}a.jsx-3950785544:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmdvcC9naXRodWIvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JnQixBQUd5QixBQUtLLEFBTVQsWUFDZCxJQVhlLGFBQ2YscUJBSWEsV0FDUyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2VyZ29wL2dpdGh1Yi9oZWxsby1uZXh0L3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcbmltcG9ydCB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJBZ2VudD86IHN0cmluZztcbiAgc2hvd3M6IEFycmF5PGFueT47XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHByb3BzOiBhbnkpID0+IChcbiAgPGxpIGtleT17cHJvcHMuaWR9PlxuICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9baWRdXCIgYXM9e2AvcG9zdC8ke3Byb3BzLmlkfWB9PlxuICAgICAgPGE+e3Byb3BzLm5hbWV9PC9hPlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSAvPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmNvbnN0IEluZGV4OiBOZXh0UGFnZTxQcm9wcz4gPSAoe3Nob3dzfSkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxoMT5NeSBCbG9nPC9oMT5cblxuICAgIDx1bD5cbiAgICAgIHtzaG93cy5tYXAoKHNob3c6IGFueSkgPT4gKFxuICAgICAgICA8UG9zdExpbmtcbiAgICAgICAgICBuYW1lPXtzaG93Lm5hbWV9XG4gICAgICAgICAgaWQ9e3Nob3cuaWR9XG4gICAgICAgICAga2V5PXtzaG93LmlkfVxuICAgICAgICAgIGltYWdlPXtzaG93LmltYWdlLm1pZGl1bX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEsXG4gICAgICBhIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0PGFueT4oXG4gICAgXCJodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWVwYWNlXCJcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiByZXMuZGF0YS5tYXAoKGVudHJ5OiBhbnkpID0+IGVudHJ5LnNob3cpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/ergop/github/hello-next/pages/index.tsx */"));
};

var Index = function Index(_ref) {
  var shows = _ref.shows;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-4181757484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-4181757484",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, shows.map(function (show) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PostLink, {
      name: show.name,
      id: show.id,
      key: show.id,
      image: show.image.midium,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4181757484",
    __self: this
  }, "h1.jsx-4181757484,a.jsx-4181757484{font-family:\"Arial\";}ul.jsx-4181757484{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmdvcC9naXRodWIvaGVsbG8tbmV4dC9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURnQixBQUk2QixBQUlWLFVBQ1osVUFKQSIsImZpbGUiOiIvVXNlcnMvZXJnb3AvZ2l0aHViL2hlbGxvLW5leHQvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dFwiO1xuaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlckFnZW50Pzogc3RyaW5nO1xuICBzaG93czogQXJyYXk8YW55Pjtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAocHJvcHM6IGFueSkgPT4gKFxuICA8bGkga2V5PXtwcm9wcy5pZH0+XG4gICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF1cIiBhcz17YC9wb3N0LyR7cHJvcHMuaWR9YH0+XG4gICAgICA8YT57cHJvcHMubmFtZX08L2E+XG4gICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IC8+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuY29uc3QgSW5kZXg6IE5leHRQYWdlPFByb3BzPiA9ICh7c2hvd3N9KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPk15IEJsb2c8L2gxPlxuXG4gICAgPHVsPlxuICAgICAge3Nob3dzLm1hcCgoc2hvdzogYW55KSA9PiAoXG4gICAgICAgIDxQb3N0TGlua1xuICAgICAgICAgIG5hbWU9e3Nob3cubmFtZX1cbiAgICAgICAgICBpZD17c2hvdy5pZH1cbiAgICAgICAgICBrZXk9e3Nob3cuaWR9XG4gICAgICAgICAgaW1hZ2U9e3Nob3cuaW1hZ2UubWlkaXVtfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoMSxcbiAgICAgIGEge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQ8YW55PihcbiAgICBcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9ZXBhY2VcIlxuICApO1xuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IHJlcy5kYXRhLm1hcCgoZW50cnk6IGFueSkgPT4gZW50cnkuc2hvdylcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/ergop/github/hello-next/pages/index.tsx */"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://api.tvmaze.com/search/shows?q=epace");

        case 2:
          res = _context.sent;
          return _context.abrupt("return", {
            shows: res.data.map(function (entry) {
              return entry.show;
            })
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f4bb4db22caebb70b6a6.hot-update.js.map