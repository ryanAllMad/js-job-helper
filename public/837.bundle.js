"use strict";
(self["webpackChunkjob_requirement_search"] = self["webpackChunkjob_requirement_search"] || []).push([[837],{

/***/ 2837:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);


const fetchData = url => {
  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(res => res.data);
  promise.then(res => {
    return res;
  }, err => {
    return err;
  });
};
const userResource = fetchData('http://localhost:3000/api/user');
const UserExists = () => {
  const userDetails = userResource;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: JSON.stringify(userDetails)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserExists);

/***/ })

}]);