(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/get.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/get.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/set.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/set.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/ObserverComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/ObserverComponent.js ***!
  \*************************************************************************************/
/*! exports provided: Observer */
/*! exports used: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverComponent; });
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useObserver */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useObserver.js");



function ObserverComponent(_a) {
  var children = _a.children,
      render = _a.render;
  var component = children || render;

  if (typeof component !== "function") {
    return null;
  }

  return Object(_useObserver__WEBPACK_IMPORTED_MODULE_1__[/* useObserver */ "a"])(component);
}

ObserverComponent.propTypes = {
  children: ObserverPropsCheck,
  render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";


function ObserverPropsCheck(props, key, componentName, location, propFullName) {
  var extraKey = key === "children" ? "render" : "children";
  var hasProp = typeof props[key] === "function";
  var hasExtraProp = typeof props[extraKey] === "function";

  if (hasProp && hasExtraProp) {
    return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
  }

  if (hasProp || hasExtraProp) {
    return null;
  }

  return new Error("Invalid prop `" + propFullName + "` of type `" + Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/assertEnvironment.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/assertEnvironment.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
  throw new Error("mobx-react-lite requires React with Hooks support");
}

if (!mobx__WEBPACK_IMPORTED_MODULE_0__[/* spy */ "n"]) {
  throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/index.js ***!
  \*************************************************************************/
/*! exports provided: isUsingStaticRendering, useStaticRendering, observer, useObserver, Observer, useForceUpdate, useAsObservableSource, useLocalStore, useQueuedForceUpdate, useQueuedForceUpdateBlock, isObserverBatched, observerBatching */
/*! exports used: Observer, isUsingStaticRendering, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertEnvironment */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observerBatching */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/observerBatching.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/staticRendering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _observer__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useObserver */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useObserver.js");
/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/ObserverComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useLocalStore.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useQueuedForceUpdate.js");



Object(_observerBatching__WEBPACK_IMPORTED_MODULE_2__[/* observerBatching */ "a"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__[/* unstable_batchedUpdates */ "a"]);










/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/observer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/observer.js ***!
  \****************************************************************************/
/*! exports provided: observer */
/*! exports used: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useObserver.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



 // n.b. base case is not used for actual typings or exported in the typing files

function observer(baseComponent, options) {
  // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
  if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_1__[/* isUsingStaticRendering */ "a"])()) {
    return baseComponent;
  }

  var realOptions = __assign({
    forwardRef: false
  }, options);

  var baseComponentName = baseComponent.displayName || baseComponent.name;

  var wrappedComponent = function wrappedComponent(props, ref) {
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_2__[/* useObserver */ "a"])(function () {
      return baseComponent(props, ref);
    }, baseComponentName);
  };

  wrappedComponent.displayName = baseComponentName; // memo; we are not interested in deep updates
  // in props; we assume that if deep objects are changed,
  // this is in observables, which would have been tracked anyway

  var memoComponent;

  if (realOptions.forwardRef) {
    // we have to use forwardRef here because:
    // 1. it cannot go before memo, only after it
    // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
    //    since it wouldn't be a callable function anymore
    memoComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(wrappedComponent));
  } else {
    memoComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(wrappedComponent);
  }

  copyStaticProperties(baseComponent, memoComponent);
  memoComponent.displayName = baseComponentName;
  return memoComponent;
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js

var hoistBlackList = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true
};

function copyStaticProperties(base, target) {
  Object.keys(base).forEach(function (key) {
    if (!hoistBlackList[key]) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/observerBatching.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/observerBatching.js ***!
  \************************************************************************************/
/*! exports provided: defaultNoopBatch, observerBatching, isObserverBatched */
/*! exports used: observerBatching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultNoopBatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observerBatching; });
/* unused harmony export isObserverBatched */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils.js");


var observerBatchingConfiguredSymbol = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getSymbol */ "b"])("observerBatching");
function defaultNoopBatch(callback) {
  callback();
}
function observerBatching(reactionScheduler) {
  if (!reactionScheduler) {
    reactionScheduler = defaultNoopBatch;

    if (true) {
      console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
    }
  }

  Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* configure */ "f"])({
    reactionScheduler: reactionScheduler
  });
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function isObserverBatched() {
  return !!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol];
};

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/printDebugValue.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/printDebugValue.js ***!
  \***********************************************************************************/
/*! exports provided: printDebugValue */
/*! exports used: printDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return printDebugValue; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");

function printDebugValue(v) {
  return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* getDependencyTree */ "h"])(v);
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/reactionCleanupTracking.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/reactionCleanupTracking.js ***!
  \*******************************************************************************************/
/*! exports provided: createTrackingData, CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS, CLEANUP_TIMER_LOOP_MILLIS, scheduleCleanupOfReactionIfLeaked, recordReactionAsCommitted, forceCleanupTimerToRunNowForTests, resetCleanupScheduleForTests */
/*! exports used: createTrackingData, recordReactionAsCommitted, scheduleCleanupOfReactionIfLeaked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTrackingData; });
/* unused harmony export CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS */
/* unused harmony export CLEANUP_TIMER_LOOP_MILLIS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scheduleCleanupOfReactionIfLeaked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return recordReactionAsCommitted; });
/* unused harmony export forceCleanupTimerToRunNowForTests */
/* unused harmony export resetCleanupScheduleForTests */
function createTrackingData(reaction) {
  var trackingData = {
    cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
    reaction: reaction
  };
  return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */

var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */

var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */

var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */

var reactionCleanupHandle;

function ensureCleanupTimerRunning() {
  if (reactionCleanupHandle === undefined) {
    reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
  }
}

function scheduleCleanupOfReactionIfLeaked(ref) {
  uncommittedReactionRefs.add(ref);
  ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
  uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */

function cleanUncommittedReactions() {
  reactionCleanupHandle = undefined; // Loop through all the candidate leaked reactions; those older
  // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.

  var now = Date.now();
  uncommittedReactionRefs.forEach(function (ref) {
    var tracking = ref.current;

    if (tracking) {
      if (now >= tracking.cleanAt) {
        // It's time to tidy up this leaked reaction.
        tracking.reaction.dispose();
        ref.current = null;
        uncommittedReactionRefs.delete(ref);
      }
    }
  });

  if (uncommittedReactionRefs.size > 0) {
    // We've just finished a round of cleanups but there are still
    // some leak candidates outstanding.
    ensureCleanupTimerRunning();
  }
}
/* istanbul ignore next */

/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */


function forceCleanupTimerToRunNowForTests() {
  // This allows us to control the execution of the cleanup timer
  // to force it to run at awkward times in unit tests.
  if (reactionCleanupHandle) {
    clearTimeout(reactionCleanupHandle);
    cleanUncommittedReactions();
  }
}
/* istanbul ignore next */

function resetCleanupScheduleForTests() {
  if (reactionCleanupHandle) {
    clearTimeout(reactionCleanupHandle);
    reactionCleanupHandle = undefined;
  }

  uncommittedReactionRefs.clear();
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/staticRendering.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/staticRendering.js ***!
  \***********************************************************************************/
/*! exports provided: useStaticRendering, isUsingStaticRendering */
/*! exports used: isUsingStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useStaticRendering */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUsingStaticRendering; });
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
  globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
  return globalIsUsingStaticRendering;
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useAsObservableSource.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useAsObservableSource.js ***!
  \*****************************************************************************************/
/*! exports provided: useAsObservableSourceInternal, useAsObservableSource */
/*! exports used: useAsObservableSourceInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAsObservableSourceInternal; });
/* unused harmony export useAsObservableSource */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils.js");
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};




function useAsObservableSourceInternal(current, usedByLocalStore) {
  var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";

  if ( true && usedByLocalStore) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(current), 1),
        initialSource = _a[0];

    if (initialSource !== undefined && current === undefined || initialSource === undefined && current !== undefined) {
      throw new Error("make sure you never pass `undefined` to " + culprit);
    }
  }

  if (usedByLocalStore && current === undefined) {
    return undefined;
  }

  if ( true && !Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "c"])(current)) {
    throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
  }

  var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])(current, {}, {
      deep: false
    });
  }), 1),
      res = _b[0];

  if ( true && Object.keys(res).length !== Object.keys(current).length) {
    throw new Error("the shape of objects passed to " + culprit + " should be stable");
  }

  Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "m"])(function () {
    Object.assign(res, current);
  });
  return res;
}
function useAsObservableSource(current) {
  return useAsObservableSourceInternal(current, false);
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useLocalStore.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useLocalStore.js ***!
  \*********************************************************************************/
/*! exports provided: useLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLocalStore */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils.js");




function useLocalStore(initializer, current) {
  var source = Object(_useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__[/* useAsObservableSourceInternal */ "a"])(current, true);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])(initializer(source));

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isPlainObject */ "c"])(local)) {
      Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "m"])(function () {
        Object.keys(local).forEach(function (key) {
          var value = local[key];

          if (typeof value === "function") {
            // @ts-ignore No idea why ts2536 is popping out here
            local[key] = wrapInTransaction(value, local);
          }
        });
      });
    }

    return local;
  })[0];
} // tslint:disable-next-line: ban-types

function wrapInTransaction(fn, context) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* transaction */ "o"])(function () {
      return fn.apply(context, args);
    });
  };
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useObserver.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useObserver.js ***!
  \*******************************************************************************/
/*! exports provided: useObserver */
/*! exports used: useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useObserver; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printDebugValue */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/printDebugValue.js");
/* harmony import */ var _reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactionCleanupTracking */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useQueuedForceUpdate.js");







var EMPTY_OBJECT = {};

function observerComponentNameFor(baseComponentName) {
  return "observer" + baseComponentName;
}

function useObserver(fn, baseComponentName, options) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }

  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_4__[/* isUsingStaticRendering */ "a"])()) {
    return fn();
  }

  var wantedForceUpdateHook = options.useForceUpdate || _utils__WEBPACK_IMPORTED_MODULE_5__[/* useForceUpdate */ "d"];
  var forceUpdate = wantedForceUpdateHook();
  var queuedForceUpdate = Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdate */ "a"])(forceUpdate); // StrictMode/ConcurrentMode/Suspense may mean that our component is
  // rendered and abandoned multiple times, so we need to track leaked
  // Reactions.

  var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  if (!reactionTrackingRef.current) {
    // First render for this component (or first time since a previous
    // reaction from an abandoned render was disposed).
    var newReaction_1 = new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
      // Observable has changed, meaning we want to re-render
      // BUT if we're a component that hasn't yet got to the useEffect()
      // stage, we might be a component that _started_ to render, but
      // got dropped, and we don't want to make state changes then.
      // (It triggers warnings in StrictMode, for a start.)
      if (trackingData_1.mounted) {
        // We have reached useEffect(), so we're mounted, and can trigger an update
        queuedForceUpdate();
      } else {
        // We haven't yet reached useEffect(), so we'll need to trigger a re-render
        // when (and if) useEffect() arrives.  The easiest way to do that is just to
        // drop our current reaction and allow useEffect() to recreate it.
        newReaction_1.dispose();
        reactionTrackingRef.current = null;
      }
    });
    var trackingData_1 = Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* createTrackingData */ "a"])(newReaction_1);
    reactionTrackingRef.current = trackingData_1;
    Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* scheduleCleanupOfReactionIfLeaked */ "c"])(reactionTrackingRef);
  }

  var reaction = reactionTrackingRef.current.reaction;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, _printDebugValue__WEBPACK_IMPORTED_MODULE_2__[/* printDebugValue */ "a"]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // Called on first mount only
    Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* recordReactionAsCommitted */ "b"])(reactionTrackingRef);

    if (reactionTrackingRef.current) {
      // Great. We've already got our reaction from our render;
      // all we need to do is to record that it's now mounted,
      // to allow future observable changes to trigger re-renders
      reactionTrackingRef.current.mounted = true;
    } else {
      // The reaction we set up in our render has been disposed.
      // This is either due to bad timings of renderings, e.g. our
      // component was paused for a _very_ long time, and our
      // reaction got cleaned up, or we got a observable change
      // between render and useEffect
      // Re-create the reaction
      reactionTrackingRef.current = {
        reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
          // We've definitely already been mounted at this point
          queuedForceUpdate();
        }),
        cleanAt: Infinity
      };
      queuedForceUpdate();
    }

    return function () {
      reactionTrackingRef.current.reaction.dispose();
      reactionTrackingRef.current = null;
    };
  }, []); // delay all force-update calls after rendering of this component

  return Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdateBlock */ "b"])(function () {
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
      try {
        rendering = fn();
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception; // re-throw any exceptions caught during rendering
    }

    return rendering;
  });
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useQueuedForceUpdate.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/useQueuedForceUpdate.js ***!
  \****************************************************************************************/
/*! exports provided: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/*! exports used: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useQueuedForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useQueuedForceUpdateBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
  return function () {
    if (insideRender) {
      forceUpdateQueue.push(forceUpdate);
    } else {
      forceUpdate();
    }
  };
}
function useQueuedForceUpdateBlock(callback) {
  // start intercepting force-update calls
  insideRender = true;
  forceUpdateQueue = [];

  try {
    var result = callback(); // stop intercepting force-update

    insideRender = false; // store queue or nothing if it was empty to execute useLayoutEffect only when necessary

    var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined; // run force-update queue in useLayoutEffect

    react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(function () {
      if (queue_1) {
        queue_1.forEach(function (x) {
          return x();
        });
      }
    }, [queue_1]);
    return result;
  } finally {
    insideRender = false;
  }
}

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils.js ***!
  \*************************************************************************/
/*! exports provided: useUnmount, useForceUpdate, isPlainObject, getSymbol, getGlobal */
/*! exports used: getGlobal, getSymbol, isPlainObject, useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global) {/* unused harmony export useUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobal; });
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};


var EMPTY_ARRAY = [];
function useUnmount(fn) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return fn;
  }, EMPTY_ARRAY);
}
function useForceUpdate() {
  var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2),
      setTick = _a[1];

  var update = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setTick(function (tick) {
      return tick + 1;
    });
  }, []);
  return update;
}
function isPlainObject(value) {
  if (!value || Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) !== "object") {
    return false;
  }

  var proto = Object.getPrototypeOf(value);
  return !proto || proto === Object.prototype;
}
function getSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol.for(name);
  }

  return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \*********************************************************************************************/
/*! exports provided: unstable_batchedUpdates */
/*! exports used: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/_@tarojs_react@3.2.4@@tarojs/react/dist/react.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./node_modules/_mobx-react@6.3.1@mobx-react/dist/mobxreact.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_mobx-react@6.3.1@mobx-react/dist/mobxreact.esm.js ***!
  \*************************************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/*! exports used: Provider, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MobXProviderContext */
/* unused harmony export PropTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* unused harmony export disposeOnUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return observer; });
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/_mobx-react-lite@2.2.2@mobx-react-lite/es/index.js");





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};

function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}

function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(objA) !== "object" || objA === null || Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(objB) !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};

function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */


function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */


var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  } // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls


  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_1__[/* $mobx */ "a"] || "$mobx";
var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");

function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* isUsingStaticRendering */ "b"])() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) === null || _this$render$mobxAdmi === void 0 ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging


function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* isUsingStaticRendering */ "b"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_1__[/* Reaction */ "b"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_2__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateChanges */ "c"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* isUsingStaticRendering */ "b"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* createAtom */ "g"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsStart */ "e"] && mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsEnd */ "d"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsStart */ "e"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsStart */ "e"] && mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsEnd */ "d"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsEnd */ "d"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ? /*#__PURE__*/Symbol.for("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"] === "function" && /*#__PURE__*/ /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ? /*#__PURE__*/Symbol.for("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_2__["memo"] === "function" && /*#__PURE__*/ /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* Observer */ "a"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_2__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* observer */ "c"])(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});

function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}

Provider.displayName = "MobXProvider";
/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountProto");
var instStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;

  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || c3 === react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* untracked */ "p"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue);

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* untracked */ "p"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_1__[/* isObservableArray */ "i"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_1__[/* isObservableObject */ "k"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_1__[/* isObservableMap */ "j"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* untracked */ "p"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};
if (!react__WEBPACK_IMPORTED_MODULE_2__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_1__[/* observable */ "l"]) throw new Error("mobx-react requires mobx to be available");


/***/ }),

/***/ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js ***!
  \***********************************************************/
/*! exports provided: $mobx, FlowCancellationError, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, extendShallowObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/*! exports used: $mobx, Reaction, _allowStateChanges, _allowStateReadsEnd, _allowStateReadsStart, configure, createAtom, getDependencyTree, isObservableArray, isObservableMap, isObservableObject, observable, runInAction, spy, transaction, untracked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $mobx; });
/* unused harmony export FlowCancellationError */
/* unused harmony export IDerivationState */
/* unused harmony export ObservableMap */
/* unused harmony export ObservableSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return allowStateChanges; });
/* unused harmony export _allowStateChangesInsideComputed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return allowStateReadsStart; });
/* unused harmony export _endAction */
/* unused harmony export _getAdministration */
/* unused harmony export _getGlobalState */
/* unused harmony export _interceptReads */
/* unused harmony export _isComputingDerivation */
/* unused harmony export _resetGlobalState */
/* unused harmony export _startAction */
/* unused harmony export action */
/* unused harmony export autorun */
/* unused harmony export comparer */
/* unused harmony export computed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createAtom; });
/* unused harmony export decorate */
/* unused harmony export entries */
/* unused harmony export extendObservable */
/* unused harmony export extendShallowObservable */
/* unused harmony export flow */
/* unused harmony export get */
/* unused harmony export getAtom */
/* unused harmony export getDebugName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDependencyTree; });
/* unused harmony export getObserverTree */
/* unused harmony export has */
/* unused harmony export intercept */
/* unused harmony export isAction */
/* unused harmony export isArrayLike */
/* unused harmony export isBoxedObservable */
/* unused harmony export isComputed */
/* unused harmony export isComputedProp */
/* unused harmony export isFlowCancellationError */
/* unused harmony export isObservable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObservableObject; });
/* unused harmony export isObservableProp */
/* unused harmony export isObservableSet */
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return observable; });
/* unused harmony export observe */
/* unused harmony export onBecomeObserved */
/* unused harmony export onBecomeUnobserved */
/* unused harmony export onReactionError */
/* unused harmony export reaction */
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return runInAction; });
/* unused harmony export set */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return spy; });
/* unused harmony export toJS */
/* unused harmony export trace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return untracked; });
/* unused harmony export values */
/* unused harmony export when */
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/typeof.js");


/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var mockGlobal = {};

function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

function getNextId() {
  return ++globalState.mobxGuid;
}

function fail(message) {
  invariant(false, message);
  throw "X"; // unreachable
}

function invariant(check, message) {
  if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated(msg, thing) {
  if (false) {}

  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }

  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */


function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}

var noop = function noop() {};

function unique(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}

function isObject(value) {
  return value !== null && Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === "object";
}

function isPlainObject(value) {
  if (value === null || Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return fail("Cannot convert to map from '" + dataStructure + "'");
  }
}

function makeNonEnumerable(object, propNames) {
  for (var i = 0; i < propNames.length; i++) {
    addHiddenProp(object, propNames[i], object[propNames[i]]);
  }
}

function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}

function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}

function isPropertyConfigurable(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}

function assertPropertyConfigurable(object, prop) {
  if ( true && !isPropertyConfigurable(object, prop)) fail("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}

function createInstanceofPredicate(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}

function areBothNaN(a, b) {
  return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */


function isArrayLike(x) {
  return Array.isArray(x) || isObservableArray(x);
}

function isES6Map(thing) {
  if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map) return true;
  return false;
}

function isES6Set(thing) {
  return thing instanceof Set;
} // use Array.from in Mobx 5


function iteratorToArray(it) {
  var res = [];

  while (true) {
    var r = it.next();
    if (r.done) break;
    res.push(r.value);
  }

  return res;
}

function primitiveSymbol() {
  // es-disable-next-line
  return typeof Symbol === "function" && Symbol.toPrimitive || "@@toPrimitive";
}

function toPrimitive(value) {
  return value === null ? null : Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === "object" ? "" + value : value;
} // Use "for of" in V5


function forOf(iter, callback) {
  var next = iter.next();

  while (!next.done) {
    callback(next.value);
    next = iter.next();
  }
}

function iteratorSymbol() {
  return typeof Symbol === "function" && Symbol.iterator || "@@iterator";
}

function declareIterator(prototType, iteratorFactory) {
  addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

function makeIterable(iterator) {
  iterator[iteratorSymbol()] = getSelf;
  return iterator;
}

function toStringTagSymbol() {
  return typeof Symbol === "function" && Symbol.toStringTag || "@@toStringTag";
}

function getSelf() {
  return this;
}
/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */


var Atom =
/** @class */
function () {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name) {
    if (name === void 0) {
      name = "Atom@" + getNextId();
    }

    this.name = name;
    this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

    this.isBeingObserved = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.NOT_TRACKING;
  }

  Atom.prototype.onBecomeUnobserved = function () {// noop
  };

  Atom.prototype.onBecomeObserved = function () {
    /* noop */
  };
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */


  Atom.prototype.reportObserved = function () {
    return reportObserved(this);
  };
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */


  Atom.prototype.reportChanged = function () {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  Atom.prototype.toString = function () {
    return this.name;
  };

  return Atom;
}();

var isAtom = createInstanceofPredicate("Atom", Atom);

function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name);
  onBecomeObserved(atom, onBecomeObservedHandler);
  onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return areBothNaN(a, b) || identityComparer(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer,
  shallow: shallowComparer
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};

function createPropertyInitializerDescriptor(prop, enumerable) {
  var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
  return cache[prop] || (cache[prop] = {
    configurable: true,
    enumerable: enumerable,
    get: function get() {
      initializeInstance(this);
      return this[prop];
    },
    set: function set(value) {
      initializeInstance(this);
      this[prop] = value;
    }
  });
}

function initializeInstance(target) {
  if (target.__mobxDidRunLazyInitializers === true) return;
  var decorators = target.__mobxDecorators;

  if (decorators) {
    addHiddenProp(target, "__mobxDidRunLazyInitializers", true);

    for (var key in decorators) {
      var d = decorators[key];
      d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
    }
  }
}

function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
  return function decoratorFactory() {
    var decoratorArguments;

    var decorator = function decorate(target, prop, descriptor, applyImmediately // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
    // as the instance to apply the decorator to equals the target
    ) {
      if (applyImmediately === true) {
        propertyCreator(target, prop, descriptor, target, decoratorArguments);
        return null;
      }

      if ( true && !quacksLikeADecorator(arguments)) fail("This function is a decorator, but it wasn't invoked like a decorator");

      if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
        var inheritedDecorators = target.__mobxDecorators;
        addHiddenProp(target, "__mobxDecorators", _assign({}, inheritedDecorators));
      }

      target.__mobxDecorators[prop] = {
        prop: prop,
        propertyCreator: propertyCreator,
        descriptor: descriptor,
        decoratorTarget: target,
        decoratorArguments: decoratorArguments
      };
      return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
    };

    if (quacksLikeADecorator(arguments)) {
      // @decorator
      decoratorArguments = EMPTY_ARRAY;
      return decorator.apply(null, arguments);
    } else {
      // @decorator(args)
      decoratorArguments = Array.prototype.slice.call(arguments);
      return decorator;
    }
  };
}

