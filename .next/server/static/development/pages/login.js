module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/auth */ "./libs/auth.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = ({
  title,
  children,
  auth
}) => {
  const {
    user = {}
  } = auth || {};
  return __jsx("div", {
    className: "jsx-1931180036" + " " + "root"
  }, __jsx("nav", {
    className: "jsx-1931180036" + " " + "navbar"
  }, __jsx("span", {
    className: "jsx-1931180036"
  }, "welcome, ", __jsx("strong", {
    className: "jsx-1931180036"
  }, " ", user.email || 'Guest')), __jsx("div", {
    className: "jsx-1931180036"
  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-1931180036"
  }, "Home")), user.email ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile"
  }, __jsx("a", {
    className: "jsx-1931180036"
  }, "Profile")), __jsx("button", {
    onClick: _libs_auth__WEBPACK_IMPORTED_MODULE_3__["logoutUser"],
    className: "jsx-1931180036"
  }, "Logout")) : __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "jsx-1931180036"
  }, "Login")))), __jsx("h1", {
    className: "jsx-1931180036"
  }, title), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1931180036"
  }, ".root.jsx-1931180036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.navbar.jsx-1931180036{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}a.jsx-1931180036{margin-right:0.5em;}button.jsx-1931180036{-webkit-text-decoration:underline;text-decoration:underline;padding:0;font:inherit;cursor:pointer;border-style:none;color:rgb(0,0,238);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm9nbG9sXFxEZXNrdG9wXFxuZXh0LWNvb2tpZS1hdXRoXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUdzQixBQU1ILEFBS1MsQUFHTSxXQVBiLFFBS2hCLHlDQUdhLFVBQ0csSUFmTyxTQWdCTCxFQVRjLGFBVVgsa0JBQ0MsbUJBQ3RCLGdDQWxCMkIseUNBTzNCLDBEQU4wQiw4RUFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxSb2dsb2xcXERlc2t0b3BcXG5leHQtY29va2llLWF1dGhcXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XHJcbmltcG9ydCB7bG9nb3V0VXNlcn0gZnJvbSAnLi4vbGlicy9hdXRoJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7dGl0bGUsY2hpbGRyZW4sYXV0aH0pID0+XHJcbntcclxuICAgIGNvbnN0IHt1c2VyICA9IHt9fSA9IGF1dGggfHwge31cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHdlbGNvbWUsIDxzdHJvbmc+IHsgdXNlci5lbWFpbHx8ICdHdWVzdCd9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+IFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+UHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0VXNlcn0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAucm9vdHtcclxuICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgIH1cclxuICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICBmb250OmluaGVyaXQ7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOm5vbmU7XHJcbiAgICAgICAgY29sb3I6cmdiKDAsMCwyMzgpO1xyXG4gICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Roglol\\\\Desktop\\\\next-cookie-auth\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/auth */ "./libs/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LoginForm = () => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Rey.Padberg@karina.biz');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('ambrose.net');
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log(email, password);
    Object(_libs_auth__WEBPACK_IMPORTED_MODULE_1__["loginUser"])(email, password).then(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/profile");
    }).catch(err => {
      setLoading(false);
      setError(err.response.data);
    });
  };

  return __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("div", null, __jsx("input", {
    type: "email",
    name: "email",
    value: email,
    placeholder: "email",
    onChange: e => setEmail(e.target.value)
  })), __jsx("div", null, __jsx("input", {
    type: "password",
    name: "password",
    value: password,
    placeholder: "password",
    onChange: e => setPassword(e.target.value)
  })), __jsx("button", {
    type: "submit",
    disabled: isLoading
  }, "Login"), error && __jsx("div", null, error));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./libs/auth.js":
/*!**********************!*\
  !*** ./libs/auth.js ***!
  \**********************/
/*! exports provided: getServerSideToken, getClientSideToken, getUserScript, authInitialProps, logoutUser, loginUser, getUserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideToken", function() { return getServerSideToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSideToken", function() { return getClientSideToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserScript", function() { return getUserScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialProps", function() { return authInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfile", function() { return getUserProfile; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
const getServerSideToken = req => {
  const {
    signedCookies = {}
  } = req || {};

  if (!signedCookies) {
    return {};
  } else if (!signedCookies.token) {
    return {};
  }

  return {
    user: signedCookies.token
  };
};
const getClientSideToken = () => {
  if (false) {}

  return {
    user: {}
  };
};
const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';
const getUserScript = userData => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(userData)}`;
};
const authInitialProps = isProtectedRoute => ({
  req,
  res
}) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken(req);
  const currentPath = req ? req.url : window.location.pathname;
  const user = auth.user;
  const isAnonymous = !user || user.type !== "authenticated";

  if (isProtectedRoute && isAnonymous && currentPath !== "/login") {
    return redirectUser(res, "/login");
  }

  return {
    auth
  };
};

const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {};
  }

  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace(path);
  return {};
};

const logoutUser = async () => {
  if (false) {}

  await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
};
const loginUser = async (email, password) => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', {
    email,
    password
  });

  if (false) {}
};
const getUserProfile = async () => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/profile');
  return data;
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _libs_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/auth */ "./libs/auth.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Login() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
Login.getInitialProps = Object(_libs_auth__WEBPACK_IMPORTED_MODULE_2__["authInitialProps"])();

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Roglol\Desktop\next-cookie-auth\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map