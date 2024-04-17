"use strict";
(self["webpackChunkjob_requirement_search"] = self["webpackChunkjob_requirement_search"] || []).push([[503],{

/***/ 3503:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_UserExists)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./views/components/wrapPromise.js
const wrapPromise = promise => {
  let status = 'pending';
  let response;
  const suspender = promise.then(res => {
    status = 'success';
    response = res;
  }, err => {
    status = 'error';
    response = err;
  });
  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };
  return {
    read
  };
};
/* harmony default export */ const components_wrapPromise = (wrapPromise);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./views/components/UserExists.js



const fetchData = url => {
  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(res => res.data);
  return components_wrapPromise(promise);
};
const userResource = fetchData('http://localhost:3000/api/user');
const UserExists = () => {
  const userDetails = userResource.read();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: JSON.stringify(userDetails)
  });
};
/* harmony default export */ const components_UserExists = (UserExists);

/***/ })

}]);