function quacksLikeADecorator(args) {
  return (args.length === 2 || args.length === 3) && typeof args[1] === "string" || args.length === 4 && args[3] === true;
}

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });
  return v;
}

function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  return fail( true && "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}

function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}

function refStructEnhancer(v, oldValue, name) {
  if ( true && isObservable(v)) throw "observable.struct should not be used with observable values";
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

function createDecoratorForEnhancer(enhancer) {
  invariant(enhancer);
  var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
    if (true) {
      invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
    }

    var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
    defineObservableProperty(target, propertyName, initialValue, enhancer);
  });
  var res = // Extra process checks, as this happens during module initialization
  typeof process !== "undefined" && process.env && "development" !== "production" ? function observableDecorator() {
    // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
    // and simply return the created prop decorator
    if (arguments.length < 2) return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
    return decorator.apply(null, arguments);
  } : decorator;
  res.enhancer = enhancer;
  return res;
} // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases


var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
  deep: false,
  name: undefined,
  defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);

function assertValidOption(key) {
  if (!/^(deep|name|equals|defaultDecorator)$/.test(key)) fail("invalid option for (extend)observable: " + key);
}

function asCreateObservableOptions(thing) {
  if (thing === null || thing === undefined) return defaultCreateObservableOptions;
  if (typeof thing === "string") return {
    name: thing,
    deep: true
  };

  if (true) {
    if (Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(thing) !== "object") return fail("expected options object");
    Object.keys(thing).forEach(assertValidOption);
  }

  return thing;
}

function getEnhancerFromOptions(options) {
  return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string") {
    return deepDecorator.apply(null, arguments);
  } // it is an observable already, done


  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res; // otherwise, just box it

  fail( true && "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}

var observableFactories = {
  box: function box(value, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  shallowBox: function shallowBox(value, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowBox");
    deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
    return observable.box(value, {
      name: name,
      deep: false
    });
  },
  array: function array(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    var o = asCreateObservableOptions(options);
    return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowArray: function shallowArray(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowArray");
    deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
    return observable.array(initialValues, {
      name: name,
      deep: false
    });
  },
  map: function map(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowMap: function shallowMap(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowMap");
    deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
    return observable.map(initialValues, {
      name: name,
      deep: false
    });
  },
  set: function set(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("set");
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
    var o = asCreateObservableOptions(options);
    return extendObservable({}, props, decorators, o);
  },
  shallowObject: function shallowObject(props, name) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("shallowObject");
    deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
    return observable.object(props, {}, {
      name: name,
      deep: false
    });
  },
  ref: refDecorator,
  shallow: shallowDecorator,
  deep: deepDecorator,
  struct: refStructDecorator
};
var observable = createObservable; // weird trick to keep our typings nicely with our funcs, and still extend the observable function

Object.keys(observableFactories).forEach(function (name) {
  return observable[name] = observableFactories[name];
});

function incorrectlyUsedAsDecorator(methodName) {
  fail( // process.env.NODE_ENV !== "production" &&
  "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
  if (true) {
    invariant(descriptor && descriptor.get, "Trying to declare a computed value for unspecified getter '" + propertyName + "'");
  }

  var get = descriptor.get,
      set = descriptor.set; // initialValue is the descriptor for get / set props
  // Optimization: faster on decorator target or instance? Assuming target
  // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
  // Forcing instance now, fixes hot reloadig issues on React Native:

  var options = decoratorArgs[0] || {};
  defineComputedProperty(instance, propertyName, _assign({
    get: get,
    set: set
  }, options));
});
var computedStructDecorator = computedDecorator({
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    // @computed
    return computedDecorator.apply(null, arguments);
  }

  if (arg1 !== null && Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg1) === "object" && arguments.length === 1) {
    // @computed({ options })
    return computedDecorator.apply(null, arguments);
  } // computed(expr, options?)


  if (true) {
    invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
    invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
  }

  var opts = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg2) === "object" ? arg2 : {};
  opts.get = arg1;
  opts.set = typeof arg2 === "function" ? arg2 : opts.set;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue(opts);
};

computed.struct = computedStructDecorator;
var IDerivationState;

(function (IDerivationState) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException =
/** @class */
function () {
  function CaughtException(cause) {
    this.cause = cause; // Empty
  }

  return CaughtException;
}();

function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */


function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case IDerivationState.UP_TO_DATE:
      return false;

    case IDerivationState.NOT_TRACKING:
    case IDerivationState.STALE:
      return true;

    case IDerivationState.POSSIBLY_STALE:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
} // function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }


function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}

function checkIfStateModificationsAreAllowed(atom) {
  var hasObservers = atom.observers.length > 0; // Should never be possible to change an observed observable from inside computed, see #798

  if (globalState.computationDepth > 0 && hasObservers) fail( true && "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name); // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict")) fail( true && (globalState.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
}

function checkIfStateReadsAreAllowed(observable) {
  if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */


function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);

  if (derivation.observing.length === 0) {
    warnAboutDerivationWithoutDependencies(derivation);
  }

  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (false) {}

  if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
    console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }

  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var dep = prevObserving[l];

    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }

    dep.diffValue = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var dep = observing[i0];

    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}

function untracked(action) {
  var prev = untrackedStart();
  var res = action();
  untrackedEnd(prev);
  return res;
}

function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}

function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}

function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}

function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */


function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
  }
} // we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions


var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () {}, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;

function createAction(actionName, fn) {
  if (true) {
    invariant(typeof fn === "function", "`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
  }

  var res = function res() {
    return executeAction(actionName, fn, this, arguments);
  };

  if (true) {
    if (isFunctionNameConfigurable) {
      Object.defineProperty(res, "name", {
        value: actionName
      });
    }
  }

  res.isMobxAction = true;
  return res;
}

function executeAction(actionName, fn, scope, args) {
  var runInfo = _startAction(actionName, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}

function _startAction(actionName, scope, args) {
  var notifySpy = isSpyEnabled() && !!actionName;
  var startTime = 0;

  if (notifySpy) {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) {
      flattendArgs[i] = args[i];
    }
    spyReportStart({
      type: "action",
      name: actionName,
      object: scope,
      arguments: flattendArgs
    });
  }

  var prevDerivation = untrackedStart();
  startBatch();
  var prevAllowStateChanges = allowStateChangesStart(true);
  var prevAllowStateReads = allowStateReadsStart(true);
  var runInfo = {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    prevAllowStateReads: prevAllowStateReads,
    notifySpy: notifySpy,
    startTime: startTime,
    actionId: nextActionId++,
    parentActionId: currentActionId
  };
  currentActionId = runInfo.actionId;
  return runInfo;
}

function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId) {
    fail("invalid action stack. did you forget to finish an action?");
  }

  currentActionId = runInfo.parentActionId;

  if (runInfo.error !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges);
  allowStateReadsEnd(runInfo.prevAllowStateReads);
  endBatch();
  untrackedEnd(runInfo.prevDerivation);

  if (runInfo.notifySpy) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime
    });
  }

  globalState.suppressReactionErrors = false;
}

function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);
  var res;

  try {
    res = func();
  } finally {
    allowStateChangesEnd(prev);
  }

  return res;
}

function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}

function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

function allowStateChangesInsideComputed(func) {
  var prev = globalState.computationDepth;
  globalState.computationDepth = 0;
  var res;

  try {
    res = func();
  } finally {
    globalState.computationDepth = prev;
  }

  return res;
}

var ObservableValue =
/** @class */
function (_super) {
  __extends(ObservableValue, _super);

  function ObservableValue(value, enhancer, name, notifySpy, equals) {
    if (name === void 0) {
      name = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer.default;
    }

    var _this = _super.call(this, name) || this;

    _this.enhancer = enhancer;
    _this.name = name;
    _this.equals = equals;
    _this.hasUnreportedChange = false;
    _this.value = enhancer(value, undefined, name);

    if (notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: "create",
        name: _this.name,
        newValue: "" + _this.value
      });
    }

    return _this;
  }

  ObservableValue.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableValue.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (notifySpy) {
        spyReportStart({
          type: "update",
          name: this.name,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue(newValue);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableValue.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value, this.name);
    return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
  };

  ObservableValue.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  ObservableValue.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };

  ObservableValue.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableValue.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  ObservableValue.prototype.toJSON = function () {
    return this.get();
  };

  ObservableValue.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };

  ObservableValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  return ObservableValue;
}(Atom);

ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

var ComputedValue =
/** @class */
function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = null; // during tracking it's an array with new observed observers

    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.value = new CaughtException(null);
    this.isComputing = false; // to check for cycles

    this.isRunningSetter = false;
    this.isTracing = TraceMode.NONE;
    invariant(options.get, "missing option for computed: get");
    this.derivation = options.get;
    this.name = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter = createAction(this.name + "-setter", options.set);
    this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
    this.scope = options.context;
    this.requiresReaction = !!options.requiresReaction;
    this.keepAlive = !!options.keepAlive;
  }

  ComputedValue.prototype.onBecomeStale = function () {
    propagateMaybeChanged(this);
  };

  ComputedValue.prototype.onBecomeUnobserved = function () {};

  ComputedValue.prototype.onBecomeObserved = function () {};
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */


  ComputedValue.prototype.get = function () {
    if (this.isComputing) fail("Cycle detected in computation " + this.name + ": " + this.derivation);

    if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead();
        startBatch(); // See perf test 'computed memoization'

        this.value = this.computeValue(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
    }

    var result = this.value;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  ComputedValue.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException(res)) throw res.cause;
    return res;
  };

  ComputedValue.prototype.set = function (value) {
    if (this.setter) {
      invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;

      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant(false,  true && "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
  };

  ComputedValue.prototype.trackAndCompute = function () {
    if (isSpyEnabled()) {
      spyReport({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }

    var oldValue = this.value;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState === IDerivationState.NOT_TRACKING;
    var newValue = this.computeValue(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);

    if (changed) {
      this.value = newValue;
    }

    return changed;
  };

  ComputedValue.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState.computationDepth++;
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope);
      } else {
        try {
          res = this.derivation.call(this.scope);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    globalState.computationDepth--;
    this.isComputing = false;
    return res;
  };

  ComputedValue.prototype.suspend = function () {
    if (!this.keepAlive) {
      clearObserving(this);
      this.value = undefined; // don't hold on to computed value!
    }
  };

  ComputedValue.prototype.observe = function (listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  ComputedValue.prototype.warnAboutUntrackedRead = function () {
    if (false) {}

    if (this.requiresReaction === true) {
      fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
    }

    if (this.isTracing !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  ComputedValue.prototype.toJSON = function () {
    return this.get();
  };

  ComputedValue.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };

  ComputedValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  return ComputedValue;
}();

ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED"];

var MobXGlobals =
/** @class */
function () {
  function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 5;
    /**
     * globally unique token to signal unchanged
     */

    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */

    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */

    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */

    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */

    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */

    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */

    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */

    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */

    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */

    this.allowStateChanges = true;
    /**
     * Is it allowed to read observables at this point?
     * Used to hold the state needed for `observableRequiresReaction`
     */

    this.allowStateReads = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */

    this.enforceActions = false;
    /**
     * Spy callbacks
     */

    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */

    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */

    this.computedRequiresReaction = false;
    /**
     * (Experimental)
     * Warn if you try to create to derivation / reactive context without accessing any observable.
     */

    this.reactionRequiresObservable = false;
    /**
     * (Experimental)
     * Warn if observables are accessed outside a reactive context
     */

    this.observableRequiresReaction = false;
    /**
     * Allows overwriting of computed properties, useful in tests but not prod as it can cause
     * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
     */

    this.computedConfigurable = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */

    this.disableErrorBoundaries = false;
    /*
     * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
     * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
     */

    this.suppressReactionErrors = false;
  }

  return MobXGlobals;
}();

var canMergeGlobalState = true;
var isolateCalled = false;

var globalState = function () {
  var global = getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals();
  }
}();

function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) fail("isolateGlobalState should be called before MobX is running any reactions");
  isolateCalled = true;

  if (canMergeGlobalState) {
    if (--getGlobal().__mobxInstanceCount === 0) getGlobal().__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}

function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */


function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers && observable.observers.length > 0;
}

function getObservers(observable) {
  return observable.observers;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }


function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  var l = observable.observers.length;

  if (l) {
    // because object assignment is relatively expensive, let's not store data about index 0.
    observable.observersIndexes[node.__mapid] = l;
  }

  observable.observers[l] = node;
  if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}

function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  if (observable.observers.length === 1) {
    // deleting last observer
    observable.observers.length = 0;
    queueForUnobservation(observable);
  } else {
    // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
    var list = observable.observers;
    var map = observable.observersIndexes;
    var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes

    if (filler !== node) {
      // otherwise node was the last element, which already got removed from array
      var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.

      if (index) {
        // map store all indexes but 0, see comment in `addObserver`
        map[filler.__mapid] = index;
      } else {
        delete map[filler.__mapid];
      }

      list[index] = filler;
    }

    delete map[node.__mapid];
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}

function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */


function startBatch() {
  globalState.inBatch++;
}

function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;

      if (observable.observers.length === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBecomeUnobserved();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observable of another, etc..
          observable.suspend();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}

function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable.lastAccessedBy) {
      observable.lastAccessedBy = derivation.runId;
      derivation.newObserving[derivation.unboundDepsCount++] = observable;

      if (!observable.isBeingObserved) {
        observable.isBeingObserved = true;
        observable.onBecomeObserved();
      }
    }

    return true;
  } else if (observable.observers.length === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes


function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }

    d.dependenciesState = IDerivationState.STALE;
  } // invariantLOS(observable, "changed end");

} // Called by ComputedValue when it recalculate and its value changed


function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState = IDerivationState.UP_TO_DATE;
  } // invariantLOS(observable, "confirmed end");

} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.


function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
  observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      d.dependenciesState = IDerivationState.POSSIBLY_STALE;

      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }
  } // invariantLOS(observable, "maybe end");

}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");

  if (derivation.isTracing === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction =
/** @class */
function () {
  function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
    if (name === void 0) {
      name = "Reaction@" + getNextId();
    }

    if (requiresObservable === void 0) {
      requiresObservable = false;
    }

    this.name = name;
    this.onInvalidate = onInvalidate;
    this.errorHandler = errorHandler;
    this.requiresObservable = requiresObservable;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = [];
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode.NONE;
  }

  Reaction.prototype.onBecomeStale = function () {
    this.schedule();
  };

  Reaction.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  Reaction.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */


  Reaction.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch();
      this._isScheduled = false;

      if (shouldCompute(this)) {
        this._isTrackPending = true;

        try {
          this.onInvalidate();

          if (this._isTrackPending && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation(e);
        }
      }

      endBatch();
    }
  };

  Reaction.prototype.track = function (fn) {
    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name,
        type: "reaction"
      });
    }

    this._isRunning = true;
    var result = trackDerivedFunction(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;

    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);

    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  Reaction.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;

    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";

    if (globalState.suppressReactionErrors) {
      console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
    } else {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    }

    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  Reaction.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;

      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  Reaction.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r.$mobx = this;
    return r;
  };

  Reaction.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };

  Reaction.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();

function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */


var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = createInstanceofPredicate("Reaction", Reaction);

function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return !!globalState.spyListeners.length;
}

function spyReport(event) {
  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}

function spyReportStart(event) {
  var change = _assign(_assign({}, event), {
    spyReportStart: true
  });

  spyReport(change);
}

var END_EVENT = {
  spyReportEnd: true
};

function spyReportEnd(change) {
  if (change) spyReport(_assign(_assign({}, change), {
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}

function spy(listener) {
  globalState.spyListeners.push(listener);
  return once(function () {
    globalState.spyListeners = globalState.spyListeners.filter(function (l) {
      return l !== listener;
    });
  });
}

function dontReassignFields() {
  fail( true && "@action fields are not reassignable");
}

function namedActionDecorator(name) {
  return function (target, prop, descriptor) {
    if (descriptor) {
      if ( true && descriptor.get !== undefined) {
        return fail("@action cannot be used with getters");
      } // babel / typescript
      // @action method() { }


      if (descriptor.value) {
        // typescript
        return {
          value: createAction(name, descriptor.value),
          enumerable: false,
          configurable: true,
          writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)

        };
      } // babel only: @action method = () => {}


      var initializer_1 = descriptor.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          // N.B: we can't immediately invoke initializer; this would be wrong
          return createAction(name, initializer_1.call(this));
        }
      };
    } // bound instance methods


    return actionFieldDecorator(name).apply(this, arguments);
  };
}

function actionFieldDecorator(name) {
  // Simple property that writes on first invocation to the current instance
  return function (target, prop, descriptor) {
    Object.defineProperty(target, prop, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return undefined;
      },
      set: function set(value) {
        addHiddenProp(this, prop, action(name, value));
      }
    });
  };
}

function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
  if (applyToInstance === true) {
    defineBoundAction(target, propertyName, descriptor.value);
    return null;
  }

  if (descriptor) {
    // if (descriptor.value)
    // Typescript / Babel: @action.bound method() { }
    // also: babel @action.bound method = () => {}
    return {
      configurable: true,
      enumerable: false,
      get: function get() {
        defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
        return this[propertyName];
      },
      set: dontReassignFields
    };
  } // field decorator Typescript @action.bound method = () => {}


  return {
    enumerable: false,
    configurable: true,
    set: function set(v) {
      defineBoundAction(this, propertyName, v);
    },
    get: function get() {
      return undefined;
    }
  };
}

var action = function action(arg1, arg2, arg3, arg4) {
  // action(fn() {})
  if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1); // action("name", fn() {})

  if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2); // @action("name") fn() {}

  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1); // @action fn() {}

  if (arg4 === true) {
    // apply to instance immediately
    arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
  } else {
    return namedActionDecorator(arg2).apply(null, arguments);
  }
};

action.bound = boundActionDecorator;

function runInAction(arg1, arg2) {
  // TODO: deprecate?
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;

  if (true) {
    invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
    if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
  }

  return executeAction(actionName, fn, this, undefined);
}

function isAction(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}

function defineBoundAction(target, propertyName, fn) {
  addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */


function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    invariant(typeof view === "function", "Autorun expects a function as first argument");
    invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
  }

  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler_1 = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled_1 = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled_1) {
        isScheduled_1 = true;
        scheduler_1(function () {
          isScheduled_1 = false;
          if (!reaction.isDisposed) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule();
  return reaction.getDisposer();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (typeof opts === "boolean") {
    opts = {
      fireImmediately: opts
    };
    deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
  }

  if (true) {
    invariant(typeof expression === "function", "First argument to reaction should be a function");
    invariant(Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(opts) === "object", "Third argument of reactions should be an object");
  }

  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false; // Q: move into reaction runner?

    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, r);
    if (!firstTime && changed === true) effectAction(value, r);
    if (firstTime) firstTime = false;
  }

  r.schedule();
  return r.getDisposer();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook("onBecomeObserved", thing, arg2, arg3);
}

function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = typeof arg3 === "function" ? arg3 : arg2;
  var orig = atom[hook];
  if (typeof orig !== "function") return fail( true && "Not an atom that can be (un)observed");

  atom[hook] = function () {
    orig.call(this);
    cb.call(this);
  };

  return function () {
    atom[hook] = orig;
  };
}

function configure(options) {
  var enforceActions = options.enforceActions,
      computedRequiresReaction = options.computedRequiresReaction,
      computedConfigurable = options.computedConfigurable,
      disableErrorBoundaries = options.disableErrorBoundaries,
      arrayBuffer = options.arrayBuffer,
      reactionScheduler = options.reactionScheduler,
      reactionRequiresObservable = options.reactionRequiresObservable,
      observableRequiresReaction = options.observableRequiresReaction;

  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  if (enforceActions !== undefined) {
    if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
    var ea = void 0;

    switch (enforceActions) {
      case true:
      case "observed":
        ea = true;
        break;

      case false:
      case "never":
        ea = false;
        break;

      case "strict":
      case "always":
        ea = "strict";
        break;

      default:
        fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
    }

    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
  }

  if (computedRequiresReaction !== undefined) {
    globalState.computedRequiresReaction = !!computedRequiresReaction;
  }

  if (reactionRequiresObservable !== undefined) {
    globalState.reactionRequiresObservable = !!reactionRequiresObservable;
  }

  if (observableRequiresReaction !== undefined) {
    globalState.observableRequiresReaction = !!observableRequiresReaction;
    globalState.allowStateReads = !globalState.observableRequiresReaction;
  }

  if (computedConfigurable !== undefined) {
    globalState.computedConfigurable = !!computedConfigurable;
  }

  if (disableErrorBoundaries !== undefined) {
    if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
    globalState.disableErrorBoundaries = !!disableErrorBoundaries;
  }

  if (typeof arrayBuffer === "number") {
    reserveArrayBuffer(arrayBuffer);
  }

  if (reactionScheduler) {
    setReactionScheduler(reactionScheduler);
  }
}

function decorate(thing, decorators) {
  if ( true && !isPlainObject(decorators)) fail("Decorators should be a key value map");
  var target = typeof thing === "function" ? thing.prototype : thing;

  var _loop_1 = function _loop_1(prop) {
    var propertyDecorators = decorators[prop];

    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    } // prettier-ignore


    if ( true && !propertyDecorators.every(function (decorator) {
      return typeof decorator === "function";
    })) fail("Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
    var descriptor = Object.getOwnPropertyDescriptor(target, prop);
    var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
      return decorator(target, prop, accDescriptor);
    }, descriptor);
    if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
  };

  for (var prop in decorators) {
    _loop_1(prop);
  }

  return thing;
}

function extendShallowObservable(target, properties, decorators) {
  deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
  return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}

