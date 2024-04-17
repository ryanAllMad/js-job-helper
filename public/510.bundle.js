"use strict";
(self["webpackChunkjob_requirement_search"] = self["webpackChunkjob_requirement_search"] || []).push([[510],{

/***/ 8510:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ getters_fetchData)
});

;// CONCATENATED MODULE: ./views/components/getters/wrapPromise.js
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
/* harmony default export */ const getters_wrapPromise = (wrapPromise);
;// CONCATENATED MODULE: ./views/components/getters/fetchData.js

const fetchData = url => {
  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(res => res.data);
  return getters_wrapPromise(promise);
};
/* harmony default export */ const getters_fetchData = (fetchData);

/***/ })

}]);