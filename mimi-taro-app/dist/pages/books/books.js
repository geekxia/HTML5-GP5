(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/books/books"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/books/books.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/books/books.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.4@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.4@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/pages/books/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components */ "./src/components/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    id: 0,
    cate: '',
    c_zh: '??????'
  }, {
    id: 1,
    cate: 'story',
    c_zh: '????????????'
  }, {
    id: 2,
    cate: 'films',
    c_zh: '????????????'
  }, {
    id: 3,
    cate: 'emotion',
    c_zh: '????????????'
  }, {
    id: 4,
    cate: 'suspense',
    c_zh: '????????????'
  }, {
    id: 5,
    cate: 'fantasy',
    c_zh: '????????????'
  }, {
    id: 6,
    cate: 'science',
    c_zh: '????????????'
  }, {
    id: 7,
    cate: 'money',
    c_zh: '????????????'
  }]),
      _useState2 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      cates = _useState2[0],
      setCates = _useState2[1]; // loaded???????????????????????????????????????????????????????????????res.total??????


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      loaded = _useState4[0],
      setLoaded = _useState4[1]; // list????????????????????????


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState6 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1]; // ??????????????????????????????flag???flase??????????????????ScrollView????????????????????????fixed?????????


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState8 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState7, 2),
      flag = _useState8[0],
      setFlag = _useState8[1]; // filter?????????????????????????????????filter???????????????useEffect?????????


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    page: 1,
    cate: '',
    size: 2
  }),
      _useState10 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState9, 2),
      filter = _useState10[0],
      setFilter = _useState10[1]; // ??????????????????page=1??????list????????????list???????????????????????????


  var init = function init() {
    if (!loaded) {
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_7__[/* fetchBookList */ "e"])(filter).then(function (res) {
        console.log('????????????', res); // ?????????page???????????????????????????list???????????????????????????
        // ?????????????????????????????????????????????????????????list

        var newList = [];

        if (filter.page === 1) {
          newList = res.list;
        } else {
          newList = [].concat(Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list), Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(res.list));
        }

        setLoaded(res.total === newList.length);
        setList(newList);
      });
    }
  }; // ????????????????????????????????????????????????


  var reset = function reset() {
    setList([]);
    setLoaded(false);
  }; // ???????????????????????????????????????


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    init();
  }, [filter]); // ??????1???????????????

  var cateChange = function cateChange(e) {
    console.log('e', e);
    var newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.cate = e.cate;
    newFilter.page = 1;
    setFilter(newFilter);
    reset();
  }; // ??????2???????????????


  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useReachBottom"])(function () {
    console.log('?????????');

    if (!loaded) {
      var newFilter = JSON.parse(JSON.stringify(filter));
      newFilter.page++;
      setFilter(newFilter);
    }
  }); // ??????3?????????????????????????????????

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["usePageScroll"])(function (res) {
    // console.log('scrollTop', res.scrollTop)
    setFlag(res.scrollTop >= 190);
  }); // ????????????

  var renderBookList = function renderBookList() {
    return list.map(function (ele) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
        className: "row",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
          className: "left",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "c"], {
            src: 'http://localhost:8888' + ele.img
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
          className: "right",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
            className: "book",
            children: ele.book_name
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
            className: "author",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "o"], {
              children: [ele.author, " | \u63A8\u8350\u503C ", ele.recommended_value, "%"]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
            className: "desc",
            children: ele.desc
          })]
        })]
      }, ele._id);
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
    className: "qf-books",
    style: {
      paddingTop: flag ? '180rpx' : '100rpx'
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
      className: "fixed-search",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_6__[/* QfSearch */ "g"], {
        disabled: true
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_6__[/* QfBookCard */ "b"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "q"], {
      className: "fixed-scroll",
      style: {
        position: flag ? 'fixed' : 'static'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_6__[/* QfScrollView */ "f"], {
        data: cates,
        value: filter.cate,
        valueName: "cate",
        label: "c_zh",
        onChange: function onChange(e) {
          return cateChange(e);
        }
      })
    }), renderBookList(), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_6__[/* QfNoData */ "e"], {
      show: loaded
    })]
  });
});

/***/ }),

/***/ "./src/pages/books/books.jsx":
/*!***********************************!*\
  !*** ./src/pages/books/books.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_books_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./books.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/books/books.jsx");


var config = {"navigationBarTitleText":"??????","enablePullDownRefresh":false};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_books_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/books/books', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/books/style.scss":
/*!************************************!*\
  !*** ./src/pages/books/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/books/books.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=books.js.map