function extendObservable(target, properties, decorators, options) {
  if (true) {
    invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
    invariant(Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target) === "object", "'extendObservable' expects an object as first argument");
    invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
    if (decorators) for (var key in decorators) {
      if (!(key in properties)) fail("Trying to declare a decorator for unspecified property '" + key + "'");
    }
  }

  options = asCreateObservableOptions(options);
  var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
  initializeInstance(target);
  asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props

  startBatch();

  try {
    var keys = Object.getOwnPropertyNames(properties);

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var descriptor = Object.getOwnPropertyDescriptor(properties, key);

      if (true) {
        if (isComputed(descriptor.value)) fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
      }

      var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
      if ( true && typeof decorator !== "function") return fail("Not a valid decorator for '" + key + "', got: " + decorator);
      var resultDescriptor = decorator(target, key, descriptor, true);
      if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
      ) Object.defineProperty(target, key, resultDescriptor);
    }
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers(node)) result.observers = getObservers(node).map(nodeToObserverTree);
  return result;
}

var generatorId = 0;

function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}

FlowCancellationError.prototype = Object.create(Error.prototype);

function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}

function flow(generator) {
  if (arguments.length !== 1) fail( true && "Flow expects one 1 argument and cannot be used as decorator");
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  return function () {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var res = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (ret && typeof ret.then === "function") {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var res_1 = gen.return(undefined); // eat anything that promise would do, it's cancelled!

        var yieldedPromise = Promise.resolve(res_1.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return res;
  };
}

function cancelPromise(promise) {
  if (typeof promise.cancel === "function") promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (typeof propOrHandler !== "string") return fail( true && "InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else {
    return fail( true && "Expected observable map, object or array as first array");
  }

  if (target.dehancer !== undefined) return fail( true && "An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value.$mobx.values[property]) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}

function isComputed(value) {
  if (arguments.length > 1) return fail( true && "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isComputed(value);
}

function isComputedProp(value, propName) {
  if (typeof propName !== "string") return fail( true && "isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      var o = value.$mobx;
      return o.values && !!o.values[property];
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (arguments.length !== 1) fail( true && "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}

function isObservableProp(value, propName) {
  if (typeof propName !== "string") return fail( true && "expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj.$mobx.getKeys();
  }

  if (isObservableMap(obj)) {
    return iteratorToArray(obj.keys());
  }

  if (isObservableSet(obj)) {
    return iteratorToArray(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  return fail( true && "'keys()' can only be used on observable objects, arrays, sets and maps");
}

function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return iteratorToArray(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  return fail( true && "'values()' can only be used on observable objects, arrays, sets and maps");
}

function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return iteratorToArray(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  return fail( true && "'entries()' can only be used on observable objects, arrays and maps");
}

function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var values_1 = key;

    try {
      for (var key_1 in values_1) {
        set(obj, key_1, values_1[key_1]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    var adm = obj.$mobx;
    var existingObservable = adm.values[key];

    if (existingObservable) {
      adm.write(obj, key, value);
    } else {
      defineObservableProperty(obj, key, value, adm.defaultEnhancer);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else {
    return fail( true && "'set()' can only be used on observable objects, arrays and maps");
  }
}

function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj.$mobx.remove(key);
  } else if (isObservableMap(obj)) {
    obj.delete(key);
  } else if (isObservableSet(obj)) {
    obj.delete(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    obj.splice(key, 1);
  } else {
    return fail( true && "'remove()' can only be used on observable objects, arrays and maps");
  }
}

function has(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    var adm = getAdministration(obj);
    adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence

    return !!adm.values[key];
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  } else {
    return fail( true && "'has()' can only be used on observable objects, arrays and maps");
  }
}

function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  } else {
    return fail( true && "'get()' can only be used on observable objects, arrays and maps");
  }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};

function cache(map, key, value, options) {
  if (options.detectCycles) map.set(key, value);
  return value;
}

function toJSHelper(source, options, __alreadySeen) {
  if (!options.recurseEverything && !isObservable(source)) return source;
  if (Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source) !== "object") return source; // Directly return null if source is null

  if (source === null) return null; // Directly return the Date object itself if contained in the observable

  if (source instanceof Date) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), options, __alreadySeen); // make sure we track the keys of the object

  if (isObservable(source)) keys(source);
  var detectCycles = options.detectCycles === true;

  if (detectCycles && source !== null && __alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source) || Array.isArray(source)) {
    var res_1 = cache(__alreadySeen, source, [], options);
    var toAdd = source.map(function (value) {
      return toJSHelper(value, options, __alreadySeen);
    });
    res_1.length = toAdd.length;

    for (var i = 0, l = toAdd.length; i < l; i++) {
      res_1[i] = toAdd[i];
    }

    return res_1;
  }

  if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_2 = cache(__alreadySeen, source, new Set(), options);
      source.forEach(function (value) {
        res_2.add(toJSHelper(value, options, __alreadySeen));
      });
      return res_2;
    } else {
      var res_3 = cache(__alreadySeen, source, [], options);
      source.forEach(function (value) {
        res_3.push(toJSHelper(value, options, __alreadySeen));
      });
      return res_3;
    }
  }

  if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_4 = cache(__alreadySeen, source, new Map(), options);
      source.forEach(function (value, key) {
        res_4.set(key, toJSHelper(value, options, __alreadySeen));
      });
      return res_4;
    } else {
      var res_5 = cache(__alreadySeen, source, {}, options);
      source.forEach(function (value, key) {
        res_5[key] = toJSHelper(value, options, __alreadySeen);
      });
      return res_5;
    }
  } // Fallback to the situation that source is an ObservableObject or a plain object


  var res = cache(__alreadySeen, source, {}, options);

  for (var key in source) {
    res[key] = toJSHelper(source[key], options, __alreadySeen);
  }

  return res;
}

function toJS(source, options) {
  // backward compatibility
  if (typeof options === "boolean") options = {
    detectCycles: options
  };
  if (!options) options = defaultOptions;
  options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;

  var __alreadySeen;

  if (options.detectCycles) __alreadySeen = new Map();
  return toJSHelper(source, options, __alreadySeen);
}

function trace() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return fail( true && "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }

  derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */


function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg1) === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer.$mobx.isDisposed) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect);
  var disposer = autorun(function (r) {
    if (predicate()) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) return fail("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _assign(_assign({}, opts), {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}

function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}

function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    var interceptors = interceptable.interceptors;
    if (interceptors) for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}

function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}

function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364

var safariPrototypeSetterInheritanceBug = function () {
  var v = false;
  var p = {};
  Object.defineProperty(p, "0", {
    set: function set() {
      v = true;
    }
  });
  Object.create(p)["0"] = 1;
  return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */


var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray =
/** @class */
function () {
  function StubArray() {}

  return StubArray;
}();

function inherit(ctor, proto) {
  if (typeof Object["setPrototypeOf"] !== "undefined") {
    Object["setPrototypeOf"](ctor.prototype, proto);
  } else if (typeof ctor.prototype.__proto__ !== "undefined") {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor["prototype"] = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529

if (Object.isFrozen(Array)) {
  ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (key) {
    Object.defineProperty(StubArray.prototype, key, {
      configurable: true,
      writable: true,
      value: Array.prototype[key]
    });
  });
}

var ObservableArrayAdministration =
/** @class */
function () {
  function ObservableArrayAdministration(name, enhancer, array, owned) {
    this.array = array;
    this.owned = owned;
    this.values = [];
    this.lastKnownLength = 0;
    this.atom = new Atom(name || "ObservableArray@" + getNextId());

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableArrayAdministration.prototype.dehanceValues = function (values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        object: this.array,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };

  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  }; // adds / removes the necessary numeric properties to this object


  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
    this.lastKnownLength += delta;
    if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE) reserveArrayBuffer(oldLength + delta + 1);
  };

  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.array,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });
    var lengthDelta = newItems.length - deleteCount;
    this.updateArrayLength(length, lengthDelta); // create or remove new entries

    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };

  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    var _a;

    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }
  };

  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null;
    if (notifySpy) spyReportStart(_assign(_assign({}, change), {
      name: this.atom.name
    }));
    this.atom.reportChanged();
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy) spyReportStart(_assign(_assign({}, change), {
      name: this.atom.name
    }));
    this.atom.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  return ObservableArrayAdministration;
}();

var ObservableArray =
/** @class */
function (_super) {
  __extends(ObservableArray, _super);

  function ObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }

    if (owned === void 0) {
      owned = false;
    }

    var _this = _super.call(this) || this;

    var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
    addHiddenFinalProp(_this, "$mobx", adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    if (safariPrototypeSetterInheritanceBug) {
      // Seems that Safari won't use numeric prototype setter untill any * numeric property is
      // defined on the instance. After that it works fine, even if this property is deleted.
      Object.defineProperty(adm.array, "0", ENTRY_0);
    }

    return _this;
  }

  ObservableArray.prototype.intercept = function (handler) {
    return this.$mobx.intercept(handler);
  };

  ObservableArray.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    return this.$mobx.observe(listener, fireImmediately);
  };

  ObservableArray.prototype.clear = function () {
    return this.splice(0);
  };

  ObservableArray.prototype.concat = function () {
    var arrays = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arrays[_i] = arguments[_i];
    }

    this.$mobx.atom.reportObserved();
    return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) {
      return isObservableArray(a) ? a.peek() : a;
    }));
  };

  ObservableArray.prototype.replace = function (newItems) {
    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
  };
  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */


  ObservableArray.prototype.toJS = function () {
    return this.slice();
  };

  ObservableArray.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toJS();
  };

  ObservableArray.prototype.peek = function () {
    this.$mobx.atom.reportObserved();
    return this.$mobx.dehanceValues(this.$mobx.values);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


  ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    if (arguments.length === 3) deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
    var idx = this.findIndex.apply(this, arguments);
    return idx === -1 ? undefined : this.get(idx);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


  ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    if (arguments.length === 3) deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
    var items = this.peek(),
        l = items.length;

    for (var i = fromIndex; i < l; i++) {
      if (predicate.call(thisArg, items[i], i, this)) return i;
    }

    return -1;
  };
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */


  ObservableArray.prototype.splice = function (index, deleteCount) {
    var newItems = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return this.$mobx.spliceWithArray(index);

      case 2:
        return this.$mobx.spliceWithArray(index, deleteCount);
    }

    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.push = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.pop = function () {
    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
  };

  ObservableArray.prototype.shift = function () {
    return this.splice(0, 1)[0];
  };

  ObservableArray.prototype.unshift = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.reverse = function () {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  };

  ObservableArray.prototype.sort = function (compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  };

  ObservableArray.prototype.remove = function (value) {
    var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  };

  ObservableArray.prototype.move = function (fromIndex, toIndex) {
    deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");

    function checkIndex(index) {
      if (index < 0) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
      }

      var length = this.$mobx.values.length;

      if (index >= length) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
      }
    }

    checkIndex.call(this, fromIndex);
    checkIndex.call(this, toIndex);

    if (fromIndex === toIndex) {
      return;
    }

    var oldItems = this.$mobx.values;
    var newItems;

    if (fromIndex < toIndex) {
      newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
    } else {
      // toIndex < fromIndex
      newItems = __spread(oldItems.slice(0, toIndex), [oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
    }

    this.replace(newItems);
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.get = function (index) {
    var impl = this.$mobx;

    if (impl) {
      if (index < impl.values.length) {
        impl.atom.reportObserved();
        return impl.dehanceValue(impl.values[index]);
      }

      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }

    return undefined;
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.set = function (index, newValue) {
    var adm = this.$mobx;
    var values = adm.values;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(adm.atom);
      var oldValue = values[index];

      if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
          type: "update",
          object: this,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    }
  };

  return ObservableArray;
}(StubArray);

declareIterator(ObservableArray.prototype, function () {
  this.$mobx.atom.reportObserved();
  var self = this;
  var nextIndex = 0;
  return makeIterable({
    next: function next() {
      return nextIndex < self.length ? {
        value: self[nextIndex++],
        done: false
      } : {
        done: true,
        value: undefined
      };
    }
  });
});
Object.defineProperty(ObservableArray.prototype, "length", {
  enumerable: false,
  configurable: true,
  get: function get() {
    return this.$mobx.getArrayLength();
  },
  set: function set(newLength) {
    this.$mobx.setArrayLength(newLength);
  }
});
addHiddenProp(ObservableArray.prototype, toStringTagSymbol(), "Array");
["indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    return baseFunc.apply(this.peek(), arguments);
  });
});
["every", "filter", //"find", // implemented individually (IE support)
//"findIndex", // implemented individually (IE support)
//"flatMap", // not supported
"forEach", "map", "some"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function (callback, thisArg) {
    var _this = this;

    var adm = this.$mobx;
    adm.atom.reportObserved();
    var dehancedValues = adm.dehanceValues(adm.values);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this);
    }, thisArg);
  });
});
["reduce", "reduceRight"].forEach(function (funcName) {
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    var _this = this;

    var adm = this.$mobx;
    adm.atom.reportObserved(); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      currentValue = adm.dehanceValue(currentValue);
      return callback(accumulator, currentValue, index, _this);
    };

    return adm.values[funcName].apply(adm.values, arguments);
  });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */

makeNonEnumerable(ObservableArray.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]); // See #364

var ENTRY_0 = createArrayEntryDescriptor(0);

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: false,
    get: function get() {
      return this.get(index);
    },
    set: function set(value) {
      this.set(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++) {
    createArrayBufferItem(index);
  }

  OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}

reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);

function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var ObservableMapMarker = {};

var ObservableMap =
/** @class */
function () {
  function ObservableMap(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableMap@" + getNextId();
    }

    this.enhancer = enhancer;
    this.name = name;
    this.$mobx = ObservableMapMarker;
    this._keysAtom = createAtom(this.name + ".keys()");

    if (typeof Map !== "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }

    this._data = new Map();
    this._hasMap = new Map();
    this.merge(initialData);
  }

  ObservableMap.prototype._has = function (key) {
    return this._data.has(key);
  };

  ObservableMap.prototype.has = function (key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this._has(key);

    var entry = this._hasMap.get(key);

    if (!entry) {
      // todo: replace with atom (breaking change)
      var newEntry = entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);

      this._hasMap.set(key, newEntry);

      onBecomeUnobserved(newEntry, function () {
        return _this._hasMap.delete(key);
      });
    }

    return entry.get();
  };

  ObservableMap.prototype.set = function (key, value) {
    var hasKey = this._has(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }

    return this;
  };

  ObservableMap.prototype.delete = function (key) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._keysAtom);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this._has(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(key).value,
        name: key
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      transaction(function () {
        _this._keysAtom.reportChanged();

        _this._updateHasMapEntry(key, false);

        var observable = _this._data.get(key);

        observable.setNewValue(undefined);

        _this._data.delete(key);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableMap.prototype._updateHasMapEntry = function (key, value) {
    var entry = this._hasMap.get(key);

    if (entry) {
      entry.setNewValue(value);
    }
  };

  ObservableMap.prototype._updateValue = function (key, newValue) {
    var observable = this._data.get(key);

    newValue = observable.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableMap.prototype._addValue = function (key, newValue) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._keysAtom);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);

      _this._data.set(key, observable);

      newValue = observable.value; // value might have been changed

      _this._updateHasMapEntry(key, true);

      _this._keysAtom.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy) spyReportStart(_assign(_assign({}, change), {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableMap.prototype.get = function (key) {
    if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
    return this.dehanceValue(undefined);
  };

  ObservableMap.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableMap.prototype.keys = function () {
    this._keysAtom.reportObserved();

    return this._data.keys();
  };

  ObservableMap.prototype.values = function () {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _a = keys.next(),
            done = _a.done,
            value = _a.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  ObservableMap.prototype.entries = function () {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _a = keys.next(),
            done = _a.done,
            value = _a.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  ObservableMap.prototype.forEach = function (callback, thisArg) {
    var _this = this;

    this._keysAtom.reportObserved();

    this._data.forEach(function (_, key) {
      return callback.call(thisArg, _this.get(key), key, _this);
    });
  };
  /** Merge another object into this object, returns this. */


  ObservableMap.prototype.merge = function (other) {
    var _this = this;

    if (isObservableMap(other)) {
      other = other.toJS();
    }

    transaction(function () {
      var prev = allowStateChangesStart(true);

      try {
        if (isPlainObject(other)) Object.keys(other).forEach(function (key) {
          return _this.set(key, other[key]);
        });else if (Array.isArray(other)) other.forEach(function (_a) {
          var _b = __read(_a, 2),
              key = _b[0],
              value = _b[1];

          return _this.set(key, value);
        });else if (isES6Map(other)) {
          if (other.constructor !== Map) fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
          else other.forEach(function (value, key) {
              return _this.set(key, value);
            });
        } else if (other !== null && other !== undefined) fail("Cannot initialize map from " + other);
      } finally {
        allowStateChangesEnd(prev);
      }
    });
    return this;
  };

  ObservableMap.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        // Note we are concurrently reading/deleting the same keys
        // forEach handles this properly
        _this._data.forEach(function (_, key) {
          return _this.delete(key);
        });
      });
    });
  };

  ObservableMap.prototype.replace = function (values) {
    var _this = this; // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors


    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      forOf(_this._data.keys(), function (key) {
        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this.delete(key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this._data.get(key);

            orderedData.set(key, value);
          }
        }
      }); // Merge entries

      forOf(replacementMap.entries(), function (_a) {
        var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1]; // We will want to know whether a new key is added


        var keyExisted = _this._data.has(key); // Add or update value


        _this.set(key, value); // The addition could have been prevent by interceptor


        if (_this._data.has(key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var value_1 = _this._data.get(key);

          orderedData.set(key, value_1); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      }); // Check for possible key order change

      if (!keysReportChangedCalled) {
        if (_this._data.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this._keysAtom.reportChanged();
        } else {
          var iter1 = _this._data.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this._keysAtom.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this._data = orderedData;
    });
    return this;
  };

  Object.defineProperty(ObservableMap.prototype, "size", {
    get: function get() {
      this._keysAtom.reportObserved();

      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a plain object that represents this map.
   * Note that all the keys being stringified.
   * If there are duplicating keys after converting them to strings, behaviour is undetermined.
   */

  ObservableMap.prototype.toPOJO = function () {
    var _this = this;

    var res = {};
    this.forEach(function (_, key) {
      return res[Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(key) === "symbol" ? key : stringifyKey(key)] = _this.get(key);
    });
    return res;
  };
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values migth still be observable. For a deep clone use mobx.toJS.
   */


  ObservableMap.prototype.toJS = function () {
    return new Map(this);
  };

  ObservableMap.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toPOJO();
  };

  ObservableMap.prototype.toString = function () {
    var _this = this;

    return this.name + "[{ " + iteratorToArray(this.keys()).map(function (key) {
      return stringifyKey(key) + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableMap.prototype.observe = function (listener, fireImmediately) {
     true && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  ObservableMap.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  return ObservableMap;
}();

function stringifyKey(key) {
  if (key && key.toString) return key.toString();else return new String(key).toString();
}

declareIterator(ObservableMap.prototype, function () {
  return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, toStringTagSymbol(), "Map");
/* 'var' fixes small-build issue */

var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
var ObservableSetMarker = {};

var ObservableSet =
/** @class */
function () {
  function ObservableSet(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableSet@" + getNextId();
    }

    this.name = name;
    this.$mobx = ObservableSetMarker;
    this._data = new Set();
    this._atom = createAtom(this.name);

    if (typeof Set !== "function") {
      throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
    }

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  ObservableSet.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableSet.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        _this._data.forEach(function (value) {
          _this.delete(value);
        });
      });
    });
  };

  ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
    var _this = this;

    this._atom.reportObserved();

    this._data.forEach(function (value) {
      callbackFn.call(thisArg, value, value, _this);
    });
  };

  Object.defineProperty(ObservableSet.prototype, "size", {
    get: function get() {
      this._atom.reportObserved();

      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });

  ObservableSet.prototype.add = function (value) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._atom);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "add",
        object: this,
        newValue: value
      });
      if (!change) return this; // TODO: ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this._data.add(_this.enhancer(value, undefined));

        _this._atom.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "add",
        object: this,
        newValue: value
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }

    return this;
  };

  ObservableSet.prototype.delete = function (value) {
    var _this = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), {
        name: this.name
      }));
      transaction(function () {
        _this._atom.reportChanged();

        _this._data.delete(value);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableSet.prototype.has = function (value) {
    this._atom.reportObserved();

    return this._data.has(this.dehanceValue(value));
  };

  ObservableSet.prototype.entries = function () {
    var nextIndex = 0;
    var keys = iteratorToArray(this.keys());
    var values = iteratorToArray(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableSet.prototype.keys = function () {
    return this.values();
  };

  ObservableSet.prototype.values = function () {
    this._atom.reportObserved();

    var self = this;
    var nextIndex = 0;
    var observableValues;

    if (this._data.values !== undefined) {
      observableValues = iteratorToArray(this._data.values());
    } else {
      // There is no values function in IE11
      observableValues = [];

      this._data.forEach(function (e) {
        return observableValues.push(e);
      });
    }

    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableSet.prototype.replace = function (other) {
    var _this = this;

    if (isObservableSet(other)) {
      other = other.toJS();
    }

    transaction(function () {
      var prev = allowStateChangesStart(true);

      try {
        if (Array.isArray(other)) {
          _this.clear();

          other.forEach(function (value) {
            return _this.add(value);
          });
        } else if (isES6Set(other)) {
          _this.clear();

          other.forEach(function (value) {
            return _this.add(value);
          });
        } else if (other !== null && other !== undefined) {
          fail("Cannot initialize set from " + other);
        }
      } finally {
        allowStateChangesEnd(prev);
      }
    });
    return this;
  };

  ObservableSet.prototype.observe = function (listener, fireImmediately) {
    // TODO 'fireImmediately' can be true?
     true && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };

  ObservableSet.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableSet.prototype.toJS = function () {
    return new Set(this);
  };

  ObservableSet.prototype.toString = function () {
    return this.name + "[ " + iteratorToArray(this.keys()).join(", ") + " ]";
  };

  return ObservableSet;
}();

declareIterator(ObservableSet.prototype, function () {
  return this.values();
});
addHiddenFinalProp(ObservableSet.prototype, toStringTagSymbol(), "Set");
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration =
/** @class */
function () {
  function ObservableObjectAdministration(target, name, defaultEnhancer) {
    this.target = target;
    this.name = name;
    this.defaultEnhancer = defaultEnhancer;
    this.values = {};
  }

  ObservableObjectAdministration.prototype.read = function (owner, key) {
    if (false) {}

    return this.values[key].get();
  };

  ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
    var instance = this.target;

    if (false) {}

    var observable = this.values[key];

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "update",
        object: instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var change = notify || notifySpy ? {
        type: "update",
        object: instance,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableObjectAdministration.prototype.remove = function (key) {
    if (!this.values[key]) return;
    var target = this.target;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: target,
        name: key,
        type: "remove"
      });
      if (!change) return;
    }

    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var oldValue = this.values[key].get();
      if (this.keys) this.keys.remove(key);
      delete this.values[key];
      delete this.target[key];
      var change = notify || notifySpy ? {
        type: "remove",
        object: target,
        oldValue: oldValue,
        name: key
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    } finally {
      endBatch();
    }
  };

  ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
    /**
     * This happens if a property is accessed through the prototype chain, but the property was
     * declared directly as own property on the prototype.
     *
     * E.g.:
     * class A {
     * }
     * extendObservable(A.prototype, { x: 1 })
     *
     * classB extens A {
     * }
     * console.log(new B().x)
     *
     * It is unclear whether the property should be considered 'static' or inherited.
     * Either use `console.log(A.x)`
     * or: decorate(A, { x: observable })
     *
     * When using decorate, the property will always be redeclared as own property on the actual instance
     */
    console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
     true && invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  ObservableObjectAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableObjectAdministration.prototype.getKeys = function () {
    var _this = this;

    if (this.keys === undefined) {
      this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) {
        return _this.values[key] instanceof ObservableValue;
      }), referenceEnhancer, "keys(" + this.name + ")", true);
    }

    return this.keys.slice();
  };

  return ObservableObjectAdministration;
}();

