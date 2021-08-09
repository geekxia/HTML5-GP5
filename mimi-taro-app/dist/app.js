require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/app.jsx":
/*!*************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/app.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.4@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/_mobx-react@6.3.1@mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/api */ "./src/utils/api.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);








 // console.log('app page store', store)




var App = /*#__PURE__*/function (_Component) {
  Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "onLaunch",
    value: // 小程序启动的入口
    function onLaunch() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.login().then(function (res) {
        console.log('登录', res);
        Object(_utils_api__WEBPACK_IMPORTED_MODULE_8__[/* fetchLogin */ "g"])({
          code: res.code
        }).then(function (res) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.setStorage({
            key: 'token',
            data: res.token
          }); // 小程序启动后获取用户信息

          _store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].userStore.getUserInfo();
        });
      });
    } // this.props.children 就是要渲染的页面

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(mobx_react__WEBPACK_IMPORTED_MODULE_6__[/* Provider */ "a"], {
        store: _store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
        children: this.props.children
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.4@@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/_babel-loader@8.0.6@babel-loader/lib!./app.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/app.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/_@tarojs_react@3.2.4@@tarojs/react/dist/react.esm.js");








var config = {"pages":["pages/test/test","pages/listen/listen","pages/books/books","pages/listen_detail/listen_detail","pages/welfare/welfare","pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"color":"#aaaaaa","selectedColor":"#ff0000","list":[{"pagePath":"pages/welfare/welfare","text":"福利","iconPath":"assets/tabbar/welfare.png","selectedIconPath":"assets/tabbar/welfare-on.png"},{"pagePath":"pages/books/books","text":"书城","iconPath":"assets/tabbar/book.png","selectedIconPath":"assets/tabbar/book-on.png"},{"pagePath":"pages/listen/listen","text":"听书","iconPath":"assets/tabbar/listen.png","selectedIconPath":"assets/tabbar/listen-on.png"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_app_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_3__, react_dom__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], config))



/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counter */ "./src/store/modules/counter.js");
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/user */ "./src/store/modules/user.js");
/* harmony import */ var _modules_act__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/act */ "./src/store/modules/act.js");



/* harmony default export */ __webpack_exports__["a"] = ({
  counterStore: _modules_counter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  userStore: _modules_user__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  actStore: _modules_act__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
});

/***/ }),

/***/ "./src/store/modules/act.js":
/*!**********************************!*\
  !*** ./src/store/modules/act.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.4@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  list: [],
  getActList: function getActList(params) {
    var _this = this;

    Object(_utils_api__WEBPACK_IMPORTED_MODULE_1__[/* fetchActList */ "a"])({}).then(function (res) {
      console.log('活动列表', res);
      _this.list = res.list;
    });
  }
}));

/***/ }),

/***/ "./src/store/modules/counter.js":
/*!**************************************!*\
  !*** ./src/store/modules/counter.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");

var counterStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  counter: 0,
  counterStore: function counterStore() {
    this.counter++;
  },
  increment: function increment() {
    this.counter++;
  },
  decrement: function decrement() {
    this.counter--;
  },
  incrementAsync: function incrementAsync() {
    var _this = this;

    setTimeout(function () {
      _this.counter++;
    }, 1000);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (counterStore);

/***/ }),

/***/ "./src/store/modules/user.js":
/*!***********************************!*\
  !*** ./src/store/modules/user.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/_mobx@4.15.7@mobx/lib/mobx.module.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/api */ "./src/utils/api.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.4@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



var userStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  userInfo: {},
  // 获取用户信息的action
  getUserInfo: function getUserInfo() {
    var _this = this;

    Object(_utils_api__WEBPACK_IMPORTED_MODULE_1__[/* fetchUserInfo */ "i"])().then(function (res) {
      console.log('用户信息', res.userInfo);
      _this.userInfo = res.userInfo;
    });
  },
  // 修改用户信息的action
  updateUserInfo: function updateUserInfo(data) {
    var _this2 = this;

    console.log('mobx user data', data);
    Object(_utils_api__WEBPACK_IMPORTED_MODULE_1__[/* fetchUpdUserInfo */ "h"])(data).then(function () {
      _this2.getUserInfo();
    });
  }
});
/* harmony default export */ __webpack_exports__["a"] = (userStore);

/***/ })

},[["./src/app.jsx","runtime","taro","vendors","common"]]]);;
//# sourceMappingURL=app.js.map