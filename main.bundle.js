/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-mobile-light.jpg */ "./images/bg-mobile-light.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --very-dark-blue: hsl(235, 21%, 11%);\n  --very-dark-desaturated-blue: hsl(235, 24%, 19%);\n  --light-grayish-blue: hsl(234, 39%, 85%);\n  --light-grayish-blue-hover: hsl(236, 33%, 92%);\n  --dark-grayish-blue: hsl(234, 11%, 52%);\n  --very-dark-grayish-blue: hsl(233, 14%, 35%);\n  --very-dark-grayish-blue: hsl(237, 14%, 26%);\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 1.8rem;\n  margin: 0;\n  background-color: var(--light-grayish-blue-hover);\n}\n\nh1 {\n  font-size: 3rem;\n  letter-spacing: 0.5rem;\n  color: #ffffff;\n  font-weight: 700;\n}\n\nmain {\n  max-width: 700px;\n  min-height: 100vh;\n  margin: 0 auto;\n  /* background-color: var(--light-grayish-blue-hover); */\n  position: relative;\n  top: -180px;\n}\n\nmain section,\nmain > div {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\ninput,\n.todo__status,\n.todo__list {\n  border-radius: 0.7rem;\n}\n\n.bg__banner {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 20rem;\n}\n\nsection {\n  /* background-image: url('../images/bg-mobile-light.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; */\n  padding: 2rem 0;\n}\n\nsection input {\n  width: 100%;\n  padding: 1.5rem 4rem;\n  border-style: none;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader img {\n  cursor: pointer;\n}\n\n.todo__status {\n  padding: 1.5rem;\n  text-align: center;\n  margin-top: 2rem;\n  background-color: #ffffff;\n}\n\n.todo__info .todo__status {\n  padding: 0;\n  margin: 0;\n  background-color: none;\n  /* display: none; */\n}\n\n.todo__status a {\n  margin-right: 2rem;\n  text-decoration: none;\n  color: var(--dark-grayish-blue);\n  font-weight: 700;\n}\n\n.todo__list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  /* position: relative;\n  top: -27px; */\n  background-color: #ffffff;\n}\n\nli,\n.todo__info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 3rem 0.5rem;\n  border-bottom: 0.1rem solid;\n  font-size: 1.4rem;\n  color: var(--dark-grayish-blue);\n}\n\n.todo__info {\n  border: none;\n}\n\nli,\ninput {\n  color: var(--dark-grayish-blue);\n}\n\n.todo__info,\n.todo__info a,\n.info {\n  color: var(--dark-grayish-blue);\n  text-decoration: none;\n}\n\n.info {\n  color: var(--dark-grayish-blue);\n  text-align: center;\n  padding: 1.5rem 0;\n  margin-top: 3rem;\n}\n\nli > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nli span {\n  margin-right: 10px;\n}\n\n.circle {\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.circle:active {\n  border-color: var(--very-dark-grayish-blue);\n}\n\n.completed {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: top right;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: none;\n}\n\n.close-icon {\n  width: 14px;\n  cursor: pointer;\n}\n\n.todo__complete {\n  text-decoration: line-through;\n  color: var(--light-grayish-blue);\n}\n\na.active {\n  color: #4b7cdf;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.attribution {\n  font-size: 11px;\n  text-align: center;\n}\n.attribution a {\n  color: hsl(228, 45%, 44%);\n}\n\n.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,gDAAgD;EAChD,wCAAwC;EACxC,8CAA8C;EAC9C,uCAAuC;EACvC,4CAA4C;EAC5C,4CAA4C;AAC9C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uCAAuC;EACvC,iBAAiB;EACjB,SAAS;EACT,iDAAiD;AACnD;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,uDAAuD;EACvD,kBAAkB;EAClB,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;;EAGE,qBAAqB;AACvB;;AAEA;EACE,yDAAsD;EACtD,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,WAAW;EACX,aAAa;AACf;;AAEA;EACE;;;2BAGyB;EACzB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV;eACa;EACb,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,2BAA2B;EAC3B,2BAA2B;EAC3B,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,+BAA+B;AACjC;;AAEA;;;EAGE,+BAA+B;EAC/B,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,yDAAsD;EACtD,8BAA8B;EAC9B,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n:root {\n  --very-dark-blue: hsl(235, 21%, 11%);\n  --very-dark-desaturated-blue: hsl(235, 24%, 19%);\n  --light-grayish-blue: hsl(234, 39%, 85%);\n  --light-grayish-blue-hover: hsl(236, 33%, 92%);\n  --dark-grayish-blue: hsl(234, 11%, 52%);\n  --very-dark-grayish-blue: hsl(233, 14%, 35%);\n  --very-dark-grayish-blue: hsl(237, 14%, 26%);\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 1.8rem;\n  margin: 0;\n  background-color: var(--light-grayish-blue-hover);\n}\n\nh1 {\n  font-size: 3rem;\n  letter-spacing: 0.5rem;\n  color: #ffffff;\n  font-weight: 700;\n}\n\nmain {\n  max-width: 700px;\n  min-height: 100vh;\n  margin: 0 auto;\n  /* background-color: var(--light-grayish-blue-hover); */\n  position: relative;\n  top: -180px;\n}\n\nmain section,\nmain > div {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\ninput,\n.todo__status,\n.todo__list {\n  border-radius: 0.7rem;\n}\n\n.bg__banner {\n  background-image: url('../images/bg-mobile-light.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 20rem;\n}\n\nsection {\n  /* background-image: url('../images/bg-mobile-light.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; */\n  padding: 2rem 0;\n}\n\nsection input {\n  width: 100%;\n  padding: 1.5rem 4rem;\n  border-style: none;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader img {\n  cursor: pointer;\n}\n\n.todo__status {\n  padding: 1.5rem;\n  text-align: center;\n  margin-top: 2rem;\n  background-color: #ffffff;\n}\n\n.todo__info .todo__status {\n  padding: 0;\n  margin: 0;\n  background-color: none;\n  /* display: none; */\n}\n\n.todo__status a {\n  margin-right: 2rem;\n  text-decoration: none;\n  color: var(--dark-grayish-blue);\n  font-weight: 700;\n}\n\n.todo__list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  /* position: relative;\n  top: -27px; */\n  background-color: #ffffff;\n}\n\nli,\n.todo__info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 3rem 0.5rem;\n  border-bottom: 0.1rem solid;\n  font-size: 1.4rem;\n  color: var(--dark-grayish-blue);\n}\n\n.todo__info {\n  border: none;\n}\n\nli,\ninput {\n  color: var(--dark-grayish-blue);\n}\n\n.todo__info,\n.todo__info a,\n.info {\n  color: var(--dark-grayish-blue);\n  text-decoration: none;\n}\n\n.info {\n  color: var(--dark-grayish-blue);\n  text-align: center;\n  padding: 1.5rem 0;\n  margin-top: 3rem;\n}\n\nli > div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nli span {\n  margin-right: 10px;\n}\n\n.circle {\n  width: 2rem;\n  height: 2rem;\n  border: 1px solid;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.circle:active {\n  border-color: var(--very-dark-grayish-blue);\n}\n\n.completed {\n  background-image: url('../images/bg-mobile-light.jpg');\n  background-position: top right;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: none;\n}\n\n.close-icon {\n  width: 14px;\n  cursor: pointer;\n}\n\n.todo__complete {\n  text-decoration: line-through;\n  color: var(--light-grayish-blue);\n}\n\na.active {\n  color: #4b7cdf;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.attribution {\n  font-size: 11px;\n  text-align: center;\n}\n.attribution a {\n  color: hsl(228, 45%, 44%);\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./images/bg-mobile-light.jpg":
/*!************************************!*\
  !*** ./images/bg-mobile-light.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "645bd127083ef66fbfb9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var form = document.querySelector('form');
var clearCompletedBtn = document.querySelector('.js-clear-completed');
var allToDo = document.querySelector('.all__todo');
var activeToDo = document.querySelector('.active__todo');
var completedToDo = document.querySelector('.completed__todo');
var darkTheme = document.querySelector('#theme__dark');
var lightTheme = document.querySelector('#theme__light'); // Code to know and render how many items are left

var displayRemainingTODo = function displayRemainingTODo() {
  var li = _toConsumableArray(document.querySelectorAll('li'));

  var completedClass = document.querySelectorAll('.completed');
  var itemsLeft = document.querySelector('.items__left');
  var remainingToDo = li.length - completedClass.length;
  itemsLeft.textContent = remainingToDo > 1 ? "".concat(remainingToDo, " items") : "".concat(remainingToDo, " item");
}; // code when a todo is complete


var todoCompleteCheck = function todoCompleteCheck() {
  var allSpanArr = _toConsumableArray(document.querySelectorAll('li span'));

  allSpanArr.forEach(function (span) {
    var checkToDo = function checkToDo() {
      if (!span.classList.contains('completed')) {
        var img = document.createElement('img');
        var siblingPara = span.nextElementSibling;
        span.classList.add('completed');
        img.setAttribute('src', '../images/icon-check.svg');
        img.setAttribute('alt', '');
        span.appendChild(img);
        siblingPara.classList.add('todo__complete');
      } else {
        var _img = span.querySelector('img');

        var _siblingPara = span.nextElementSibling;
        span.classList.remove('completed');
        span.removeChild(_img);

        _siblingPara.classList.remove('todo__complete');
      }
    };

    if (!span.getAttribute('data-listener')) {
      span.addEventListener('click', checkToDo);
      span.addEventListener('click', displayRemainingTODo);
      span.setAttribute('data-listener', true);
    }
  });
  displayRemainingTODo();
}; // Remove hide class from list


var showList = function showList() {
  var allSpanArr = _toConsumableArray(document.querySelectorAll('li span'));

  allSpanArr.forEach(function (span) {
    span.parentElement.parentElement.classList.remove('hide');
  });
}; // Runs on form submit


form.addEventListener('submit', function (e) {
  e.preventDefault();
  var input = document.querySelector('input');
  var ul = document.querySelector('ul');
  var div = document.createElement('div');
  var li = document.createElement('li');
  var span = document.createElement('span');
  var para = document.createElement('p');
  var img = document.createElement('img');
  span.classList.add('circle');
  para.textContent = input.value;

  if (document.querySelector('#theme__dark').classList.contains('hide')) {
    span.addEventListener('mousedown', function () {
      span.style.borderColor = 'hsl(234, 39%, 85%)';
    });
    span.addEventListener('mouseup', function () {
      span.style.borderColor = '';
    });
  }

  div.appendChild(span);
  div.appendChild(para);
  img.setAttribute('src', '../images/icon-cross.svg');
  img.setAttribute('alt', '');
  img.classList.add('close-icon');
  img.addEventListener('click', function () {
    var toDoList = document.querySelector('.todo__list');
    toDoList.removeChild(img.parentElement);
    displayRemainingTODo();
  });
  li.appendChild(div);
  li.appendChild(img);
  ul.appendChild(li);
  input.value = '';
  allToDo.classList.add('active');
  activeToDo.classList.remove('active');
  completedToDo.classList.remove('active');
  todoCompleteCheck();
  displayRemainingTODo();
  showList();
});
clearCompletedBtn.addEventListener('click', function () {
  var completedToDos = _toConsumableArray(document.querySelectorAll('.completed'));

  completedToDos.forEach(function (todo) {
    var toDoList = document.querySelector('.todo__list');
    toDoList.removeChild(todo.parentElement.parentElement);
  });
});
activeToDo.addEventListener('click', function () {
  activeToDo.classList.add('active');
  allToDo.classList.remove('active');
  completedToDo.classList.remove('active');

  var allSpanArr = _toConsumableArray(document.querySelectorAll('li span'));

  allSpanArr.forEach(function (span) {
    if (span.classList.contains('completed')) {
      span.parentElement.parentElement.classList.add('hide');
    } else {
      span.parentElement.parentElement.classList.remove('hide');
    }
  });
});
completedToDo.addEventListener('click', function () {
  completedToDo.classList.add('active');
  allToDo.classList.remove('active');
  activeToDo.classList.remove('active');

  var allSpanArr = _toConsumableArray(document.querySelectorAll('li span'));

  allSpanArr.forEach(function (span) {
    if (span.classList.contains('completed')) {
      span.parentElement.parentElement.classList.remove('hide');
    } else {
      span.parentElement.parentElement.classList.add('hide');
    }
  });
});
allToDo.addEventListener('click', function () {
  allToDo.classList.add('active');
  activeToDo.classList.remove('active');
  completedToDo.classList.remove('active');
  showList();
}); // Dark theme

darkTheme.addEventListener('click', function () {
  document.querySelector('#theme__dark').classList.add('hide');
  document.querySelector('#theme__light').classList.remove('hide');
  var body = document.querySelector('body');
  var toDoList = document.querySelector('.todo__list');
  var toDoInfo = document.querySelector('.todo__info');
  var toDoInfoLink = document.querySelector('.todo__info a');
  var todoStatus = document.querySelector('.todo__status');
  var input = document.querySelector('input');

  var circleArr = _toConsumableArray(document.querySelectorAll('.circle'));

  console.log(circleArr);
  circleArr.forEach(function (circle) {
    circle.addEventListener('mousedown', function (e) {
      e.target.style.borderColor = 'hsl(234, 39%, 85%)';
    });
    circle.addEventListener('mouseup', function (e) {
      e.target.style.borderColor = '';
    });
  });
  body.style.backgroundColor = 'hsl(235, 21%, 11%)';
  toDoList.style.backgroundColor = 'hsl(235, 24%, 19%)';
  toDoInfo.style.backgroundColor = 'hsl(235, 24%, 19%)';
  todoStatus.style.backgroundColor = 'hsl(235, 24%, 19%)';
  toDoInfo.style.color = ' hsl(234, 11%, 52%)';
  toDoInfoLink.style.color = ' hsl(234, 11%, 52%)';
  input.style.backgroundColor = 'hsl(235, 24%, 19%)';
});
lightTheme.addEventListener('click', function () {
  document.querySelector('#theme__light').classList.add('hide');
  document.querySelector('#theme__dark').classList.remove('hide');
  var body = document.querySelector('body');
  var toDoList = document.querySelector('.todo__list');
  var toDoInfo = document.querySelector('.todo__info');
  var toDoInfoLink = document.querySelector('.todo__info a');
  var todoStatus = document.querySelector('.todo__status');
  var input = document.querySelector('input');
  body.style.backgroundColor = '';
  toDoList.style.backgroundColor = '';
  toDoInfo.style.backgroundColor = '';
  todoStatus.style.backgroundColor = '';
  toDoInfo.style.color = '';
  toDoInfoLink.style.color = '';
  input.style.backgroundColor = '';
});
window.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 800) {
    var todoStatus = document.querySelector('.todo__status');
    var sibling = document.querySelector('.js-place-after');
    sibling.after(todoStatus);
  }
});
window.addEventListener('resize', function () {
  // console.log(window.innerWidth)
  if (window.innerWidth > 800) {
    var todoStatus = document.querySelector('.todo__status');
    var sibling = document.querySelector('.js-place-after');
    sibling.after(todoStatus);
  } else {
    var _sibling = document.querySelector('.todo__info');

    var _todoStatus = document.querySelector('.todo__status');

    _sibling.parentElement.appendChild(_todoStatus);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxDQUF1QixhQUF2QixDQUFoQjs7SUFDQSxJQUFNa0QsV0FBVSxHQUFHbkQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQW5COztJQUNBNEQsUUFBTyxDQUFDMUIsYUFBUixDQUFzQk4sV0FBdEIsQ0FBa0NzQixXQUFsQztFQUNEO0FBQ0YsQ0FYRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAtbWFpbi8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC1tYWluLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWFwcC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC1tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC1tYWluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC1tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwLW1haW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAtbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAtbWFpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JnLW1vYmlsZS1saWdodC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tdmVyeS1kYXJrLWJsdWU6IGhzbCgyMzUsIDIxJSwgMTElKTtcXG4gIC0tdmVyeS1kYXJrLWRlc2F0dXJhdGVkLWJsdWU6IGhzbCgyMzUsIDI0JSwgMTklKTtcXG4gIC0tbGlnaHQtZ3JheWlzaC1ibHVlOiBoc2woMjM0LCAzOSUsIDg1JSk7XFxuICAtLWxpZ2h0LWdyYXlpc2gtYmx1ZS1ob3ZlcjogaHNsKDIzNiwgMzMlLCA5MiUpO1xcbiAgLS1kYXJrLWdyYXlpc2gtYmx1ZTogaHNsKDIzNCwgMTElLCA1MiUpO1xcbiAgLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlOiBoc2woMjMzLCAxNCUsIDM1JSk7XFxuICAtLXZlcnktZGFyay1ncmF5aXNoLWJsdWU6IGhzbCgyMzcsIDE0JSwgMjYlKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5aXNoLWJsdWUtaG92ZXIpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheWlzaC1ibHVlLWhvdmVyKTsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE4MHB4O1xcbn1cXG5cXG5tYWluIHNlY3Rpb24sXFxubWFpbiA+IGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5pbnB1dCxcXG4udG9kb19fc3RhdHVzLFxcbi50b2RvX19saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG59XFxuXFxuLmJnX19iYW5uZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JnLW1vYmlsZS1saWdodC5qcGcnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG5cXG5zZWN0aW9uIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvX19zdGF0dXMge1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi50b2RvX19pbmZvIC50b2RvX19zdGF0dXMge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4udG9kb19fc3RhdHVzIGEge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheWlzaC1ibHVlKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50b2RvX19saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0yN3B4OyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxubGksXFxuLnRvZG9fX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gM3JlbSAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxufVxcblxcbi50b2RvX19pbmZvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxubGksXFxuaW5wdXQge1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheWlzaC1ibHVlKTtcXG59XFxuXFxuLnRvZG9fX2luZm8sXFxuLnRvZG9fX2luZm8gYSxcXG4uaW5mbyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5aXNoLWJsdWUpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5aXNoLWJsdWUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMS41cmVtIDA7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5saSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGkgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNpcmNsZTphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb19fY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheWlzaC1ibHVlKTtcXG59XFxuXFxuYS5hY3RpdmUge1xcbiAgY29sb3I6ICM0YjdjZGY7XFxufVxcblxcbi5tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hdHRyaWJ1dGlvbiB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hdHRyaWJ1dGlvbiBhIHtcXG4gIGNvbG9yOiBoc2woMjI4LCA0NSUsIDQ0JSk7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0RBQWdEO0VBQ2hELHdDQUF3QztFQUN4Qyw4Q0FBOEM7RUFDOUMsdUNBQXVDO0VBQ3ZDLDRDQUE0QztFQUM1Qyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdURBQXVEO0VBQ3ZELGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseURBQXNEO0VBQ3RELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTs7OzJCQUd5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVjtlQUNhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSwrQkFBK0I7QUFDakM7O0FBRUE7OztFQUdFLCtCQUErQjtFQUMvQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx5REFBc0Q7RUFDdEQsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tdmVyeS1kYXJrLWJsdWU6IGhzbCgyMzUsIDIxJSwgMTElKTtcXG4gIC0tdmVyeS1kYXJrLWRlc2F0dXJhdGVkLWJsdWU6IGhzbCgyMzUsIDI0JSwgMTklKTtcXG4gIC0tbGlnaHQtZ3JheWlzaC1ibHVlOiBoc2woMjM0LCAzOSUsIDg1JSk7XFxuICAtLWxpZ2h0LWdyYXlpc2gtYmx1ZS1ob3ZlcjogaHNsKDIzNiwgMzMlLCA5MiUpO1xcbiAgLS1kYXJrLWdyYXlpc2gtYmx1ZTogaHNsKDIzNCwgMTElLCA1MiUpO1xcbiAgLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlOiBoc2woMjMzLCAxNCUsIDM1JSk7XFxuICAtLXZlcnktZGFyay1ncmF5aXNoLWJsdWU6IGhzbCgyMzcsIDE0JSwgMjYlKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5aXNoLWJsdWUtaG92ZXIpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheWlzaC1ibHVlLWhvdmVyKTsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE4MHB4O1xcbn1cXG5cXG5tYWluIHNlY3Rpb24sXFxubWFpbiA+IGRpdiB7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG5cXG5pbnB1dCxcXG4udG9kb19fc3RhdHVzLFxcbi50b2RvX19saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcXG59XFxuXFxuLmJnX19iYW5uZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmctbW9iaWxlLWxpZ2h0LmpwZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjByZW07XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmctbW9iaWxlLWxpZ2h0LmpwZycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxuICBwYWRkaW5nOiAycmVtIDA7XFxufVxcblxcbnNlY3Rpb24gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9fX3N0YXR1cyB7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnRvZG9fX2luZm8gLnRvZG9fX3N0YXR1cyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi50b2RvX19zdGF0dXMgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5aXNoLWJsdWUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRvZG9fX2xpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTI3cHg7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5saSxcXG4udG9kb19faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtIDAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheWlzaC1ibHVlKTtcXG59XFxuXFxuLnRvZG9fX2luZm8ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5saSxcXG5pbnB1dCB7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5aXNoLWJsdWUpO1xcbn1cXG5cXG4udG9kb19faW5mbyxcXG4udG9kb19faW5mbyBhLFxcbi5pbmZvIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5pbmZvIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW0gMDtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbmxpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saSBzcGFuIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2lyY2xlOmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXZlcnktZGFyay1ncmF5aXNoLWJsdWUpO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JnLW1vYmlsZS1saWdodC5qcGcnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uY2xvc2UtaWNvbiB7XFxuICB3aWR0aDogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9fX2NvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXlpc2gtYmx1ZSk7XFxufVxcblxcbmEuYWN0aXZlIHtcXG4gIGNvbG9yOiAjNGI3Y2RmO1xcbn1cXG5cXG4ubXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uYXR0cmlidXRpb24ge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYXR0cmlidXRpb24gYSB7XFxuICBjb2xvcjogaHNsKDIyOCwgNDUlLCA0NCUpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcbmNvbnN0IGNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNsZWFyLWNvbXBsZXRlZCcpXG5jb25zdCBhbGxUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbF9fdG9kbycpXG5jb25zdCBhY3RpdmVUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZV9fdG9kbycpXG5jb25zdCBjb21wbGV0ZWRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZF9fdG9kbycpXG5jb25zdCBkYXJrVGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWVfX2RhcmsnKVxuY29uc3QgbGlnaHRUaGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZV9fbGlnaHQnKVxuXG4vLyBDb2RlIHRvIGtub3cgYW5kIHJlbmRlciBob3cgbWFueSBpdGVtcyBhcmUgbGVmdFxuY29uc3QgZGlzcGxheVJlbWFpbmluZ1RPRG8gPSAoKSA9PiB7XG4gIGNvbnN0IGxpID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyldXG4gIGNvbnN0IGNvbXBsZXRlZENsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlZCcpXG4gIGNvbnN0IGl0ZW1zTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtc19fbGVmdCcpXG4gIGNvbnN0IHJlbWFpbmluZ1RvRG8gPSBsaS5sZW5ndGggLSBjb21wbGV0ZWRDbGFzcy5sZW5ndGhcbiAgaXRlbXNMZWZ0LnRleHRDb250ZW50ID1cbiAgICByZW1haW5pbmdUb0RvID4gMSA/IGAke3JlbWFpbmluZ1RvRG99IGl0ZW1zYCA6IGAke3JlbWFpbmluZ1RvRG99IGl0ZW1gXG59XG5cbi8vIGNvZGUgd2hlbiBhIHRvZG8gaXMgY29tcGxldGVcbmNvbnN0IHRvZG9Db21wbGV0ZUNoZWNrID0gKCkgPT4ge1xuICBjb25zdCBhbGxTcGFuQXJyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpIHNwYW4nKV1cblxuICBhbGxTcGFuQXJyLmZvckVhY2goKHNwYW4pID0+IHtcbiAgICBjb25zdCBjaGVja1RvRG8gPSAoKSA9PiB7XG4gICAgICBpZiAoIXNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZWQnKSkge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBjb25zdCBzaWJsaW5nUGFyYSA9IHNwYW4ubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJylcblxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vaW1hZ2VzL2ljb24tY2hlY2suc3ZnJylcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJycpXG5cbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgIHNpYmxpbmdQYXJhLmNsYXNzTGlzdC5hZGQoJ3RvZG9fX2NvbXBsZXRlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGltZyA9IHNwYW4ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgY29uc3Qgc2libGluZ1BhcmEgPSBzcGFuLm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJylcbiAgICAgICAgc3Bhbi5yZW1vdmVDaGlsZChpbWcpXG5cbiAgICAgICAgc2libGluZ1BhcmEuY2xhc3NMaXN0LnJlbW92ZSgndG9kb19fY29tcGxldGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3Bhbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdGVuZXInKSkge1xuICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrVG9EbylcbiAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UmVtYWluaW5nVE9EbylcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3RlbmVyJywgdHJ1ZSlcbiAgICB9XG4gIH0pXG4gIGRpc3BsYXlSZW1haW5pbmdUT0RvKClcbn1cblxuLy8gUmVtb3ZlIGhpZGUgY2xhc3MgZnJvbSBsaXN0XG5jb25zdCBzaG93TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgYWxsU3BhbkFyciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaSBzcGFuJyldXG4gIGFsbFNwYW5BcnIuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgIHNwYW4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICB9KVxufVxuXG4vLyBSdW5zIG9uIGZvcm0gc3VibWl0XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJylcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcbiAgcGFyYS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZV9fZGFyaycpLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBzcGFuLnN0eWxlLmJvcmRlckNvbG9yID0gJ2hzbCgyMzQsIDM5JSwgODUlKSdcbiAgICB9KVxuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgIHNwYW4uc3R5bGUuYm9yZGVyQ29sb3IgPSAnJ1xuICAgIH0pXG4gIH1cblxuICBkaXYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgZGl2LmFwcGVuZENoaWxkKHBhcmEpXG5cbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL2ltYWdlcy9pY29uLWNyb3NzLnN2ZycpXG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICcnKVxuICBpbWcuY2xhc3NMaXN0LmFkZCgnY2xvc2UtaWNvbicpXG5cbiAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2xpc3QnKVxuICAgIHRvRG9MaXN0LnJlbW92ZUNoaWxkKGltZy5wYXJlbnRFbGVtZW50KVxuICAgIGRpc3BsYXlSZW1haW5pbmdUT0RvKClcbiAgfSlcblxuICBsaS5hcHBlbmRDaGlsZChkaXYpXG4gIGxpLmFwcGVuZENoaWxkKGltZylcblxuICB1bC5hcHBlbmRDaGlsZChsaSlcblxuICBpbnB1dC52YWx1ZSA9ICcnXG5cbiAgYWxsVG9Eby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICBhY3RpdmVUb0RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIGNvbXBsZXRlZFRvRG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuICB0b2RvQ29tcGxldGVDaGVjaygpXG4gIGRpc3BsYXlSZW1haW5pbmdUT0RvKClcbiAgc2hvd0xpc3QoKVxufSlcblxuY2xlYXJDb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGNvbXBsZXRlZFRvRG9zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZWQnKV1cbiAgY29tcGxldGVkVG9Eb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2xpc3QnKVxuICAgIHRvRG9MaXN0LnJlbW92ZUNoaWxkKHRvZG8ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KVxuICB9KVxufSlcblxuYWN0aXZlVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYWN0aXZlVG9Eby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICBhbGxUb0RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gIGNvbXBsZXRlZFRvRG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuICBjb25zdCBhbGxTcGFuQXJyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpIHNwYW4nKV1cbiAgYWxsU3BhbkFyci5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgaWYgKHNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZWQnKSkge1xuICAgICAgc3Bhbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH1cbiAgfSlcbn0pXG5cbmNvbXBsZXRlZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbXBsZXRlZFRvRG8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgYWxsVG9Eby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICBhY3RpdmVUb0RvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cbiAgY29uc3QgYWxsU3BhbkFyciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaSBzcGFuJyldXG4gIGFsbFNwYW5BcnIuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgIGlmIChzcGFuLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVkJykpIHtcbiAgICAgIHNwYW4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICB9XG4gIH0pXG59KVxuXG5hbGxUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhbGxUb0RvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIGFjdGl2ZVRvRG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgY29tcGxldGVkVG9Eby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXG4gIHNob3dMaXN0KClcbn0pXG5cbi8vIERhcmsgdGhlbWVcbmRhcmtUaGVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoZW1lX19kYXJrJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZV9fbGlnaHQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGNvbnN0IHRvRG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2xpc3QnKVxuICBjb25zdCB0b0RvSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19pbmZvJylcbiAgY29uc3QgdG9Eb0luZm9MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2luZm8gYScpXG4gIGNvbnN0IHRvZG9TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb19fc3RhdHVzJylcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gIGNvbnN0IGNpcmNsZUFyciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2lyY2xlJyldXG4gIGNvbnNvbGUubG9nKGNpcmNsZUFycilcblxuICBjaXJjbGVBcnIuZm9yRWFjaCgoY2lyY2xlKSA9PiB7XG4gICAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICdoc2woMjM0LCAzOSUsIDg1JSknXG4gICAgfSlcbiAgICBjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICcnXG4gICAgfSlcbiAgfSlcblxuICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdoc2woMjM1LCAyMSUsIDExJSknXG4gIHRvRG9MaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdoc2woMjM1LCAyNCUsIDE5JSknXG4gIHRvRG9JbmZvLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdoc2woMjM1LCAyNCUsIDE5JSknXG4gIHRvZG9TdGF0dXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2hzbCgyMzUsIDI0JSwgMTklKSdcbiAgdG9Eb0luZm8uc3R5bGUuY29sb3IgPSAnIGhzbCgyMzQsIDExJSwgNTIlKSdcbiAgdG9Eb0luZm9MaW5rLnN0eWxlLmNvbG9yID0gJyBoc2woMjM0LCAxMSUsIDUyJSknXG4gIGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdoc2woMjM1LCAyNCUsIDE5JSknXG59KVxuXG5saWdodFRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhlbWVfX2xpZ2h0JykuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aGVtZV9fZGFyaycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgY29uc3QgdG9Eb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb19fbGlzdCcpXG4gIGNvbnN0IHRvRG9JbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2luZm8nKVxuICBjb25zdCB0b0RvSW5mb0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb19faW5mbyBhJylcbiAgY29uc3QgdG9kb1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19zdGF0dXMnKVxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcblxuICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gIHRvRG9MaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gIHRvRG9JbmZvLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnXG4gIHRvZG9TdGF0dXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJydcbiAgdG9Eb0luZm8uc3R5bGUuY29sb3IgPSAnJ1xuICB0b0RvSW5mb0xpbmsuc3R5bGUuY29sb3IgPSAnJ1xuICBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJ1xufSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCkge1xuICAgIGNvbnN0IHRvZG9TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb19fc3RhdHVzJylcbiAgICBjb25zdCBzaWJsaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBsYWNlLWFmdGVyJylcbiAgICBzaWJsaW5nLmFmdGVyKHRvZG9TdGF0dXMpXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxuICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4MDApIHtcbiAgICBjb25zdCB0b2RvU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX3N0YXR1cycpXG4gICAgY29uc3Qgc2libGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wbGFjZS1hZnRlcicpXG4gICAgc2libGluZy5hZnRlcih0b2RvU3RhdHVzKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNpYmxpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb19faW5mbycpXG4gICAgY29uc3QgdG9kb1N0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX19zdGF0dXMnKVxuICAgIHNpYmxpbmcucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvU3RhdHVzKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckNvbXBsZXRlZEJ0biIsImFsbFRvRG8iLCJhY3RpdmVUb0RvIiwiY29tcGxldGVkVG9EbyIsImRhcmtUaGVtZSIsImxpZ2h0VGhlbWUiLCJkaXNwbGF5UmVtYWluaW5nVE9EbyIsImxpIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbXBsZXRlZENsYXNzIiwiaXRlbXNMZWZ0IiwicmVtYWluaW5nVG9EbyIsImxlbmd0aCIsInRleHRDb250ZW50IiwidG9kb0NvbXBsZXRlQ2hlY2siLCJhbGxTcGFuQXJyIiwiZm9yRWFjaCIsInNwYW4iLCJjaGVja1RvRG8iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzaWJsaW5nUGFyYSIsIm5leHRFbGVtZW50U2libGluZyIsImFkZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJnZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd0xpc3QiLCJwYXJlbnRFbGVtZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ1bCIsImRpdiIsInBhcmEiLCJ2YWx1ZSIsInN0eWxlIiwiYm9yZGVyQ29sb3IiLCJ0b0RvTGlzdCIsImNvbXBsZXRlZFRvRG9zIiwidG9kbyIsImJvZHkiLCJ0b0RvSW5mbyIsInRvRG9JbmZvTGluayIsInRvZG9TdGF0dXMiLCJjaXJjbGVBcnIiLCJjb25zb2xlIiwibG9nIiwiY2lyY2xlIiwidGFyZ2V0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2libGluZyIsImFmdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==