function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }

  var adm = target.$mobx;
  if (adm) return adm;
   true && invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
  if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
  if (!name) name = "ObservableObject@" + getNextId();
  adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
  addHiddenFinalProp(target, "$mobx", adm);
  return adm;
}

function defineObservableProperty(target, propName, newValue, enhancer) {
  var adm = asObservableObject(target);
  assertPropertyConfigurable(target, propName);

  if (hasInterceptors(adm)) {
    var change = interceptChange(adm, {
      object: target,
      name: propName,
      type: "add",
      newValue: newValue
    });
    if (!change) return;
    newValue = change.newValue;
  }

  var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
  newValue = observable.value; // observableValue might have changed it

  Object.defineProperty(target, propName, generateObservablePropConfig(propName));
  if (adm.keys) adm.keys.push(propName);
  notifyPropertyAddition(adm, target, propName, newValue);
}

function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
  var adm = asObservableObject(target);
  options.name = adm.name + "." + propName;
  options.context = target;
  adm.values[propName] = new ComputedValue(options);
  Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}

var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);

function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this.$mobx.read(this, propName);
    },
    set: function set(v) {
      this.$mobx.write(this, propName, v);
    }
  });
}

function getAdministrationForComputedPropOwner(owner) {
  var adm = owner.$mobx;

  if (!adm) {
    // because computed props are declared on proty,
    // the current instance might not have been initialized yet
    initializeInstance(owner);
    return owner.$mobx;
  }

  return adm;
}

function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: globalState.computedConfigurable,
    enumerable: false,
    get: function get() {
      return getAdministrationForComputedPropOwner(this).read(this, propName);
    },
    set: function set(v) {
      getAdministrationForComputedPropOwner(this).write(this, propName, v);
    }
  });
}

function notifyPropertyAddition(adm, object, key, newValue) {
  var notify = hasListeners(adm);
  var notifySpy = isSpyEnabled();
  var change = notify || notifySpy ? {
    type: "add",
    object: object,
    name: key,
    newValue: newValue
  } : null;
  if (notifySpy) spyReportStart(_assign(_assign({}, change), {
    name: adm.name,
    key: key
  }));
  if (notify) notifyListeners(adm, change);
  if (notifySpy) spyReportEnd();
}

var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function isObservableObject(thing) {
  if (isObject(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    return isObservableObjectAdministration(thing.$mobx);
  }

  return false;
}

function getAtom(thing, property) {
  if (Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(thing) === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) fail( true && "It is not possible to get index atoms from arrays");
      return thing.$mobx.atom;
    }

    if (isObservableSet(thing)) {
      return thing.$mobx;
    }

    if (isObservableMap(thing)) {
      var anyThing = thing;
      if (property === undefined) return anyThing._keysAtom;

      var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);

      if (!observable) fail( true && "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
      return observable;
    } // Initializers run lazily when transpiling to babel, so make sure they are run...


    initializeInstance(thing);
    if (property && !thing.$mobx) thing[property]; // See #1072

    if (isObservableObject(thing)) {
      if (!property) return fail( true && "please specify a property");
      var observable = thing.$mobx.values[property];
      if (!observable) fail( true && "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
      return observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction(thing.$mobx)) {
      // disposer function
      return thing.$mobx;
    }
  }

  return fail( true && "Cannot obtain atom from " + thing);
}

function getAdministration(thing, property) {
  if (!thing) fail("Expecting some object");
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing; // Initializers run lazily when transpiling to babel, so make sure they are run...

  initializeInstance(thing);
  if (thing.$mobx) return thing.$mobx;
  fail( true && "Cannot obtain administration from " + thing);
}

function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name;
}

var toString = Object.prototype.toString;

function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.


function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a);

  if (type !== "function" && type !== "object" && Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(b) != "object") return false; // Unwrap any wrapped objects.

  a = unwrap(a);
  b = unwrap(b); // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return (// eslint-disable-next-line
        typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b)
      );
  }

  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) != "object" || Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(b) != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key = void 0;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.peek();
  if (isES6Map(a) || isObservableMap(a)) return iteratorToArray(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return iteratorToArray(a.entries());
  return a;
}

function has$1(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}
/**
 * (c) Michel Weststrate 2015 - 2019
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */


try {
  // define process.env if needed
  // if this is not a production build in the first place
  // (in which case the expression below would be substituted with 'production')
  // tslint:disable-next-line
  "development";
} catch (e) {
  var g = getGlobal();
  if (typeof process === "undefined") g.process = {};
  g.process.env = {};
}

(function () {
  function testCodeMinification() {}

  if (testCodeMinification.name !== "testCodeMinification" && "development" !== "production" && typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
    // trick so it doesn't get replaced
    var varName = ["process", "env", "NODE_ENV"].join(".");
    console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
  }
})(); // forward compatibility with mobx, so that packages can easily support mobx 4 & 5


var $mobx = "$mobx";

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
} // TODO: remove in some future build


if ( true && typeof module.exports !== "undefined") {
  var warnedAboutDefaultExport_1 = false;
  Object.defineProperty(module.exports, "default", {
    enumerable: false,
    get: function get() {
      if (!warnedAboutDefaultExport_1) {
        warnedAboutDefaultExport_1 = true;
        console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
      }

      return undefined;
    }
  });
  ["extras", "Atom", "BaseAtom", "asFlat", "asMap", "asReference", "asStructure", "autorunAsync", "createTranformer", "expr", "isModifierDescriptor", "isStrictModeEnabled", "map", "useStrict", "whyRun"].forEach(function (prop) {
    Object.defineProperty(module.exports, prop, {
      enumerable: false,
      get: function get() {
        fail("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
      },
      set: function set() {}
    });
  });
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js"), __webpack_require__(/*! ./../../_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js"), __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/_object-assign@4.1.1@object-assign/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_object-assign@4.1.1@object-assign/index.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/_process@0.11.10@process/browser.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/_react-reconciler@0.25.1@react-reconciler/cjs/react-reconciler.production.min.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_react-reconciler@0.25.1@react-reconciler/cjs/react-reconciler.production.min.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js");

/** @license React v0.25.1
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  'use strict';

  var aa = __webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js"),
      ba = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js"),
      m = __webpack_require__(/*! scheduler */ "./node_modules/_scheduler@0.19.1@scheduler/cjs/scheduler.production.min.js");

  function n(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var p = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  p.hasOwnProperty("ReactCurrentDispatcher") || (p.ReactCurrentDispatcher = {
    current: null
  });
  p.hasOwnProperty("ReactCurrentBatchConfig") || (p.ReactCurrentBatchConfig = {
    suspense: null
  });
  var u = "function" === typeof Symbol && Symbol.for,
      ca = u ? Symbol.for("react.element") : 60103,
      da = u ? Symbol.for("react.portal") : 60106,
      ea = u ? Symbol.for("react.fragment") : 60107,
      fa = u ? Symbol.for("react.strict_mode") : 60108,
      ha = u ? Symbol.for("react.profiler") : 60114,
      ia = u ? Symbol.for("react.provider") : 60109,
      ja = u ? Symbol.for("react.context") : 60110,
      ka = u ? Symbol.for("react.concurrent_mode") : 60111,
      la = u ? Symbol.for("react.forward_ref") : 60112,
      ma = u ? Symbol.for("react.suspense") : 60113,
      na = u ? Symbol.for("react.suspense_list") : 60120,
      oa = u ? Symbol.for("react.memo") : 60115,
      pa = u ? Symbol.for("react.lazy") : 60116,
      qa = u ? Symbol.for("react.block") : 60121,
      ra = "function" === typeof Symbol && Symbol.iterator;

  function sa(a) {
    if (null === a || "object" !== _typeof(a)) return null;
    a = ra && a[ra] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function ta(a) {
    if (-1 === a._status) {
      a._status = 0;
      var b = a._ctor;
      b = b();
      a._result = b;
      b.then(function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });
    }
  }

  function ua(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case ea:
        return "Fragment";

      case da:
        return "Portal";

      case ha:
        return "Profiler";

      case fa:
        return "StrictMode";

      case ma:
        return "Suspense";

      case na:
        return "SuspenseList";
    }

    if ("object" === _typeof(a)) switch (a.$$typeof) {
      case ja:
        return "Context.Consumer";

      case ia:
        return "Context.Provider";

      case la:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

      case oa:
        return ua(a.type);

      case qa:
        return ua(a.render);

      case pa:
        if (a = 1 === a._status ? a._result : null) return ua(a);
    }
    return null;
  }

  function va(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b.return;) {
      b = b.return;
    } else {
      a = b;

      do {
        b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return;
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function wa(a) {
    if (va(a) !== a) throw Error(n(188));
  }

  function xa(a) {
    var b = a.alternate;

    if (!b) {
      b = va(a);
      if (null === b) throw Error(n(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e.return;

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return wa(e), a;
          if (f === d) return wa(e), b;
          f = f.sibling;
        }

        throw Error(n(188));
      }

      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw Error(n(189));
        }
      }
      if (c.alternate !== d) throw Error(n(190));
    }

    if (3 !== c.tag) throw Error(n(188));
    return c.stateNode.current === c ? a : b;
  }

  function ya(a) {
    a = xa(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  function za(a) {
    a = xa(a);
    if (!a) return null;

    for (var b = a;;) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child && 4 !== b.tag) b.child.return = b, b = b.child;else {
        if (b === a) break;

        for (; !b.sibling;) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
    }

    return null;
  }

  var Aa = $$$hostConfig.getPublicInstance,
      Ba = $$$hostConfig.getRootHostContext,
      Ca = $$$hostConfig.getChildHostContext,
      Da = $$$hostConfig.prepareForCommit,
      Ea = $$$hostConfig.resetAfterCommit,
      Fa = $$$hostConfig.createInstance,
      Ga = $$$hostConfig.appendInitialChild,
      Ha = $$$hostConfig.finalizeInitialChildren,
      Ia = $$$hostConfig.prepareUpdate,
      Ja = $$$hostConfig.shouldSetTextContent,
      Ka = $$$hostConfig.shouldDeprioritizeSubtree,
      La = $$$hostConfig.createTextInstance,
      Ma = $$$hostConfig.setTimeout,
      Na = $$$hostConfig.clearTimeout,
      Oa = $$$hostConfig.noTimeout,
      Pa = $$$hostConfig.isPrimaryRenderer,
      Qa = $$$hostConfig.supportsMutation,
      Ra = $$$hostConfig.supportsPersistence,
      Sa = $$$hostConfig.supportsHydration,
      Ta = $$$hostConfig.appendChild,
      Ua = $$$hostConfig.appendChildToContainer,
      Va = $$$hostConfig.commitTextUpdate,
      Wa = $$$hostConfig.commitMount,
      Xa = $$$hostConfig.commitUpdate,
      Ya = $$$hostConfig.insertBefore,
      Za = $$$hostConfig.insertInContainerBefore,
      $a = $$$hostConfig.removeChild,
      ab = $$$hostConfig.removeChildFromContainer,
      bb = $$$hostConfig.resetTextContent,
      cb = $$$hostConfig.hideInstance,
      db = $$$hostConfig.hideTextInstance,
      eb = $$$hostConfig.unhideInstance,
      fb = $$$hostConfig.unhideTextInstance,
      gb = $$$hostConfig.cloneInstance,
      hb = $$$hostConfig.createContainerChildSet,
      ib = $$$hostConfig.appendChildToContainerChildSet,
      jb = $$$hostConfig.finalizeContainerChildren,
      kb = $$$hostConfig.replaceContainerChildren,
      lb = $$$hostConfig.cloneHiddenInstance,
      mb = $$$hostConfig.cloneHiddenTextInstance,
      nb = $$$hostConfig.canHydrateInstance,
      ob = $$$hostConfig.canHydrateTextInstance,
      pb = $$$hostConfig.isSuspenseInstancePending,
      qb = $$$hostConfig.isSuspenseInstanceFallback,
      rb = $$$hostConfig.getNextHydratableSibling,
      sb = $$$hostConfig.getFirstHydratableChild,
      tb = $$$hostConfig.hydrateInstance,
      ub = $$$hostConfig.hydrateTextInstance,
      vb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      wb = $$$hostConfig.commitHydratedContainer,
      xb = $$$hostConfig.commitHydratedSuspenseInstance,
      yb = /^(.*)[\\\/]/;

  function zb(a) {
    var b = "";

    do {
      a: switch (a.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var c = "";
          break a;

        default:
          var d = a._debugOwner,
              e = a._debugSource,
              f = ua(a.type);
          c = null;
          d && (c = ua(d.type));
          d = f;
          f = "";
          e ? f = " (at " + e.fileName.replace(yb, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
          c = "\n    in " + (d || "Unknown") + f;
      }

      b += c;
      a = a.return;
    } while (a);

    return b;
  }

  var Ab = [],
      Bb = -1;

  function B(a) {
    0 > Bb || (a.current = Ab[Bb], Ab[Bb] = null, Bb--);
  }

  function C(a, b) {
    Bb++;
    Ab[Bb] = a.current;
    a.current = b;
  }

  var Cb = {},
      D = {
    current: Cb
  },
      E = {
    current: !1
  },
      Db = Cb;

  function Eb(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Cb;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function F(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function Fb() {
    B(E);
    B(D);
  }

  function Gb(a, b, c) {
    if (D.current !== Cb) throw Error(n(168));
    C(D, b);
    C(E, c);
  }

  function Hb(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in a)) throw Error(n(108, ua(b) || "Unknown", e));
    }

    return aa({}, c, {}, d);
  }

  function Ib(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cb;
    Db = D.current;
    C(D, a);
    C(E, E.current);
    return !0;
  }

  function Jb(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n(169));
    c ? (a = Hb(a, b, Db), d.__reactInternalMemoizedMergedChildContext = a, B(E), B(D), C(D, a)) : B(E);
    C(E, c);
  }

  var Kb = m.unstable_runWithPriority,
      Lb = m.unstable_scheduleCallback,
      Mb = m.unstable_cancelCallback,
      Nb = m.unstable_requestPaint,
      Ob = m.unstable_now,
      Pb = m.unstable_getCurrentPriorityLevel,
      Qb = m.unstable_ImmediatePriority,
      Rb = m.unstable_UserBlockingPriority,
      Sb = m.unstable_NormalPriority,
      Tb = m.unstable_LowPriority,
      Ub = m.unstable_IdlePriority,
      Vb = {},
      Wb = m.unstable_shouldYield,
      Xb = void 0 !== Nb ? Nb : function () {},
      Yb = null,
      Zb = null,
      $b = !1,
      ac = Ob(),
      G = 1E4 > ac ? Ob : function () {
    return Ob() - ac;
  };

  function bc() {
    switch (Pb()) {
      case Qb:
        return 99;

      case Rb:
        return 98;

      case Sb:
        return 97;

      case Tb:
        return 96;

      case Ub:
        return 95;

      default:
        throw Error(n(332));
    }
  }

  function cc(a) {
    switch (a) {
      case 99:
        return Qb;

      case 98:
        return Rb;

      case 97:
        return Sb;

      case 96:
        return Tb;

      case 95:
        return Ub;

      default:
        throw Error(n(332));
    }
  }

  function dc(a, b) {
    a = cc(a);
    return Kb(a, b);
  }

  function ec(a, b, c) {
    a = cc(a);
    return Lb(a, b, c);
  }

  function fc(a) {
    null === Yb ? (Yb = [a], Zb = Lb(Qb, gc)) : Yb.push(a);
    return Vb;
  }

  function H() {
    if (null !== Zb) {
      var a = Zb;
      Zb = null;
      Mb(a);
    }

    gc();
  }

  function gc() {
    if (!$b && null !== Yb) {
      $b = !0;
      var a = 0;

      try {
        var b = Yb;
        dc(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];

            do {
              c = c(!0);
            } while (null !== c);
          }
        });
        Yb = null;
      } catch (c) {
        throw null !== Yb && (Yb = Yb.slice(a + 1)), Lb(Qb, H), c;
      } finally {
        $b = !1;
      }
    }
  }

  function hc(a, b, c) {
    c /= 10;
    return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
  }

  function ic(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var jc = "function" === typeof Object.is ? Object.is : ic,
      kc = Object.prototype.hasOwnProperty;

  function lc(a, b) {
    if (jc(a, b)) return !0;
    if ("object" !== _typeof(a) || null === a || "object" !== _typeof(b) || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      if (!kc.call(b, c[d]) || !jc(a[c[d]], b[c[d]])) return !1;
    }

    return !0;
  }

  function mc(a, b) {
    if (a && a.defaultProps) {
      b = aa({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }
    }

    return b;
  }

  var nc = {
    current: null
  },
      oc = null,
      pc = null,
      qc = null;

  function rc() {
    qc = pc = oc = null;
  }

  function sc(a, b) {
    a = a.type._context;
    Pa ? (C(nc, a._currentValue), a._currentValue = b) : (C(nc, a._currentValue2), a._currentValue2 = b);
  }

  function tc(a) {
    var b = nc.current;
    B(nc);
    a = a.type._context;
    Pa ? a._currentValue = b : a._currentValue2 = b;
  }

  function uc(a, b) {
    for (; null !== a;) {
      var c = a.alternate;
      if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
      a = a.return;
    }
  }

  function vc(a, b) {
    oc = a;
    qc = pc = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (a.expirationTime >= b && (wc = !0), a.firstContext = null);
  }

  function I(a, b) {
    if (qc !== a && !1 !== b && 0 !== b) {
      if ("number" !== typeof b || 1073741823 === b) qc = a, b = 1073741823;
      b = {
        context: a,
        observedBits: b,
        next: null
      };

      if (null === pc) {
        if (null === oc) throw Error(n(308));
        pc = b;
        oc.dependencies = {
          expirationTime: 0,
          firstContext: b,
          responders: null
        };
      } else pc = pc.next = b;
    }

    return Pa ? a._currentValue : a._currentValue2;
  }

  var xc = !1;

  function yc(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      baseQueue: null,
      shared: {
        pending: null
      },
      effects: null
    };
  }

  function zc(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      baseQueue: a.baseQueue,
      shared: a.shared,
      effects: a.effects
    });
  }

  function Ac(a, b) {
    a = {
      expirationTime: a,
      suspenseConfig: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
    return a.next = a;
  }

  function Bc(a, b) {
    a = a.updateQueue;

    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }

  function Cc(a, b) {
    var c = a.alternate;
    null !== c && zc(c, a);
    a = a.updateQueue;
    c = a.baseQueue;
    null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
  }

  function Dc(a, b, c, d) {
    var e = a.updateQueue;
    xc = !1;
    var f = e.baseQueue,
        g = e.shared.pending;

    if (null !== g) {
      if (null !== f) {
        var h = f.next;
        f.next = g.next;
        g.next = h;
      }

      f = g;
      e.shared.pending = null;
      h = a.alternate;
      null !== h && (h = h.updateQueue, null !== h && (h.baseQueue = g));
    }

    if (null !== f) {
      h = f.next;
      var k = e.baseState,
          l = 0,
          q = null,
          r = null,
          w = null;

      if (null !== h) {
        var z = h;

        do {
          g = z.expirationTime;

          if (g < d) {
            var Q = {
              expirationTime: z.expirationTime,
              suspenseConfig: z.suspenseConfig,
              tag: z.tag,
              payload: z.payload,
              callback: z.callback,
              next: null
            };
            null === w ? (r = w = Q, q = k) : w = w.next = Q;
            g > l && (l = g);
          } else {
            null !== w && (w = w.next = {
              expirationTime: 1073741823,
              suspenseConfig: z.suspenseConfig,
              tag: z.tag,
              payload: z.payload,
              callback: z.callback,
              next: null
            });
            Ec(g, z.suspenseConfig);

            a: {
              var A = a,
                  v = z;
              g = b;
              Q = c;

              switch (v.tag) {
                case 1:
                  A = v.payload;

                  if ("function" === typeof A) {
                    k = A.call(Q, k, g);
                    break a;
                  }

                  k = A;
                  break a;

                case 3:
                  A.effectTag = A.effectTag & -4097 | 64;

                case 0:
                  A = v.payload;
                  g = "function" === typeof A ? A.call(Q, k, g) : A;
                  if (null === g || void 0 === g) break a;
                  k = aa({}, k, g);
                  break a;

                case 2:
                  xc = !0;
              }
            }

            null !== z.callback && (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [z] : g.push(z));
          }

          z = z.next;
          if (null === z || z === h) if (g = e.shared.pending, null === g) break;else z = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
        } while (1);
      }

      null === w ? q = k : w.next = r;
      e.baseState = q;
      e.baseQueue = w;
      Gc(l);
      a.expirationTime = l;
      a.memoizedState = k;
    }
  }

  function Hc(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
          e = d.callback;

      if (null !== e) {
        d.callback = null;
        d = e;
        e = c;
        if ("function" !== typeof d) throw Error(n(191, d));
        d.call(e);
      }
    }
  }

  var Ic = p.ReactCurrentBatchConfig,
      Jc = new ba.Component().refs;

  function Kc(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : aa({}, b, c);
    a.memoizedState = c;
    0 === a.expirationTime && (a.updateQueue.baseState = c);
  }

  var Oc = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternalFiber) ? va(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternalFiber;
      var d = Lc(),
          e = Ic.suspense;
      d = Mc(d, a, e);
      e = Ac(d, e);
      e.payload = b;
      void 0 !== c && null !== c && (e.callback = c);
      Bc(a, e);
      Nc(a, d);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternalFiber;
      var d = Lc(),
          e = Ic.suspense;
      d = Mc(d, a, e);
      e = Ac(d, e);
      e.tag = 1;
      e.payload = b;
      void 0 !== c && null !== c && (e.callback = c);
      Bc(a, e);
      Nc(a, d);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternalFiber;
      var c = Lc(),
          d = Ic.suspense;
      c = Mc(c, a, d);
      d = Ac(c, d);
      d.tag = 2;
      void 0 !== b && null !== b && (d.callback = b);
      Bc(a, d);
      Nc(a, c);
    }
  };

  function Pc(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !lc(c, d) || !lc(e, f) : !0;
  }

  function Qc(a, b, c) {
    var d = !1,
        e = Cb;
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? f = I(f) : (e = F(b) ? Db : D.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Eb(a, e) : Cb);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Oc;
    a.stateNode = b;
    b._reactInternalFiber = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function Rc(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Oc.enqueueReplaceState(b, b.state, null);
  }

  function Sc(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Jc;
    yc(a);
    var f = b.contextType;
    "object" === _typeof(f) && null !== f ? e.context = I(f) : (f = F(b) ? Db : D.current, e.context = Eb(a, f));
    Dc(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Kc(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Oc.enqueueReplaceState(e, e.state, null), Dc(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.effectTag |= 4);
  }

  var Tc = Array.isArray;

  function Uc(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== _typeof(a)) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(n(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(n(147, a));
        var e = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

        b = function b(a) {
          var b = d.refs;
          b === Jc && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };

        b._stringRef = e;
        return b;
      }

      if ("string" !== typeof a) throw Error(n(284));
      if (!c._owner) throw Error(n(290, a));
    }

    return a;
  }

  function Vc(a, b) {
    if ("textarea" !== a.type) throw Error(n(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
  }

  function Wc(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
        c.nextEffect = null;
        c.effectTag = 8;
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(b, a) {
      for (b = new Map(); null !== a;) {
        null !== a.key ? b.set(a.key, a) : b.set(a.index, a), a = a.sibling;
      }

      return b;
    }

    function e(a, b) {
      a = Xc(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
      b.effectTag = 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.effectTag = 2);
      return b;
    }

    function h(b, a, c, d) {
      if (null === a || 6 !== a.tag) return a = Yc(c, b.mode, d), a.return = b, a;
      a = e(a, c);
      a.return = b;
      return a;
    }

    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Uc(a, b, c), d.return = a, d;
      d = Zc(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Uc(a, b, c);
      d.return = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = $c(c, a.mode, d), b.return = a, b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }

    function q(b, a, c, d, f) {
      if (null === a || 7 !== a.tag) return a = ad(c, b.mode, d, f), a.return = b, a;
      a = e(a, c);
      a.return = b;
      return a;
    }

    function r(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = Yc("" + b, a.mode, c), b.return = a, b;

      if ("object" === _typeof(b) && null !== b) {
        switch (b.$$typeof) {
          case ca:
            return c = Zc(b.type, b.key, b.props, null, a.mode, c), c.ref = Uc(a, null, b), c.return = a, c;

          case da:
            return b = $c(b, a.mode, c), b.return = a, b;
        }

        if (Tc(b) || sa(b)) return b = ad(b, a.mode, c, null), b.return = a, b;
        Vc(a, b);
      }

      return null;
    }

    function w(b, a, c, d) {
      var e = null !== a ? a.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(b, a, "" + c, d);

      if ("object" === _typeof(c) && null !== c) {
        switch (c.$$typeof) {
          case ca:
            return c.key === e ? c.type === ea ? q(b, a, c.props.children, d, e) : k(b, a, c, d) : null;

          case da:
            return c.key === e ? l(b, a, c, d) : null;
        }

        if (Tc(c) || sa(c)) return null !== e ? null : q(b, a, c, d, null);
        Vc(b, c);
      }

      return null;
    }

    function z(b, a, c, d, e) {
      if ("string" === typeof d || "number" === typeof d) return b = b.get(c) || null, h(a, b, "" + d, e);

      if ("object" === _typeof(d) && null !== d) {
        switch (d.$$typeof) {
          case ca:
            return b = b.get(null === d.key ? c : d.key) || null, d.type === ea ? q(a, b, d.props.children, e, d.key) : k(a, b, d, e);

          case da:
            return b = b.get(null === d.key ? c : d.key) || null, l(a, b, d, e);
        }

        if (Tc(d) || sa(d)) return b = b.get(c) || null, q(a, b, d, e, null);
        Vc(a, d);
      }

      return null;
    }

    function Q(e, g, h, k) {
      for (var l = null, v = null, t = g, x = g = 0, q = null; null !== t && x < h.length; x++) {
        t.index > x ? (q = t, t = null) : q = t.sibling;
        var y = w(e, t, h[x], k);

        if (null === y) {
          null === t && (t = q);
          break;
        }

        a && t && null === y.alternate && b(e, t);
        g = f(y, g, x);
        null === v ? l = y : v.sibling = y;
        v = y;
        t = q;
      }

      if (x === h.length) return c(e, t), l;

      if (null === t) {
        for (; x < h.length; x++) {
          t = r(e, h[x], k), null !== t && (g = f(t, g, x), null === v ? l = t : v.sibling = t, v = t);
        }

        return l;
      }

      for (t = d(e, t); x < h.length; x++) {
        q = z(t, e, x, h[x], k), null !== q && (a && null !== q.alternate && t.delete(null === q.key ? x : q.key), g = f(q, g, x), null === v ? l = q : v.sibling = q, v = q);
      }

      a && t.forEach(function (a) {
        return b(e, a);
      });
      return l;
    }

    function A(e, g, h, k) {
      var t = sa(h);
      if ("function" !== typeof t) throw Error(n(150));
      h = t.call(h);
      if (null == h) throw Error(n(151));

      for (var l = t = null, v = g, x = g = 0, q = null, y = h.next(); null !== v && !y.done; x++, y = h.next()) {
        v.index > x ? (q = v, v = null) : q = v.sibling;
        var A = w(e, v, y.value, k);

        if (null === A) {
          null === v && (v = q);
          break;
        }

        a && v && null === A.alternate && b(e, v);
        g = f(A, g, x);
        null === l ? t = A : l.sibling = A;
        l = A;
        v = q;
      }

      if (y.done) return c(e, v), t;

      if (null === v) {
        for (; !y.done; x++, y = h.next()) {
          y = r(e, y.value, k), null !== y && (g = f(y, g, x), null === l ? t = y : l.sibling = y, l = y);
        }

        return t;
      }

      for (v = d(e, v); !y.done; x++, y = h.next()) {
        y = z(v, e, x, y.value, k), null !== y && (a && null !== y.alternate && v.delete(null === y.key ? x : y.key), g = f(y, g, x), null === l ? t = y : l.sibling = y, l = y);
      }

      a && v.forEach(function (a) {
        return b(e, a);
      });
      return t;
    }

    return function (a, d, f, h) {
      var k = "object" === _typeof(f) && null !== f && f.type === ea && null === f.key;
      k && (f = f.props.children);
      var l = "object" === _typeof(f) && null !== f;
      if (l) switch (f.$$typeof) {
        case ca:
          a: {
            l = f.key;

            for (k = d; null !== k;) {
              if (k.key === l) {
                switch (k.tag) {
                  case 7:
                    if (f.type === ea) {
                      c(a, k.sibling);
                      d = e(k, f.props.children);
                      d.return = a;
                      a = d;
                      break a;
                    }

                    break;

                  default:
                    if (k.elementType === f.type) {
                      c(a, k.sibling);
                      d = e(k, f.props);
                      d.ref = Uc(a, k, f);
                      d.return = a;
                      a = d;
                      break a;
                    }

                }

                c(a, k);
                break;
              } else b(a, k);

              k = k.sibling;
            }

            f.type === ea ? (d = ad(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Zc(f.type, f.key, f.props, null, a.mode, h), h.ref = Uc(a, d, f), h.return = a, a = h);
          }

          return g(a);

        case da:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }

            d = $c(f, a.mode, h);
            d.return = a;
            a = d;
          }

          return g(a);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Yc(f, a.mode, h), d.return = a, a = d), g(a);
      if (Tc(f)) return Q(a, d, f, h);
      if (sa(f)) return A(a, d, f, h);
      l && Vc(a, f);
      if ("undefined" === typeof f && !k) switch (a.tag) {
        case 1:
        case 0:
          throw a = a.type, Error(n(152, a.displayName || a.name || "Component"));
      }
      return c(a, d);
    };
  }

  var bd = Wc(!0),
      cd = Wc(!1),
      dd = {},
      J = {
    current: dd
  },
      ed = {
    current: dd
  },
      fd = {
    current: dd
  };

  function gd(a) {
    if (a === dd) throw Error(n(174));
    return a;
  }

  function hd(a, b) {
    C(fd, b);
    C(ed, a);
    C(J, dd);
    a = Ba(b);
    B(J);
    C(J, a);
  }

  function id() {
    B(J);
    B(ed);
    B(fd);
  }

  function jd(a) {
    var b = gd(fd.current),
        c = gd(J.current);
    b = Ca(c, a.type, b);
    c !== b && (C(ed, a), C(J, b));
  }

  function kd(a) {
    ed.current === a && (B(J), B(ed));
  }

  var K = {
    current: 0
  };

  function ld(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || pb(c) || qb(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.effectTag & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }

    return null;
  }

  function md(a, b) {
    return {
      responder: a,
      props: b
    };
  }

  var nd = p.ReactCurrentDispatcher,
      L = p.ReactCurrentBatchConfig,
      od = 0,
      M = null,
      N = null,
      O = null,
      pd = !1;

  function P() {
    throw Error(n(321));
  }

  function qd(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!jc(a[c], b[c])) return !1;
    }

    return !0;
  }

  function rd(a, b, c, d, e, f) {
    od = f;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.expirationTime = 0;
    nd.current = null === a || null === a.memoizedState ? sd : td;
    a = c(d, e);

    if (b.expirationTime === od) {
      f = 0;

      do {
        b.expirationTime = 0;
        if (!(25 > f)) throw Error(n(301));
        f += 1;
        O = N = null;
        b.updateQueue = null;
        nd.current = ud;
        a = c(d, e);
      } while (b.expirationTime === od);
    }

    nd.current = vd;
    b = null !== N && null !== N.next;
    od = 0;
    O = N = M = null;
    pd = !1;
    if (b) throw Error(n(300));
    return a;
  }

  function wd() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }

  function xd() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;

    var b = null === O ? M.memoizedState : O.next;
    if (null !== b) O = b, N = a;else {
      if (null === a) throw Error(n(310));
      N = a;
      a = {
        memoizedState: N.memoizedState,
        baseState: N.baseState,
        baseQueue: N.baseQueue,
        queue: N.queue,
        next: null
      };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }

  function yd(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function zd(a) {
    var b = xd(),
        c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    var d = N,
        e = d.baseQueue,
        f = c.pending;

    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }

      d.baseQueue = e = f;
      c.pending = null;
    }

    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null,
          k = e;

      do {
        var l = k.expirationTime;

        if (l < od) {
          var q = {
            expirationTime: k.expirationTime,
            suspenseConfig: k.suspenseConfig,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null
          };
          null === h ? (g = h = q, f = d) : h = h.next = q;
          l > M.expirationTime && (M.expirationTime = l, Gc(l));
        } else null !== h && (h = h.next = {
          expirationTime: 1073741823,
          suspenseConfig: k.suspenseConfig,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        }), Ec(l, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);

        k = k.next;
      } while (null !== k && k !== e);

      null === h ? f = d : h.next = g;
      jc(d, b.memoizedState) || (wc = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }

    return [b.memoizedState, c.dispatch];
  }

  function Ad(a) {
    var b = xd(),
        c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;

    if (null !== e) {
      c.pending = null;
      var g = e = e.next;

      do {
        f = a(f, g.action), g = g.next;
      } while (g !== e);

      jc(f, b.memoizedState) || (wc = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }

    return [f, d];
  }

  function Bd(a) {
    var b = wd();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: yd,
      lastRenderedState: a
    };
    a = a.dispatch = Cd.bind(null, M, a);
    return [b.memoizedState, a];
  }

  function Dd(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = M.updateQueue;
    null === b ? (b = {
      lastEffect: null
    }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }

  function Ed() {
    return xd().memoizedState;
  }

  function Fd(a, b, c, d) {
    var e = wd();
    M.effectTag |= a;
    e.memoizedState = Dd(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function Gd(a, b, c, d) {
    var e = xd();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;

      if (null !== d && qd(d, g.deps)) {
        Dd(b, c, f, d);
        return;
      }
    }

    M.effectTag |= a;
    e.memoizedState = Dd(1 | b, c, f, d);
  }

  function Hd(a, b) {
    return Fd(516, 4, a, b);
  }

  function Id(a, b) {
    return Gd(516, 4, a, b);
  }

  function Jd(a, b) {
    return Gd(4, 2, a, b);
  }

  function Kd(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function Ld(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Gd(4, 2, Kd.bind(null, b, a), c);
  }

  function Md() {}

  function Nd(a, b) {
    wd().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }

  function Od(a, b) {
    var c = xd();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && qd(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function Pd(a, b) {
    var c = xd();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && qd(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function Qd(a, b, c) {
    var d = bc();
    dc(98 > d ? 98 : d, function () {
      a(!0);
    });
    dc(97 < d ? 97 : d, function () {
      var d = L.suspense;
      L.suspense = void 0 === b ? null : b;

      try {
        a(!1), c();
      } finally {
        L.suspense = d;
      }
    });
  }

  function Cd(a, b, c) {
    var d = Lc(),
        e = Ic.suspense;
    d = Mc(d, a, e);
    e = {
      expirationTime: d,
      suspenseConfig: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    };
    var f = b.pending;
    null === f ? e.next = e : (e.next = f.next, f.next = e);
    b.pending = e;
    f = a.alternate;
    if (a === M || null !== f && f === M) pd = !0, e.expirationTime = od, M.expirationTime = od;else {
      if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState,
            h = f(g, c);
        e.eagerReducer = f;
        e.eagerState = h;
        if (jc(h, g)) return;
      } catch (k) {} finally {}
      Nc(a, d);
    }
  }

  var vd = {
    readContext: I,
    useCallback: P,
    useContext: P,
    useEffect: P,
    useImperativeHandle: P,
    useLayoutEffect: P,
    useMemo: P,
    useReducer: P,
    useRef: P,
    useState: P,
    useDebugValue: P,
    useResponder: P,
    useDeferredValue: P,
    useTransition: P
  },
      sd = {
    readContext: I,
    useCallback: Nd,
    useContext: I,
    useEffect: Hd,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Fd(4, 2, Kd.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return Fd(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = wd();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = wd();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      a = a.dispatch = Cd.bind(null, M, a);
      return [d.memoizedState, a];
    },
    useRef: function useRef(a) {
      var b = wd();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: Bd,
    useDebugValue: Md,
    useResponder: md,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = Bd(a),
          d = c[0],
          e = c[1];
      Hd(function () {
        var c = L.suspense;
        L.suspense = void 0 === b ? null : b;

        try {
          e(a);
        } finally {
          L.suspense = c;
        }
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = Bd(!1),
          c = b[0];
      b = b[1];
      return [Nd(Qd.bind(null, b, a), [b, a]), c];
    }
  },
      td = {
    readContext: I,
    useCallback: Od,
    useContext: I,
    useEffect: Id,
    useImperativeHandle: Ld,
    useLayoutEffect: Jd,
    useMemo: Pd,
    useReducer: zd,
    useRef: Ed,
    useState: function useState() {
      return zd(yd);
    },
    useDebugValue: Md,
    useResponder: md,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = zd(yd),
          d = c[0],
          e = c[1];
      Id(function () {
        var c = L.suspense;
        L.suspense = void 0 === b ? null : b;

        try {
          e(a);
        } finally {
          L.suspense = c;
        }
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = zd(yd),
          c = b[0];
      b = b[1];
      return [Od(Qd.bind(null, b, a), [b, a]), c];
    }
  },
      ud = {
    readContext: I,
    useCallback: Od,
    useContext: I,
    useEffect: Id,
    useImperativeHandle: Ld,
    useLayoutEffect: Jd,
    useMemo: Pd,
    useReducer: Ad,
    useRef: Ed,
    useState: function useState() {
      return Ad(yd);
    },
    useDebugValue: Md,
    useResponder: md,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = Ad(yd),
          d = c[0],
          e = c[1];
      Id(function () {
        var c = L.suspense;
        L.suspense = void 0 === b ? null : b;

        try {
          e(a);
        } finally {
          L.suspense = c;
        }
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = Ad(yd),
          c = b[0];
      b = b[1];
      return [Od(Qd.bind(null, b, a), [b, a]), c];
    }
  },
      Rd = null,
      Sd = null,
      Td = !1;

  function Ud(a, b) {
    var c = Vd(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.effectTag = 8;
    null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }

  function Wd(a, b) {
    switch (a.tag) {
      case 5:
        return b = nb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 6:
        return b = ob(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;

      case 13:
        return !1;

      default:
        return !1;
    }
  }

  function Xd(a) {
    if (Td) {
      var b = Sd;

      if (b) {
        var c = b;

        if (!Wd(a, b)) {
          b = rb(c);

          if (!b || !Wd(a, b)) {
            a.effectTag = a.effectTag & -1025 | 2;
            Td = !1;
            Rd = a;
            return;
          }

          Ud(Rd, c);
        }

        Rd = a;
        Sd = sb(b);
      } else a.effectTag = a.effectTag & -1025 | 2, Td = !1, Rd = a;
    }
  }

  function Yd(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a.return;
    }

    Rd = a;
  }

  function Zd(a) {
    if (!Sa || a !== Rd) return !1;
    if (!Td) return Yd(a), Td = !0, !1;
    var b = a.type;
    if (5 !== a.tag || "head" !== b && "body" !== b && !Ja(b, a.memoizedProps)) for (b = Sd; b;) {
      Ud(a, b), b = rb(b);
    }
    Yd(a);

    if (13 === a.tag) {
      if (!Sa) throw Error(n(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(n(317));
      Sd = vb(a);
    } else Sd = Rd ? rb(a.stateNode) : null;

    return !0;
  }

  function $d() {
    Sa && (Sd = Rd = null, Td = !1);
  }

  var ae = p.ReactCurrentOwner,
      wc = !1;

  function R(a, b, c, d) {
    b.child = null === a ? cd(b, null, c, d) : bd(b, a.child, c, d);
  }

  function be(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    vc(b, e);
    d = rd(a, b, c, d, f, e);
    if (null !== a && !wc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), ce(a, b, e);
    b.effectTag |= 1;
    R(a, b, d, e);
    return b.child;
  }

  function de(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if ("function" === typeof g && !ee(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, fe(a, b, g, d, e, f);
      a = Zc(c.type, null, d, null, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }

    g = a.child;
    if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : lc, c(e, d) && a.ref === b.ref)) return ce(a, b, f);
    b.effectTag |= 1;
    a = Xc(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  function fe(a, b, c, d, e, f) {
    return null !== a && lc(a.memoizedProps, d) && a.ref === b.ref && (wc = !1, e < f) ? (b.expirationTime = a.expirationTime, ce(a, b, f)) : ge(a, b, c, d, f);
  }

  function he(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
  }

  function ge(a, b, c, d, e) {
    var f = F(c) ? Db : D.current;
    f = Eb(b, f);
    vc(b, e);
    c = rd(a, b, c, d, f, e);
    if (null !== a && !wc) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), ce(a, b, e);
    b.effectTag |= 1;
    R(a, b, c, e);
    return b.child;
  }

  function ie(a, b, c, d, e) {
    if (F(c)) {
      var f = !0;
      Ib(b);
    } else f = !1;

    vc(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Qc(b, c, d), Sc(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          h = b.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === _typeof(l) && null !== l ? l = I(l) : (l = F(c) ? Db : D.current, l = Eb(b, l));
      var q = c.getDerivedStateFromProps,
          r = "function" === typeof q || "function" === typeof g.getSnapshotBeforeUpdate;
      r || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Rc(b, g, d, l);
      xc = !1;
      var w = b.memoizedState;
      g.state = w;
      Dc(b, d, g, e);
      k = b.memoizedState;
      h !== d || w !== k || E.current || xc ? ("function" === typeof q && (Kc(b, c, q, d), k = b.memoizedState), (h = xc || Pc(b, c, h, d, w, k, l)) ? (r || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
    } else g = b.stateNode, zc(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : mc(b.type, h), k = g.context, l = c.contextType, "object" === _typeof(l) && null !== l ? l = I(l) : (l = F(c) ? Db : D.current, l = Eb(b, l)), q = c.getDerivedStateFromProps, (r = "function" === typeof q || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Rc(b, g, d, l), xc = !1, k = b.memoizedState, g.state = k, Dc(b, d, g, e), w = b.memoizedState, h !== d || k !== w || E.current || xc ? ("function" === typeof q && (Kc(b, c, q, d), w = b.memoizedState), (q = xc || Pc(b, c, h, d, k, w, l)) ? (r || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = w), g.props = d, g.state = w, g.context = l, d = q) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
    return je(a, b, c, d, f, e);
  }

  function je(a, b, c, d, e, f) {
    he(a, b);
    var g = 0 !== (b.effectTag & 64);
    if (!d && !g) return e && Jb(b, c, !1), ce(a, b, f);
    d = b.stateNode;
    ae.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.effectTag |= 1;
    null !== a && g ? (b.child = bd(b, a.child, null, f), b.child = bd(b, null, h, f)) : R(a, b, h, f);
    b.memoizedState = d.state;
    e && Jb(b, c, !0);
    return b.child;
  }

  function le(a) {
    var b = a.stateNode;
    b.pendingContext ? Gb(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Gb(a, b.context, !1);
    hd(a, b.containerInfo);
  }

  var me = {
    dehydrated: null,
    retryTime: 0
  };

  function ne(a, b, c) {
    var d = b.mode,
        e = b.pendingProps,
        f = K.current,
        g = !1,
        h;
    (h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
    h ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
    C(K, f & 1);

    if (null === a) {
      void 0 !== e.fallback && Xd(b);

      if (g) {
        g = e.fallback;
        e = ad(null, d, 0, null);
        e.return = b;
        if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) {
          a.return = e, a = a.sibling;
        }
        c = ad(g, d, c, null);
        c.return = b;
        e.sibling = c;
        b.memoizedState = me;
        b.child = e;
        return c;
      }

      d = e.children;
      b.memoizedState = null;
      return b.child = cd(b, null, d, c);
    }

    if (null !== a.memoizedState) {
      a = a.child;
      d = a.sibling;

      if (g) {
        e = e.fallback;
        c = Xc(a, a.pendingProps);
        c.return = b;
        if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) {
          g.return = c, g = g.sibling;
        }
        d = Xc(d, e);
        d.return = b;
        c.sibling = d;
        c.childExpirationTime = 0;
        b.memoizedState = me;
        b.child = c;
        return d;
      }

      c = bd(b, a.child, e.children, c);
      b.memoizedState = null;
      return b.child = c;
    }

    a = a.child;

    if (g) {
      g = e.fallback;
      e = ad(null, d, 0, null);
      e.return = b;
      e.child = a;
      null !== a && (a.return = e);
      if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) {
        a.return = e, a = a.sibling;
      }
      c = ad(g, d, c, null);
      c.return = b;
      e.sibling = c;
      c.effectTag |= 2;
      e.childExpirationTime = 0;
      b.memoizedState = me;
      b.child = e;
      return c;
    }

    b.memoizedState = null;
    return b.child = bd(b, a, e.children, c);
  }

  function oe(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    uc(a.return, b);
  }

  function pe(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailExpiration: 0,
      tailMode: e,
      lastEffect: f
    } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
  }

  function qe(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    R(a, b, d.children, c);
    d = K.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;else {
      if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && oe(a, c);else if (19 === a.tag) oe(a, c);else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    C(K, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === ld(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        pe(b, !1, e, c, f, b.lastEffect);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === ld(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        pe(b, !0, c, null, f, b.lastEffect);
        break;

      case "together":
        pe(b, !1, null, null, void 0, b.lastEffect);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function ce(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    var d = b.expirationTime;
    0 !== d && Gc(d);
    if (b.childExpirationTime < c) return null;
    if (null !== a && b.child !== a.child) throw Error(n(153));

    if (null !== b.child) {
      a = b.child;
      c = Xc(a, a.pendingProps);
      b.child = c;

      for (c.return = b; null !== a.sibling;) {
        a = a.sibling, c = c.sibling = Xc(a, a.pendingProps), c.return = b;
      }

      c.sibling = null;
    }

    return b.child;
  }

  function re(a) {
    a.effectTag |= 4;
  }

  var _se, te, ue, ve;

  if (Qa) _se = function se(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ga(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, te = function te() {}, ue = function ue(a, b, c, d, e) {
    a = a.memoizedProps;

    if (a !== d) {
      var f = b.stateNode,
          g = gd(J.current);
      c = Ia(f, c, a, d, e, g);
      (b.updateQueue = c) && re(b);
    }
  }, ve = function ve(a, b, c, d) {
    c !== d && re(b);
  };else if (Ra) {
    _se = function se(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = lb(f, e.type, e.memoizedProps, e));
          Ga(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = mb(f, e.memoizedProps, e)), Ga(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, _se(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    var we = function we(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = lb(f, e.type, e.memoizedProps, e));
          ib(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = mb(f, e.memoizedProps, e)), ib(a, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, we(a, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    te = function te(a) {
      var b = a.stateNode;

      if (null !== a.firstEffect) {
        var c = b.containerInfo,
            d = hb(c);
        we(d, a, !1, !1);
        b.pendingChildren = d;
        re(a);
        jb(c, d);
      }
    };

    ue = function ue(a, b, c, d, e) {
      var f = a.stateNode,
          g = a.memoizedProps;
      if ((a = null === b.firstEffect) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
            k = gd(J.current),
            l = null;
        g !== d && (l = Ia(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = gb(f, l, c, g, d, b, a, h), Ha(f, c, d, e, k) && re(b), b.stateNode = f, a ? re(b) : _se(f, b, !1, !1));
      }
    };

    ve = function ve(a, b, c, d) {
      c !== d ? (a = gd(fd.current), c = gd(J.current), b.stateNode = La(d, a, c, b), re(b)) : b.stateNode = a.stateNode;
    };
  } else te = function te() {}, ue = function ue() {}, ve = function ve() {};

  function xe(a, b) {
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function ye(a, b, c) {
    var d = b.pendingProps;

    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;

      case 1:
        return F(b.type) && Fb(), null;

      case 3:
        return id(), B(E), B(D), d = b.stateNode, d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), (null === a || null === a.child) && Zd(b) && re(b), te(b), null;

      case 5:
        kd(b);
        var e = gd(fd.current);
        c = b.type;
        if (null !== a && null != b.stateNode) ue(a, b, c, d, e), a.ref !== b.ref && (b.effectTag |= 128);else {
          if (!d) {
            if (null === b.stateNode) throw Error(n(166));
            return null;
          }

          a = gd(J.current);

          if (Zd(b)) {
            if (!Sa) throw Error(n(175));
            a = tb(b.stateNode, b.type, b.memoizedProps, e, a, b);
            b.updateQueue = a;
            null !== a && re(b);
          } else {
            var f = Fa(c, d, e, a, b);

            _se(f, b, !1, !1);

            b.stateNode = f;
            Ha(f, c, d, e, a) && re(b);
          }

          null !== b.ref && (b.effectTag |= 128);
        }
        return null;

      case 6:
        if (a && null != b.stateNode) ve(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(n(166));
          a = gd(fd.current);
          e = gd(J.current);

          if (Zd(b)) {
            if (!Sa) throw Error(n(176));
            ub(b.stateNode, b.memoizedProps, b) && re(b);
          } else b.stateNode = La(d, a, e, b);
        }
        return null;

      case 13:
        B(K);
        d = b.memoizedState;
        if (0 !== (b.effectTag & 64)) return b.expirationTime = c, b;
        d = null !== d;
        e = !1;
        null === a ? void 0 !== b.memoizedProps.fallback && Zd(b) : (c = a.memoizedState, e = null !== c, d || null === c || (c = a.child.sibling, null !== c && (f = b.firstEffect, null !== f ? (b.firstEffect = c, c.nextEffect = f) : (b.firstEffect = b.lastEffect = c, c.nextEffect = null), c.effectTag = 8)));
        if (d && !e && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (K.current & 1)) S === ze && (S = Ae);else {
          if (S === ze || S === Ae) S = Be;
          0 !== Ce && null !== T && (De(T, U), Ee(T, Ce));
        }
        Ra && d && (b.effectTag |= 4);
        Qa && (d || e) && (b.effectTag |= 4);
        return null;

      case 4:
        return id(), te(b), null;

      case 10:
        return tc(b), null;

      case 17:
        return F(b.type) && Fb(), null;

      case 19:
        B(K);
        d = b.memoizedState;
        if (null === d) return null;
        e = 0 !== (b.effectTag & 64);
        f = d.rendering;
        if (null === f) {
          if (e) xe(d, !1);else {
            if (S !== ze || null !== a && 0 !== (a.effectTag & 64)) for (a = b.child; null !== a;) {
              f = ld(a);

              if (null !== f) {
                b.effectTag |= 64;
                xe(d, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.effectTag |= 4);
                null === d.lastEffect && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                a = c;

                for (d = b.child; null !== d;) {
                  e = d, c = a, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, f = e.alternate, null === f ? (e.childExpirationTime = 0, e.expirationTime = c, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = f.childExpirationTime, e.expirationTime = f.expirationTime, e.child = f.child, e.memoizedProps = f.memoizedProps, e.memoizedState = f.memoizedState, e.updateQueue = f.updateQueue, c = f.dependencies, e.dependencies = null === c ? null : {
                    expirationTime: c.expirationTime,
                    firstContext: c.firstContext,
                    responders: c.responders
                  }), d = d.sibling;
                }

                C(K, K.current & 1 | 2);
                return b.child;
              }

              a = a.sibling;
            }
          }
        } else {
          if (!e) if (a = ld(f), null !== a) {
            if (b.effectTag |= 64, e = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.effectTag |= 4), xe(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
          } else 2 * G() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = !0, xe(d, !1), b.expirationTime = b.childExpirationTime = c - 1);
          d.isBackwards ? (f.sibling = b.child, b.child = f) : (a = d.last, null !== a ? a.sibling = f : b.child = f, d.last = f);
        }
        return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = G() + 500), a = d.tail, d.rendering = a, d.tail = a.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = G(), a.sibling = null, b = K.current, C(K, e ? b & 1 | 2 : b & 1), a) : null;
    }

    throw Error(n(156, b.tag));
  }

  function Fe(a) {
    switch (a.tag) {
      case 1:
        F(a.type) && Fb();
        var b = a.effectTag;
        return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

      case 3:
        id();
        B(E);
        B(D);
        b = a.effectTag;
        if (0 !== (b & 64)) throw Error(n(285));
        a.effectTag = b & -4097 | 64;
        return a;

      case 5:
        return kd(a), null;

      case 13:
        return B(K), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;

      case 19:
        return B(K), null;

      case 4:
        return id(), null;

      case 10:
        return tc(a), null;

      default:
        return null;
    }
  }

  function Ge(a, b) {
    return {
      value: a,
      source: b,
      stack: zb(b)
    };
  }

  var He = "function" === typeof WeakSet ? WeakSet : Set;

  function Ie(a, b) {
    var c = b.source,
        d = b.stack;
    null === d && null !== c && (d = zb(c));
    null !== c && ua(c.type);
    b = b.value;
    null !== a && 1 === a.tag && ua(a.type);

    try {
      console.error(b);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }

  function Je(a, b) {
    try {
      b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
    } catch (c) {
      Ke(a, c);
    }
  }

  function Le(a) {
    var b = a.ref;
    if (null !== b) if ("function" === typeof b) try {
      b(null);
    } catch (c) {
      Ke(a, c);
    } else b.current = null;
  }

  function Me(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;

      case 1:
        if (b.effectTag & 256 && null !== a) {
          var c = a.memoizedProps,
              d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : mc(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }

        return;

      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }

    throw Error(n(163));
  }

  function Ne(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;

    if (null !== b) {
      var c = b = b.next;

      do {
        if ((c.tag & a) === a) {
          var d = c.destroy;
          c.destroy = void 0;
          void 0 !== d && d();
        }

        c = c.next;
      } while (c !== b);
    }
  }

  function Oe(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;

    if (null !== b) {
      var c = b = b.next;

      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }

        c = c.next;
      } while (c !== b);
    }
  }

  function Pe(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        Oe(3, c);
        return;

      case 1:
        a = c.stateNode;
        if (c.effectTag & 4) if (null === b) a.componentDidMount();else {
          var d = c.elementType === c.type ? b.memoizedProps : mc(c.type, b.memoizedProps);
          a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
        }
        b = c.updateQueue;
        null !== b && Hc(c, b, a);
        return;

      case 3:
        b = c.updateQueue;

        if (null !== b) {
          a = null;
          if (null !== c.child) switch (c.child.tag) {
            case 5:
              a = Aa(c.child.stateNode);
              break;

            case 1:
              a = c.child.stateNode;
          }
          Hc(c, b, a);
        }

        return;

      case 5:
        a = c.stateNode;
        null === b && c.effectTag & 4 && Wa(a, c.type, c.memoizedProps, c);
        return;

      case 6:
        return;

      case 4:
        return;

      case 12:
        return;

      case 13:
        Sa && null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && xb(c))));
        return;

      case 19:
      case 17:
      case 20:
      case 21:
        return;
    }

    throw Error(n(163));
  }

  function Qe(a, b, c) {
    "function" === typeof Re && Re(b);

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;

        if (null !== a && (a = a.lastEffect, null !== a)) {
          var d = a.next;
          dc(97 < c ? 97 : c, function () {
            var a = d;

            do {
              var c = a.destroy;

              if (void 0 !== c) {
                var g = b;

                try {
                  c();
                } catch (h) {
                  Ke(g, h);
                }
              }

              a = a.next;
            } while (a !== d);
          });
        }

        break;

      case 1:
        Le(b);
        c = b.stateNode;
        "function" === typeof c.componentWillUnmount && Je(b, c);
        break;

      case 5:
        Le(b);
        break;

      case 4:
        Qa ? Se(a, b, c) : Ra && Te(b);
    }
  }

  function Ue(a, b, c) {
    for (var d = b;;) {
      if (Qe(a, d, c), null === d.child || Qa && 4 === d.tag) {
        if (d === b) break;

        for (; null === d.sibling;) {
          if (null === d.return || d.return === b) return;
          d = d.return;
        }

        d.sibling.return = d.return;
        d = d.sibling;
      } else d.child.return = d, d = d.child;
    }
  }

  function Ve(a) {
    var b = a.alternate;
    a.return = null;
    a.child = null;
    a.memoizedState = null;
    a.updateQueue = null;
    a.dependencies = null;
    a.alternate = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.pendingProps = null;
    a.memoizedProps = null;
    a.stateNode = null;
    null !== b && Ve(b);
  }

  function Te(a) {
    if (Ra) {
      a = a.stateNode.containerInfo;
      var b = hb(a);
      kb(a, b);
    }
  }

  function We(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function Xe(a) {
    if (Qa) {
      a: {
        for (var b = a.return; null !== b;) {
          if (We(b)) {
            var c = b;
            break a;
          }

          b = b.return;
        }

        throw Error(n(160));
      }

      b = c.stateNode;

      switch (c.tag) {
        case 5:
          var d = !1;
          break;

        case 3:
          b = b.containerInfo;
          d = !0;
          break;

        case 4:
          b = b.containerInfo;
          d = !0;
          break;

        default:
          throw Error(n(161));
      }

      c.effectTag & 16 && (bb(b), c.effectTag &= -17);

      a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c.return || We(c.return)) {
            c = null;
            break a;
          }

          c = c.return;
        }

        c.sibling.return = c.return;

        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.effectTag & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }

        if (!(c.effectTag & 2)) {
          c = c.stateNode;
          break a;
        }
      }

      d ? Ye(a, c, b) : Ze(a, c, b);
    }
  }

  function Ye(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? Za(c, a, b) : Ua(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Ye(a, b, c), a = a.sibling; null !== a;) {
      Ye(a, b, c), a = a.sibling;
    }
  }

  function Ze(a, b, c) {
    var d = a.tag,
        e = 5 === d || 6 === d;
    if (e) a = e ? a.stateNode : a.stateNode.instance, b ? Ya(c, a, b) : Ta(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Ze(a, b, c), a = a.sibling; null !== a;) {
      Ze(a, b, c), a = a.sibling;
    }
  }

  function Se(a, b, c) {
    for (var d = b, e = !1, f, g;;) {
      if (!e) {
        e = d.return;

        a: for (;;) {
          if (null === e) throw Error(n(160));
          f = e.stateNode;

          switch (e.tag) {
            case 5:
              g = !1;
              break a;

            case 3:
              f = f.containerInfo;
              g = !0;
              break a;

            case 4:
              f = f.containerInfo;
              g = !0;
              break a;
          }

          e = e.return;
        }

        e = !0;
      }

      if (5 === d.tag || 6 === d.tag) Ue(a, d, c), g ? ab(f, d.stateNode) : $a(f, d.stateNode);else if (4 === d.tag) {
        if (null !== d.child) {
          f = d.stateNode.containerInfo;
          g = !0;
          d.child.return = d;
          d = d.child;
          continue;
        }
      } else if (Qe(a, d, c), null !== d.child) {
        d.child.return = d;
        d = d.child;
        continue;
      }
      if (d === b) break;

      for (; null === d.sibling;) {
        if (null === d.return || d.return === b) return;
        d = d.return;
        4 === d.tag && (e = !1);
      }

      d.sibling.return = d.return;
      d = d.sibling;
    }
  }

  function $e(a, b) {
    if (Qa) {
      switch (b.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          Ne(3, b);
          return;

        case 1:
          return;

        case 5:
          var c = b.stateNode;

          if (null != c) {
            var d = b.memoizedProps;
            a = null !== a ? a.memoizedProps : d;
            var e = b.type,
                f = b.updateQueue;
            b.updateQueue = null;
            null !== f && Xa(c, f, e, a, d, b);
          }

          return;

        case 6:
          if (null === b.stateNode) throw Error(n(162));
          c = b.memoizedProps;
          Va(b.stateNode, null !== a ? a.memoizedProps : c, c);
          return;

        case 3:
          Sa && (b = b.stateNode, b.hydrate && (b.hydrate = !1, wb(b.containerInfo)));
          return;

        case 12:
          return;

        case 13:
          af(b);
          bf(b);
          return;

        case 19:
          bf(b);
          return;

        case 17:
          return;
      }

      throw Error(n(163));
    }

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        Ne(3, b);
        return;

      case 12:
        return;

      case 13:
        af(b);
        bf(b);
        return;

      case 19:
        bf(b);
        return;

      case 3:
        Sa && (c = b.stateNode, c.hydrate && (c.hydrate = !1, wb(c.containerInfo)));
    }

    a: if (Ra) {
      switch (b.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break a;

        case 3:
        case 4:
          b = b.stateNode;
          kb(b.containerInfo, b.pendingChildren);
          break a;
      }

      throw Error(n(163));
    }
  }

  function af(a) {
    var b = a;
    if (null === a.memoizedState) var c = !1;else c = !0, b = a.child, cf = G();
    if (Qa && null !== b) a: if (a = b, Qa) for (b = a;;) {
      if (5 === b.tag) {
        var d = b.stateNode;
        c ? cb(d) : eb(b.stateNode, b.memoizedProps);
      } else if (6 === b.tag) d = b.stateNode, c ? db(d) : fb(d, b.memoizedProps);else if (13 === b.tag && null !== b.memoizedState && null === b.memoizedState.dehydrated) {
        d = b.child.sibling;
        d.return = b;
        b = d;
        continue;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }

      if (b === a) break a;

      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) break a;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }
  }

  function bf(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new He());
      b.forEach(function (b) {
        var d = df.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  var ef = "function" === typeof WeakMap ? WeakMap : Map;

  function ff(a, b, c) {
    c = Ac(c, null);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      gf || (gf = !0, hf = d);
      Ie(a, b);
    };

    return c;
  }

  function jf(a, b, c) {
    c = Ac(c, null);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        Ie(a, b);
        return d(e);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === kf ? kf = new Set([this]) : kf.add(this), Ie(a, b));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  var lf = Math.ceil,
      mf = p.ReactCurrentDispatcher,
      nf = p.ReactCurrentOwner,
      V = 0,
      of = 8,
      pf = 16,
      qf = 32,
      ze = 0,
      rf = 1,
      sf = 2,
      Ae = 3,
      Be = 4,
      tf = 5,
      W = V,
      T = null,
      X = null,
      U = 0,
      S = ze,
      uf = null,
      vf = 1073741823,
      wf = 1073741823,
      xf = null,
      Ce = 0,
      yf = !1,
      cf = 0,
      zf = 500,
      Y = null,
      gf = !1,
      hf = null,
      kf = null,
      Af = !1,
      Bf = null,
      Cf = 90,
      Df = null,
      Ef = 0,
      Ff = null,
      Gf = 0;

  function Lc() {
    return (W & (pf | qf)) !== V ? 1073741821 - (G() / 10 | 0) : 0 !== Gf ? Gf : Gf = 1073741821 - (G() / 10 | 0);
  }

  function Mc(a, b, c) {
    b = b.mode;
    if (0 === (b & 2)) return 1073741823;
    var d = bc();
    if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
    if ((W & pf) !== V) return U;
    if (null !== c) a = hc(a, c.timeoutMs | 0 || 5E3, 250);else switch (d) {
      case 99:
        a = 1073741823;
        break;

      case 98:
        a = hc(a, 150, 100);
        break;

      case 97:
      case 96:
        a = hc(a, 5E3, 250);
        break;

      case 95:
        a = 2;
        break;

      default:
        throw Error(n(326));
    }
    null !== T && a === U && --a;
    return a;
  }

  function Nc(a, b) {
    if (50 < Ef) throw Ef = 0, Ff = null, Error(n(185));
    a = Hf(a, b);

    if (null !== a) {
      var c = bc();
      1073741823 === b ? (W & of) !== V && (W & (pf | qf)) === V ? If(a) : (Z(a), W === V && H()) : Z(a);
      (W & 4) === V || 98 !== c && 99 !== c || (null === Df ? Df = new Map([[a, b]]) : (c = Df.get(a), (void 0 === c || c > b) && Df.set(a, b)));
    }
  }

  function Hf(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    null !== c && c.expirationTime < b && (c.expirationTime = b);
    var d = a.return,
        e = null;
    if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
      c = d.alternate;
      d.childExpirationTime < b && (d.childExpirationTime = b);
      null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

      if (null === d.return && 3 === d.tag) {
        e = d.stateNode;
        break;
      }

      d = d.return;
    }
    null !== e && (T === e && (Gc(b), S === Be && De(e, U)), Ee(e, b));
    return e;
  }

  function Jf(a) {
    var b = a.lastExpiredTime;
    if (0 !== b) return b;
    b = a.firstPendingTime;
    if (!Kf(a, b)) return b;
    var c = a.lastPingedTime;
    a = a.nextKnownPendingLevel;
    a = c > a ? c : a;
    return 2 >= a && b !== a ? 0 : a;
  }

  function Z(a) {
    if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = fc(If.bind(null, a));else {
      var b = Jf(a),
          c = a.callbackNode;
      if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);else {
        var d = Lc();
        1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);

        if (null !== c) {
          var e = a.callbackPriority;
          if (a.callbackExpirationTime === b && e >= d) return;
          c !== Vb && Mb(c);
        }

        a.callbackExpirationTime = b;
        a.callbackPriority = d;
        b = 1073741823 === b ? fc(If.bind(null, a)) : ec(d, Lf.bind(null, a), {
          timeout: 10 * (1073741821 - b) - G()
        });
        a.callbackNode = b;
      }
    }
  }

  function Lf(a, b) {
    Gf = 0;
    if (b) return b = Lc(), Mf(a, b), Z(a), null;
    var c = Jf(a);

    if (0 !== c) {
      b = a.callbackNode;
      if ((W & (pf | qf)) !== V) throw Error(n(327));
      Nf();
      a === T && c === U || Of(a, c);

      if (null !== X) {
        var d = W;
        W |= pf;
        var e = Pf();

        do {
          try {
            Qf();
            break;
          } catch (h) {
            Rf(a, h);
          }
        } while (1);

        rc();
        W = d;
        mf.current = e;
        if (S === rf) throw b = uf, Of(a, c), De(a, c), Z(a), b;
        if (null === X) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
          case ze:
          case rf:
            throw Error(n(345));

          case sf:
            Mf(a, 2 < c ? 2 : c);
            break;

          case Ae:
            De(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = Sf(e));

            if (1073741823 === vf && (e = cf + zf - G(), 10 < e)) {
              if (yf) {
                var f = a.lastPingedTime;

                if (0 === f || f >= c) {
                  a.lastPingedTime = c;
                  Of(a, c);
                  break;
                }
              }

              f = Jf(a);
              if (0 !== f && f !== c) break;

              if (0 !== d && d !== c) {
                a.lastPingedTime = d;
                break;
              }

              a.timeoutHandle = Ma(Tf.bind(null, a), e);
              break;
            }

            Tf(a);
            break;

          case Be:
            De(a, c);
            d = a.lastSuspendedTime;
            c === d && (a.nextKnownPendingLevel = Sf(e));

            if (yf && (e = a.lastPingedTime, 0 === e || e >= c)) {
              a.lastPingedTime = c;
              Of(a, c);
              break;
            }

            e = Jf(a);
            if (0 !== e && e !== c) break;

            if (0 !== d && d !== c) {
              a.lastPingedTime = d;
              break;
            }

            1073741823 !== wf ? d = 10 * (1073741821 - wf) - G() : 1073741823 === vf ? d = 0 : (d = 10 * (1073741821 - vf) - 5E3, e = G(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * lf(d / 1960)) - d, c < d && (d = c));

            if (10 < d) {
              a.timeoutHandle = Ma(Tf.bind(null, a), d);
              break;
            }

            Tf(a);
            break;

          case tf:
            if (1073741823 !== vf && null !== xf) {
              f = vf;
              var g = xf;
              d = g.busyMinDurationMs | 0;
              0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = G() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);

              if (10 < d) {
                De(a, c);
                a.timeoutHandle = Ma(Tf.bind(null, a), d);
                break;
              }
            }

            Tf(a);
            break;

          default:
            throw Error(n(329));
        }
        Z(a);
        if (a.callbackNode === b) return Lf.bind(null, a);
      }
    }

    return null;
  }

  function If(a) {
    var b = a.lastExpiredTime;
    b = 0 !== b ? b : 1073741823;
    if ((W & (pf | qf)) !== V) throw Error(n(327));
    Nf();
    a === T && b === U || Of(a, b);

    if (null !== X) {
      var c = W;
      W |= pf;
      var d = Pf();

      do {
        try {
          Uf();
          break;
        } catch (e) {
          Rf(a, e);
        }
      } while (1);

      rc();
      W = c;
      mf.current = d;
      if (S === rf) throw c = uf, Of(a, b), De(a, b), Z(a), c;
      if (null !== X) throw Error(n(261));
      a.finishedWork = a.current.alternate;
      a.finishedExpirationTime = b;
      T = null;
      Tf(a);
      Z(a);
    }

    return null;
  }

  function Vf(a, b) {
    Mf(a, b);
    Z(a);
    (W & (pf | qf)) === V && H();
  }

  function Wf() {
    if (null !== Df) {
      var a = Df;
      Df = null;
      a.forEach(function (a, c) {
        Mf(c, a);
        Z(c);
      });
      H();
    }
  }

  function Xf(a, b) {
    var c = W;
    W |= 1;

    try {
      return a(b);
    } finally {
      W = c, W === V && H();
    }
  }

  function Yf(a, b) {
    if ((W & (pf | qf)) !== V) throw Error(n(187));
    var c = W;
    W |= 1;

    try {
      return dc(99, a.bind(null, b));
    } finally {
      W = c, H();
    }
  }

  function Of(a, b) {
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    var c = a.timeoutHandle;
    c !== Oa && (a.timeoutHandle = Oa, Na(c));
    if (null !== X) for (c = X.return; null !== c;) {
      var d = c;

      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && Fb();
          break;

        case 3:
          id();
          B(E);
          B(D);
          break;

        case 5:
          kd(d);
          break;

        case 4:
          id();
          break;

        case 13:
          B(K);
          break;

        case 19:
          B(K);
          break;

        case 10:
          tc(d);
      }

      c = c.return;
    }
    T = a;
    X = Xc(a.current, null);
    U = b;
    S = ze;
    uf = null;
    wf = vf = 1073741823;
    xf = null;
    Ce = 0;
    yf = !1;
  }

  function Rf(a, b) {
    do {
      try {
        rc();
        nd.current = vd;
        if (pd) for (var c = M.memoizedState; null !== c;) {
          var d = c.queue;
          null !== d && (d.pending = null);
          c = c.next;
        }
        od = 0;
        O = N = M = null;
        pd = !1;
        if (null === X || null === X.return) return S = rf, uf = b, X = null;

        a: {
          var e = a,
              f = X.return,
              g = X,
              h = b;
          b = U;
          g.effectTag |= 2048;
          g.firstEffect = g.lastEffect = null;

          if (null !== h && "object" === _typeof(h) && "function" === typeof h.then) {
            var k = h;

            if (0 === (g.mode & 2)) {
              var l = g.alternate;
              l ? (g.updateQueue = l.updateQueue, g.memoizedState = l.memoizedState, g.expirationTime = l.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
            }

            var q = 0 !== (K.current & 1),
                r = f;

            do {
              var w;

              if (w = 13 === r.tag) {
                var z = r.memoizedState;
                if (null !== z) w = null !== z.dehydrated ? !0 : !1;else {
                  var Q = r.memoizedProps;
                  w = void 0 === Q.fallback ? !1 : !0 !== Q.unstable_avoidThisFallback ? !0 : q ? !1 : !0;
                }
              }

              if (w) {
                var A = r.updateQueue;

                if (null === A) {
                  var v = new Set();
                  v.add(k);
                  r.updateQueue = v;
                } else A.add(k);

                if (0 === (r.mode & 2)) {
                  r.effectTag |= 64;
                  g.effectTag &= -2981;
                  if (1 === g.tag) if (null === g.alternate) g.tag = 17;else {
                    var t = Ac(1073741823, null);
                    t.tag = 2;
                    Bc(g, t);
                  }
                  g.expirationTime = 1073741823;
                  break a;
                }

                h = void 0;
                g = b;
                var x = e.pingCache;
                null === x ? (x = e.pingCache = new ef(), h = new Set(), x.set(k, h)) : (h = x.get(k), void 0 === h && (h = new Set(), x.set(k, h)));

                if (!h.has(g)) {
                  h.add(g);
                  var ke = cg.bind(null, e, k, g);
                  k.then(ke, ke);
                }

                r.effectTag |= 4096;
                r.expirationTime = b;
                break a;
              }

              r = r.return;
            } while (null !== r);

            h = Error((ua(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + zb(g));
          }

          S !== tf && (S = sf);
          h = Ge(h, g);
          r = f;

          do {
            switch (r.tag) {
              case 3:
                k = h;
                r.effectTag |= 4096;
                r.expirationTime = b;
                var Zf = ff(r, k, b);
                Cc(r, Zf);
                break a;

              case 1:
                k = h;
                var $f = r.type,
                    Fc = r.stateNode;

                if (0 === (r.effectTag & 64) && ("function" === typeof $f.getDerivedStateFromError || null !== Fc && "function" === typeof Fc.componentDidCatch && (null === kf || !kf.has(Fc)))) {
                  r.effectTag |= 4096;
                  r.expirationTime = b;
                  var ag = jf(r, k, b);
                  Cc(r, ag);
                  break a;
                }

            }

            r = r.return;
          } while (null !== r);
        }

        X = dg(X);
      } catch (bg) {
        b = bg;
        continue;
      }

      break;
    } while (1);
  }

  function Pf() {
    var a = mf.current;
    mf.current = vd;
    return null === a ? vd : a;
  }

  function Ec(a, b) {
    a < vf && 2 < a && (vf = a);
    null !== b && a < wf && 2 < a && (wf = a, xf = b);
  }

  function Gc(a) {
    a > Ce && (Ce = a);
  }

  function Uf() {
    for (; null !== X;) {
      X = eg(X);
    }
  }

  function Qf() {
    for (; null !== X && !Wb();) {
      X = eg(X);
    }
  }

  function eg(a) {
    var b = fg(a.alternate, a, U);
    a.memoizedProps = a.pendingProps;
    null === b && (b = dg(a));
    nf.current = null;
    return b;
  }

  function dg(a) {
    X = a;

    do {
      var b = X.alternate;
      a = X.return;

      if (0 === (X.effectTag & 2048)) {
        b = ye(b, X, U);

        if (1 === U || 1 !== X.childExpirationTime) {
          for (var c = 0, d = X.child; null !== d;) {
            var e = d.expirationTime,
                f = d.childExpirationTime;
            e > c && (c = e);
            f > c && (c = f);
            d = d.sibling;
          }

          X.childExpirationTime = c;
        }

        if (null !== b) return b;
        null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = X.firstEffect), null !== X.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
      } else {
        b = Fe(X);
        if (null !== b) return b.effectTag &= 2047, b;
        null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
      }

      b = X.sibling;
      if (null !== b) return b;
      X = a;
    } while (null !== X);

    S === ze && (S = tf);
    return null;
  }

  function Sf(a) {
    var b = a.expirationTime;
    a = a.childExpirationTime;
    return b > a ? b : a;
  }

  function Tf(a) {
    var b = bc();
    dc(99, gg.bind(null, a, b));
    return null;
  }

  function gg(a, b) {
    do {
      Nf();
    } while (null !== Bf);

    if ((W & (pf | qf)) !== V) throw Error(n(327));
    var c = a.finishedWork,
        d = a.finishedExpirationTime;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    if (c === a.current) throw Error(n(177));
    a.callbackNode = null;
    a.callbackExpirationTime = 0;
    a.callbackPriority = 90;
    a.nextKnownPendingLevel = 0;
    var e = Sf(c);
    a.firstPendingTime = e;
    d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
    d <= a.lastPingedTime && (a.lastPingedTime = 0);
    d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
    a === T && (X = T = null, U = 0);
    1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;

    if (null !== e) {
      var f = W;
      W |= qf;
      nf.current = null;
      Da(a.containerInfo);
      Y = e;

      do {
        try {
          hg();
        } catch (t) {
          if (null === Y) throw Error(n(330));
          Ke(Y, t);
          Y = Y.nextEffect;
        }
      } while (null !== Y);

      Y = e;

      do {
        try {
          for (var g = a, h = b; null !== Y;) {
            var k = Y.effectTag;
            k & 16 && Qa && bb(Y.stateNode);

            if (k & 128) {
              var l = Y.alternate;

              if (null !== l) {
                var q = l.ref;
                null !== q && ("function" === typeof q ? q(null) : q.current = null);
              }
            }

            switch (k & 1038) {
              case 2:
                Xe(Y);
                Y.effectTag &= -3;
                break;

              case 6:
                Xe(Y);
                Y.effectTag &= -3;
                $e(Y.alternate, Y);
                break;

              case 1024:
                Y.effectTag &= -1025;
                break;

              case 1028:
                Y.effectTag &= -1025;
                $e(Y.alternate, Y);
                break;

              case 4:
                $e(Y.alternate, Y);
                break;

              case 8:
                var r = g,
                    w = Y,
                    z = h;
                Qa ? Se(r, w, z) : Ue(r, w, z);
                Ve(w);
            }

            Y = Y.nextEffect;
          }
        } catch (t) {
          if (null === Y) throw Error(n(330));
          Ke(Y, t);
          Y = Y.nextEffect;
        }
      } while (null !== Y);

      Ea(a.containerInfo);
      a.current = c;
      Y = e;

      do {
        try {
          for (k = a; null !== Y;) {
            var Q = Y.effectTag;
            Q & 36 && Pe(k, Y.alternate, Y);

            if (Q & 128) {
              l = void 0;
              var A = Y.ref;

              if (null !== A) {
                var v = Y.stateNode;

                switch (Y.tag) {
                  case 5:
                    l = Aa(v);
                    break;

                  default:
                    l = v;
                }

                "function" === typeof A ? A(l) : A.current = l;
              }
            }

            Y = Y.nextEffect;
          }
        } catch (t) {
          if (null === Y) throw Error(n(330));
          Ke(Y, t);
          Y = Y.nextEffect;
        }
      } while (null !== Y);

      Y = null;
      Xb();
      W = f;
    } else a.current = c;

    if (Af) Af = !1, Bf = a, Cf = b;else for (Y = e; null !== Y;) {
      b = Y.nextEffect, Y.nextEffect = null, Y = b;
    }
    b = a.firstPendingTime;
    0 === b && (kf = null);
    1073741823 === b ? a === Ff ? Ef++ : (Ef = 0, Ff = a) : Ef = 0;
    "function" === typeof ig && ig(c.stateNode, d);
    Z(a);
    if (gf) throw gf = !1, a = hf, hf = null, a;
    if ((W & of) !== V) return null;
    H();
    return null;
  }

  function hg() {
    for (; null !== Y;) {
      var a = Y.effectTag;
      0 !== (a & 256) && Me(Y.alternate, Y);
      0 === (a & 512) || Af || (Af = !0, ec(97, function () {
        Nf();
        return null;
      }));
      Y = Y.nextEffect;
    }
  }

  function Nf() {
    if (90 !== Cf) {
      var a = 97 < Cf ? 97 : Cf;
      Cf = 90;
      return dc(a, jg);
    }
  }

  function jg() {
    if (null === Bf) return !1;
    var a = Bf;
    Bf = null;
    if ((W & (pf | qf)) !== V) throw Error(n(331));
    var b = W;
    W |= qf;

    for (a = a.current.firstEffect; null !== a;) {
      try {
        var c = a;
        if (0 !== (c.effectTag & 512)) switch (c.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            Ne(5, c), Oe(5, c);
        }
      } catch (d) {
        if (null === a) throw Error(n(330));
        Ke(a, d);
      }

      c = a.nextEffect;
      a.nextEffect = null;
      a = c;
    }

    W = b;
    H();
    return !0;
  }

  function kg(a, b, c) {
    b = Ge(c, b);
    b = ff(a, b, 1073741823);
    Bc(a, b);
    a = Hf(a, 1073741823);
    null !== a && Z(a);
  }

  function Ke(a, b) {
    if (3 === a.tag) kg(a, a, b);else for (var c = a.return; null !== c;) {
      if (3 === c.tag) {
        kg(c, a, b);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === kf || !kf.has(d))) {
          a = Ge(b, a);
          a = jf(c, a, 1073741823);
          Bc(c, a);
          c = Hf(c, 1073741823);
          null !== c && Z(c);
          break;
        }
      }

      c = c.return;
    }
  }

  function cg(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    T === a && U === c ? S === Be || S === Ae && 1073741823 === vf && G() - cf < zf ? Of(a, U) : yf = !0 : Kf(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, Z(a)));
  }

  function df(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b && (b = Lc(), b = Mc(b, a, null));
    a = Hf(a, b);
    null !== a && Z(a);
  }

  var fg;

  fg = function fg(a, b, c) {
    var d = b.expirationTime;

    if (null !== a) {
      var e = b.pendingProps;
      if (a.memoizedProps !== e || E.current) wc = !0;else {
        if (d < c) {
          wc = !1;

          switch (b.tag) {
            case 3:
              le(b);
              $d();
              break;

            case 5:
              jd(b);
              if (b.mode & 4 && 1 !== c && Ka(b.type, e)) return b.expirationTime = b.childExpirationTime = 1, null;
              break;

            case 1:
              F(b.type) && Ib(b);
              break;

            case 4:
              hd(b, b.stateNode.containerInfo);
              break;

            case 10:
              sc(b, b.memoizedProps.value);
              break;

            case 13:
              if (null !== b.memoizedState) {
                d = b.child.childExpirationTime;
                if (0 !== d && d >= c) return ne(a, b, c);
                C(K, K.current & 1);
                b = ce(a, b, c);
                return null !== b ? b.sibling : null;
              }

              C(K, K.current & 1);
              break;

            case 19:
              d = b.childExpirationTime >= c;

              if (0 !== (a.effectTag & 64)) {
                if (d) return qe(a, b, c);
                b.effectTag |= 64;
              }

              e = b.memoizedState;
              null !== e && (e.rendering = null, e.tail = null);
              C(K, K.current);
              if (!d) return null;
          }

          return ce(a, b, c);
        }

        wc = !1;
      }
    } else wc = !1;

    b.expirationTime = 0;

    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        e = Eb(b, D.current);
        vc(b, c);
        e = rd(null, b, d, a, e, c);
        b.effectTag |= 1;

        if ("object" === _typeof(e) && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;

          if (F(d)) {
            var f = !0;
            Ib(b);
          } else f = !1;

          b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          yc(b);
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && Kc(b, d, g, a);
          e.updater = Oc;
          b.stateNode = e;
          e._reactInternalFiber = b;
          Sc(b, d, a, c);
          b = je(null, b, d, !0, f, c);
        } else b.tag = 0, R(null, b, e, c), b = b.child;

        return b;

      case 16:
        a: {
          e = b.elementType;
          null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
          a = b.pendingProps;
          ta(e);
          if (1 !== e._status) throw e._result;
          e = e._result;
          b.type = e;
          f = b.tag = lg(e);
          a = mc(e, a);

          switch (f) {
            case 0:
              b = ge(null, b, e, a, c);
              break a;

            case 1:
              b = ie(null, b, e, a, c);
              break a;

            case 11:
              b = be(null, b, e, a, c);
              break a;

            case 14:
              b = de(null, b, e, mc(e.type, a), d, c);
              break a;
          }

          throw Error(n(306, e, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mc(d, e), ge(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mc(d, e), ie(a, b, d, e, c);

      case 3:
        le(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(n(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        zc(a, b);
        Dc(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) $d(), b = ce(a, b, c);else {
          if (e = b.stateNode.hydrate) Sa ? (Sd = sb(b.stateNode.containerInfo), Rd = b, e = Td = !0) : e = !1;
          if (e) for (c = cd(b, null, d, c), b.child = c; c;) {
            c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
          } else R(a, b, d, c), $d();
          b = b.child;
        }
        return b;

      case 5:
        return jd(b), null === a && Xd(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ja(d, e) ? g = null : null !== f && Ja(d, f) && (b.effectTag |= 16), he(a, b), b.mode & 4 && 1 !== c && Ka(d, e) ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;

      case 6:
        return null === a && Xd(b), null;

      case 13:
        return ne(a, b, c);

      case 4:
        return hd(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = bd(b, null, d, c) : R(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mc(d, e), be(a, b, d, e, c);

      case 7:
        return R(a, b, b.pendingProps, c), b.child;

      case 8:
        return R(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return R(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          sc(b, f);

          if (null !== g) {
            var h = g.value;
            f = jc(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

            if (0 === f) {
              if (g.children === e.children && !E.current) {
                b = ce(a, b, c);
                break a;
              }
            } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
              var k = h.dependencies;

              if (null !== k) {
                g = h.child;

                for (var l = k.firstContext; null !== l;) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = Ac(c, null), l.tag = 2, Bc(h, l));
                    h.expirationTime < c && (h.expirationTime = c);
                    l = h.alternate;
                    null !== l && l.expirationTime < c && (l.expirationTime = c);
                    uc(h.return, c);
                    k.expirationTime < c && (k.expirationTime = c);
                    break;
                  }

                  l = l.next;
                }
              } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

              if (null !== g) g.return = h;else for (g = h; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }

                h = g.sibling;

                if (null !== h) {
                  h.return = g.return;
                  g = h;
                  break;
                }

                g = g.return;
              }
              h = g;
            }
          }

          R(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, vc(b, c), e = I(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;

      case 14:
        return e = b.type, f = mc(e, b.pendingProps), f = mc(e.type, f), de(a, b, e, f, d, c);

      case 15:
        return fe(a, b, b.type, b.pendingProps, d, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : mc(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, F(d) ? (a = !0, Ib(b)) : a = !1, vc(b, c), Qc(b, d, e), Sc(b, d, e, c), je(null, b, d, !0, a, c);

      case 19:
        return qe(a, b, c);
    }

    throw Error(n(156, b.tag));
  };

  var mg = {
    current: !1
  },
      ig = null,
      Re = null;

  function ng(a) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
    var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (b.isDisabled || !b.supportsFiber) return !0;

    try {
      var c = b.inject(a);

      ig = function ig(a) {
        try {
          b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
        } catch (e) {}
      };

      Re = function Re(a) {
        try {
          b.onCommitFiberUnmount(c, a);
        } catch (e) {}
      };
    } catch (d) {}

    return !0;
  }

  function og(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.effectTag = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childExpirationTime = this.expirationTime = 0;
    this.alternate = null;
  }

  function Vd(a, b, c, d) {
    return new og(a, b, c, d);
  }

  function ee(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function lg(a) {
    if ("function" === typeof a) return ee(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === la) return 11;
      if (a === oa) return 14;
    }

    return 2;
  }

  function Xc(a, b) {
    var c = a.alternate;
    null === c ? (c = Vd(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childExpirationTime = a.childExpirationTime;
    c.expirationTime = a.expirationTime;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      expirationTime: b.expirationTime,
      firstContext: b.firstContext,
      responders: b.responders
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function Zc(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) ee(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ea:
        return ad(c.children, e, f, b);

      case ka:
        g = 8;
        e |= 7;
        break;

      case fa:
        g = 8;
        e |= 1;
        break;

      case ha:
        return a = Vd(12, c, b, e | 8), a.elementType = ha, a.type = ha, a.expirationTime = f, a;

      case ma:
        return a = Vd(13, c, b, e), a.type = ma, a.elementType = ma, a.expirationTime = f, a;

      case na:
        return a = Vd(19, c, b, e), a.elementType = na, a.expirationTime = f, a;

      default:
        if ("object" === _typeof(a) && null !== a) switch (a.$$typeof) {
          case ia:
            g = 10;
            break a;

          case ja:
            g = 9;
            break a;

          case la:
            g = 11;
            break a;

          case oa:
            g = 14;
            break a;

          case pa:
            g = 16;
            d = null;
            break a;

          case qa:
            g = 22;
            break a;
        }
        throw Error(n(130, null == a ? a : _typeof(a), ""));
    }
    b = Vd(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.expirationTime = f;
    return b;
  }

  function ad(a, b, c, d) {
    a = Vd(7, a, d, b);
    a.expirationTime = c;
    return a;
  }

  function Yc(a, b, c) {
    a = Vd(6, a, null, b);
    a.expirationTime = c;
    return a;
  }

  function $c(a, b, c) {
    b = Vd(4, null !== a.children ? a.children : [], a.key, b);
    b.expirationTime = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function pg(a, b, c) {
    this.tag = b;
    this.current = null;
    this.containerInfo = a;
    this.pingCache = this.pendingChildren = null;
    this.finishedExpirationTime = 0;
    this.finishedWork = null;
    this.timeoutHandle = Oa;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 90;
    this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }

  function Kf(a, b) {
    var c = a.firstSuspendedTime;
    a = a.lastSuspendedTime;
    return 0 !== c && c >= b && a <= b;
  }

  function De(a, b) {
    var c = a.firstSuspendedTime,
        d = a.lastSuspendedTime;
    c < b && (a.firstSuspendedTime = b);
    if (d > b || 0 === c) a.lastSuspendedTime = b;
    b <= a.lastPingedTime && (a.lastPingedTime = 0);
    b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  }

  function Ee(a, b) {
    b > a.firstPendingTime && (a.firstPendingTime = b);
    var c = a.firstSuspendedTime;
    0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
  }

  function Mf(a, b) {
    var c = a.lastExpiredTime;
    if (0 === c || c > b) a.lastExpiredTime = b;
  }

  var qg = null;

  function rg(a) {
    if (null === qg) try {
      var b = ("require" + Math.random()).slice(0, 7);
      qg = (module && module[b])("timers").setImmediate;
    } catch (c) {
      qg = function qg(a) {
        var b = new MessageChannel();
        b.port1.onmessage = a;
        b.port2.postMessage(void 0);
      };
    }
    return qg(a);
  }

  function sg(a) {
    var b = a._reactInternalFiber;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(n(188));
      throw Error(n(268, Object.keys(a)));
    }

    a = ya(b);
    return null === a ? null : a.stateNode;
  }

  function tg(a, b) {
    a = a.memoizedState;
    null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
  }

  function ug(a, b) {
    tg(a, b);
    (a = a.alternate) && tg(a, b);
  }

  var vg = p.IsSomeRendererActing,
      wg = "function" === typeof m.unstable_flushAllWithoutAsserting,
      xg = m.unstable_flushAllWithoutAsserting || function () {
    for (var a = !1; Nf();) {
      a = !0;
    }

    return a;
  };

  function yg(a) {
    try {
      xg(), rg(function () {
        xg() ? yg(a) : a();
      });
    } catch (b) {
      a(b);
    }
  }

  var zg = 0,
      Ag = !1,
      Bg = {
    __proto__: null,
    createContainer: function createContainer(a, b, c) {
      a = new pg(a, b, c);
      b = Vd(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
      a.current = b;
      b.stateNode = a;
      yc(b);
      return a;
    },
    updateContainer: function updateContainer(a, b, c, d) {
      var e = b.current,
          f = Lc(),
          g = Ic.suspense;
      f = Mc(f, e, g);

      a: if (c) {
        c = c._reactInternalFiber;

        b: {
          if (va(c) !== c || 1 !== c.tag) throw Error(n(170));
          var h = c;

          do {
            switch (h.tag) {
              case 3:
                h = h.stateNode.context;
                break b;

              case 1:
                if (F(h.type)) {
                  h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                  break b;
                }

            }

            h = h.return;
          } while (null !== h);

          throw Error(n(171));
        }

        if (1 === c.tag) {
          var k = c.type;

          if (F(k)) {
            c = Hb(c, k, h);
            break a;
          }
        }

        c = h;
      } else c = Cb;

      null === b.context ? b.context = c : b.pendingContext = c;
      b = Ac(f, g);
      b.payload = {
        element: a
      };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      Bc(e, b);
      Nc(e, f);
      return f;
    },
    batchedEventUpdates: function batchedEventUpdates(a, b) {
      var c = W;
      W |= 2;

      try {
        return a(b);
      } finally {
        W = c, W === V && H();
      }
    },
    batchedUpdates: Xf,
    unbatchedUpdates: function unbatchedUpdates(a, b) {
      var c = W;
      W &= -2;
      W |= of;

      try {
        return a(b);
      } finally {
        W = c, W === V && H();
      }
    },
    deferredUpdates: function deferredUpdates(a) {
      return dc(97, a);
    },
    syncUpdates: function syncUpdates(a, b, c, d) {
      return dc(99, a.bind(null, b, c, d));
    },
    discreteUpdates: function discreteUpdates(a, b, c, d, e) {
      var f = W;
      W |= 4;

      try {
        return dc(98, a.bind(null, b, c, d, e));
      } finally {
        W = f, W === V && H();
      }
    },
    flushDiscreteUpdates: function flushDiscreteUpdates() {
      (W & (1 | pf | qf)) === V && (Wf(), Nf());
    },
    flushControlled: function flushControlled(a) {
      var b = W;
      W |= 1;

      try {
        dc(99, a);
      } finally {
        W = b, W === V && H();
      }
    },
    flushSync: Yf,
    flushPassiveEffects: Nf,
    IsThisRendererActing: mg,
    getPublicRootInstance: function getPublicRootInstance(a) {
      a = a.current;
      if (!a.child) return null;

      switch (a.child.tag) {
        case 5:
          return Aa(a.child.stateNode);

        default:
          return a.child.stateNode;
      }
    },
    attemptSynchronousHydration: function attemptSynchronousHydration(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          b.hydrate && Vf(b, b.firstPendingTime);
          break;

        case 13:
          Yf(function () {
            return Nc(a, 1073741823);
          }), b = hc(Lc(), 150, 100), ug(a, b);
      }
    },
    attemptUserBlockingHydration: function attemptUserBlockingHydration(a) {
      if (13 === a.tag) {
        var b = hc(Lc(), 150, 100);
        Nc(a, b);
        ug(a, b);
      }
    },
    attemptContinuousHydration: function attemptContinuousHydration(a) {
      13 === a.tag && (Nc(a, 3), ug(a, 3));
    },
    attemptHydrationAtCurrentPriority: function attemptHydrationAtCurrentPriority(a) {
      if (13 === a.tag) {
        var b = Lc();
        b = Mc(b, a, null);
        Nc(a, b);
        ug(a, b);
      }
    },
    findHostInstance: sg,
    findHostInstanceWithWarning: function findHostInstanceWithWarning(a) {
      return sg(a);
    },
    findHostInstanceWithNoPortals: function findHostInstanceWithNoPortals(a) {
      a = za(a);
      return null === a ? null : 20 === a.tag ? a.stateNode.instance : a.stateNode;
    },
    shouldSuspend: function shouldSuspend() {
      return !1;
    },
    injectIntoDevTools: function injectIntoDevTools(a) {
      var b = a.findFiberByHostInstance;
      return ng(aa({}, a, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: p.ReactCurrentDispatcher,
        findHostInstanceByFiber: function findHostInstanceByFiber(a) {
          a = ya(a);
          return null === a ? null : a.stateNode;
        },
        findFiberByHostInstance: function findFiberByHostInstance(a) {
          return b ? b(a) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
      }));
    },
    act: function act(a) {
      function b() {
        zg--;
        vg.current = c;
        mg.current = d;
      }

      !1 === Ag && (Ag = !0, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
      zg++;
      var c = vg.current;
      var d = mg.current;
      vg.current = !0;
      mg.current = !0;

      try {
        var e = Xf(a);
      } catch (f) {
        throw b(), f;
      }

      if (null !== e && "object" === _typeof(e) && "function" === typeof e.then) return {
        then: function then(a, d) {
          e.then(function () {
            1 < zg || !0 === wg && !0 === c ? (b(), a()) : yg(function (c) {
              b();
              c ? d(c) : a();
            });
          }, function (a) {
            b();
            d(a);
          });
        }
      };

      try {
        1 !== zg || !1 !== wg && !1 !== c || xg(), b();
      } catch (f) {
        throw b(), f;
      }

      return {
        then: function then(a) {
          a();
        }
      };
    }
  },
      Cg = Bg && Bg["default"] || Bg;
  module.exports = Cg.default || Cg;
  var $$$renderer = module.exports;
  module.exports = $$$reconciler;
  return $$$renderer;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.46.0@webpack/buildin/module.js */ "./node_modules/_webpack@4.46.0@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! exports used: jsx, jsxs */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js");

var f = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js"),
    g = 60103;

exports.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  exports.Fragment = h("react.fragment");
}

var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) {
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_react@17.0.2@react/cjs/react.production.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js");

var l = __webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js"),
    n = 60103,
    p = 60106;

exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var q = 60109,
    r = 60110,
    t = 60112;
exports.Suspense = 60113;
var u = 60115,
    v = 60116;

if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  exports.Fragment = w("react.fragment");
  exports.StrictMode = w("react.strict_mode");
  exports.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  exports.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}

var x = "function" === typeof Symbol && Symbol.iterator;

function y(a) {
  if (null === a || "object" !== _typeof(a)) return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var A = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    B = {};

function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

C.prototype.isReactComponent = {};

C.prototype.setState = function (a, b) {
  if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function D() {}

D.prototype = C.prototype;

function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = !0;
var G = {
  current: null
},
    H = Object.prototype.hasOwnProperty,
    I = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function J(a, b, c) {
  var e,
      d = {},
      k = null,
      h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) {
    H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  }
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) {
      f[m] = arguments[m + 2];
    }

    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) {
    void 0 === d[e] && (d[e] = g[e]);
  }
  return {
    $$typeof: n,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: G.current
  };
}

function K(a, b) {
  return {
    $$typeof: n,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function L(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === n;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var M = /\/+/g;

function N(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function O(a, b, c, e, d) {
  var k = _typeof(a);

  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case n:
        case p:
          h = !0;
      }

  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
    return a;
  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + N(k, g);
    h += O(k, b, c, f, d);
  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) {
    k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);
  } else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}

function P(a, b, c) {
  if (null == a) return a;
  var e = [],
      d = 0;
  O(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}

function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }

  if (1 === a._status) return a._result;
  throw a._result;
}

var R = {
  current: null
};

function S() {
  var a = R.current;
  if (null === a) throw Error(z(321));
  return a;
}

var T = {
  ReactCurrentDispatcher: R,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: P,
  forEach: function forEach(a, b, c) {
    P(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function count(a) {
    var b = 0;
    P(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return P(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!L(a)) throw Error(z(143));
    return a;
  }
};
exports.Component = C;
exports.PureComponent = E;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z(267, a));
  var e = l({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) {
      H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
  }

  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) {
      g[m] = arguments[m + 2];
    }

    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: r,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = J;

exports.createFactory = function (a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: t,
    render: a
  };
};

exports.isValidElement = L;

exports.lazy = function (a) {
  return {
    $$typeof: v,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: Q
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return S().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return S().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return S().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return S().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return S().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return S().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return S().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return S().useRef(a);
};

exports.useState = function (a) {
  return S().useState(a);
};

exports.version = "17.0.2";

/***/ }),

/***/ "./node_modules/_scheduler@0.17.0@scheduler/cjs/scheduler.production.min.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_scheduler@0.17.0@scheduler/cjs/scheduler.production.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! exports used: unstable_cancelCallback, unstable_now, unstable_scheduleCallback */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/** @license React v0.17.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _f, g, h, k, l;

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
      q = null,
      t = function t() {
    if (null !== p) try {
      var a = exports.unstable_now();
      p(!0, a);
      p = null;
    } catch (b) {
      throw setTimeout(t, 0), b;
    }
  },
      u = Date.now();

  exports.unstable_now = function () {
    return Date.now() - u;
  };

  _f = function f(a) {
    null !== p ? setTimeout(_f, 0, a) : (p = a, setTimeout(t, 0));
  };

  g = function g(a, b) {
    q = setTimeout(a, b);
  };

  h = function h() {
    clearTimeout(q);
  };

  k = function k() {
    return !1;
  };

  l = exports.unstable_forceFrameRate = function () {};
} else {
  var w = window.performance,
      x = window.Date,
      y = window.setTimeout,
      z = window.clearTimeout,
      A = window.requestAnimationFrame,
      B = window.cancelAnimationFrame;
  "undefined" !== typeof console && ("function" !== typeof A && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof B && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  if ("object" === _typeof(w) && "function" === typeof w.now) exports.unstable_now = function () {
    return w.now();
  };else {
    var C = x.now();

    exports.unstable_now = function () {
      return x.now() - C;
    };
  }
  var D = !1,
      E = null,
      F = -1,
      G = 5,
      H = 0;

  k = function k() {
    return exports.unstable_now() >= H;
  };

  l = function l() {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : G = 0 < a ? Math.floor(1E3 / a) : 33.33;
  };

  var I = new MessageChannel(),
      J = I.port2;

  I.port1.onmessage = function () {
    if (null !== E) {
      var a = exports.unstable_now();
      H = a + G;

      try {
        E(!0, a) ? J.postMessage(null) : (D = !1, E = null);
      } catch (b) {
        throw J.postMessage(null), b;
      }
    } else D = !1;
  };

  _f = function _f(a) {
    E = a;
    D || (D = !0, J.postMessage(null));
  };

  g = function g(a, b) {
    F = y(function () {
      a(exports.unstable_now());
    }, b);
  };

  h = function h() {
    z(F);
    F = -1;
  };
}

function K(a, b) {
  var c = a.length;
  a.push(b);

  a: for (;;) {
    var d = Math.floor((c - 1) / 2),
        e = a[d];
    if (void 0 !== e && 0 < L(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function M(a) {
  a = a[0];
  return void 0 === a ? null : a;
}

function N(a) {
  var b = a[0];

  if (void 0 !== b) {
    var c = a.pop();

    if (c !== b) {
      a[0] = c;

      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
            n = a[m],
            v = m + 1,
            r = a[v];
        if (void 0 !== n && 0 > L(n, c)) void 0 !== r && 0 > L(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > L(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }

    return b;
  }

  return null;
}

function L(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

var O = [],
    P = [],
    Q = 1,
    R = null,
    S = 3,
    T = !1,
    U = !1,
    V = !1;

function W(a) {
  for (var b = M(P); null !== b;) {
    if (null === b.callback) N(P);else if (b.startTime <= a) N(P), b.sortIndex = b.expirationTime, K(O, b);else break;
    b = M(P);
  }
}

function X(a) {
  V = !1;
  W(a);
  if (!U) if (null !== M(O)) U = !0, _f(Y);else {
    var b = M(P);
    null !== b && g(X, b.startTime - a);
  }
}

function Y(a, b) {
  U = !1;
  V && (V = !1, h());
  T = !0;
  var c = S;

  try {
    W(b);

    for (R = M(O); null !== R && (!(R.expirationTime > b) || a && !k());) {
      var d = R.callback;

      if (null !== d) {
        R.callback = null;
        S = R.priorityLevel;
        var e = d(R.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? R.callback = e : R === M(O) && N(O);
        W(b);
      } else N(O);

      R = M(O);
    }

    if (null !== R) var m = !0;else {
      var n = M(P);
      null !== n && g(X, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    R = null, S = c, T = !1;
  }
}

function Z(a) {
  switch (a) {
    case 1:
      return -1;

    case 2:
      return 250;

    case 5:
      return 1073741823;

    case 4:
      return 1E4;

    default:
      return 5E3;
  }
}

var aa = l;
exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = S;
  S = a;

  try {
    return b();
  } finally {
    S = c;
  }
};

exports.unstable_next = function (a) {
  switch (S) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = S;
  }

  var c = S;
  S = b;

  try {
    return a();
  } finally {
    S = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();

  if ("object" === _typeof(c) && null !== c) {
    var e = c.delay;
    e = "number" === typeof e && 0 < e ? d + e : d;
    c = "number" === typeof c.timeout ? c.timeout : Z(a);
  } else c = Z(a), e = d;

  c = e + c;
  a = {
    id: Q++,
    callback: b,
    priorityLevel: a,
    startTime: e,
    expirationTime: c,
    sortIndex: -1
  };
  e > d ? (a.sortIndex = e, K(P, a), null === M(O) && a === M(P) && (V ? h() : V = !0, g(X, e - d))) : (a.sortIndex = c, K(O, a), U || T || (U = !0, _f(Y)));
  return a;
};

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_wrapCallback = function (a) {
  var b = S;
  return function () {
    var c = S;
    S = b;

    try {
      return a.apply(this, arguments);
    } finally {
      S = c;
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return S;
};

exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  W(a);
  var b = M(O);
  return b !== R && null !== R && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < R.expirationTime || k();
};

exports.unstable_requestPaint = aa;

exports.unstable_continueExecution = function () {
  U || T || (U = !0, _f(Y));
};

exports.unstable_pauseExecution = function () {};

exports.unstable_getFirstCallbackNode = function () {
  return M(O);
};

exports.unstable_Profiling = null;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/_scheduler@0.19.1@scheduler/cjs/scheduler.production.min.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_scheduler@0.19.1@scheduler/cjs/scheduler.production.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js");

var _f, g, h, k, l;

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
      q = null,
      t = function t() {
    if (null !== p) try {
      var a = exports.unstable_now();
      p(!0, a);
      p = null;
    } catch (b) {
      throw setTimeout(t, 0), b;
    }
  },
      u = Date.now();

  exports.unstable_now = function () {
    return Date.now() - u;
  };

  _f = function f(a) {
    null !== p ? setTimeout(_f, 0, a) : (p = a, setTimeout(t, 0));
  };

  g = function g(a, b) {
    q = setTimeout(a, b);
  };

  h = function h() {
    clearTimeout(q);
  };

  k = function k() {
    return !1;
  };

  l = exports.unstable_forceFrameRate = function () {};
} else {
  var w = window.performance,
      x = window.Date,
      y = window.setTimeout,
      z = window.clearTimeout;

  if ("undefined" !== typeof console) {
    var A = window.cancelAnimationFrame;
    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    "function" !== typeof A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
  }

  if ("object" === _typeof(w) && "function" === typeof w.now) exports.unstable_now = function () {
    return w.now();
  };else {
    var B = x.now();

    exports.unstable_now = function () {
      return x.now() - B;
    };
  }
  var C = !1,
      D = null,
      E = -1,
      F = 5,
      G = 0;

  k = function k() {
    return exports.unstable_now() >= G;
  };

  l = function l() {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F = 0 < a ? Math.floor(1E3 / a) : 5;
  };

  var H = new MessageChannel(),
      I = H.port2;

  H.port1.onmessage = function () {
    if (null !== D) {
      var a = exports.unstable_now();
      G = a + F;

      try {
        D(!0, a) ? I.postMessage(null) : (C = !1, D = null);
      } catch (b) {
        throw I.postMessage(null), b;
      }
    } else C = !1;
  };

  _f = function _f(a) {
    D = a;
    C || (C = !0, I.postMessage(null));
  };

  g = function g(a, b) {
    E = y(function () {
      a(exports.unstable_now());
    }, b);
  };

  h = function h() {
    z(E);
    E = -1;
  };
}

function J(a, b) {
  var c = a.length;
  a.push(b);

  a: for (;;) {
    var d = c - 1 >>> 1,
        e = a[d];
    if (void 0 !== e && 0 < K(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function L(a) {
  a = a[0];
  return void 0 === a ? null : a;
}

function M(a) {
  var b = a[0];

  if (void 0 !== b) {
    var c = a.pop();

    if (c !== b) {
      a[0] = c;

      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
            n = a[m],
            v = m + 1,
            r = a[v];
        if (void 0 !== n && 0 > K(n, c)) void 0 !== r && 0 > K(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > K(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }

    return b;
  }

  return null;
}

function K(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

var N = [],
    O = [],
    P = 1,
    Q = null,
    R = 3,
    S = !1,
    T = !1,
    U = !1;

function V(a) {
  for (var b = L(O); null !== b;) {
    if (null === b.callback) M(O);else if (b.startTime <= a) M(O), b.sortIndex = b.expirationTime, J(N, b);else break;
    b = L(O);
  }
}

function W(a) {
  U = !1;
  V(a);
  if (!T) if (null !== L(N)) T = !0, _f(X);else {
    var b = L(O);
    null !== b && g(W, b.startTime - a);
  }
}

function X(a, b) {
  T = !1;
  U && (U = !1, h());
  S = !0;
  var c = R;

  try {
    V(b);

    for (Q = L(N); null !== Q && (!(Q.expirationTime > b) || a && !k());) {
      var d = Q.callback;

      if (null !== d) {
        Q.callback = null;
        R = Q.priorityLevel;
        var e = d(Q.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? Q.callback = e : Q === L(N) && M(N);
        V(b);
      } else M(N);

      Q = L(N);
    }

    if (null !== Q) var m = !0;else {
      var n = L(O);
      null !== n && g(W, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    Q = null, R = c, S = !1;
  }
}

function Y(a) {
  switch (a) {
    case 1:
      return -1;

    case 2:
      return 250;

    case 5:
      return 1073741823;

    case 4:
      return 1E4;

    default:
      return 5E3;
  }
}

var Z = l;
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_continueExecution = function () {
  T || S || (T = !0, _f(X));
};

exports.unstable_getCurrentPriorityLevel = function () {
  return R;
};

exports.unstable_getFirstCallbackNode = function () {
  return L(N);
};

exports.unstable_next = function (a) {
  switch (R) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = R;
  }

  var c = R;
  R = b;

  try {
    return a();
  } finally {
    R = c;
  }
};

exports.unstable_pauseExecution = function () {};

exports.unstable_requestPaint = Z;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = R;
  R = a;

  try {
    return b();
  } finally {
    R = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();

  if ("object" === _typeof(c) && null !== c) {
    var e = c.delay;
    e = "number" === typeof e && 0 < e ? d + e : d;
    c = "number" === typeof c.timeout ? c.timeout : Y(a);
  } else c = Y(a), e = d;

  c = e + c;
  a = {
    id: P++,
    callback: b,
    priorityLevel: a,
    startTime: e,
    expirationTime: c,
    sortIndex: -1
  };
  e > d ? (a.sortIndex = e, J(O, a), null === L(N) && a === L(O) && (U ? h() : U = !0, g(W, e - d))) : (a.sortIndex = c, J(N, a), T || S || (T = !0, _f(X)));
  return a;
};

exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  V(a);
  var b = L(N);
  return b !== Q && null !== Q && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < Q.expirationTime || k();
};

exports.unstable_wrapCallback = function (a) {
  var b = R;
  return function () {
    var c = R;
    R = b;

    try {
      return a.apply(this, arguments);
    } finally {
      R = c;
    }
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/typeof.js");

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/_webpack@4.46.0@webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

}]);
//# sourceMappingURL=vendors.js.map