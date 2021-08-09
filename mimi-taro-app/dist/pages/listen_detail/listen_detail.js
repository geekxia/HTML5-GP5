(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/listen_detail/listen_detail"],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/listen_detail/listen_detail.jsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./src/pages/listen_detail/listen_detail.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/_@babel_runtime@7.13.17@@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/_@tarojs_plugin-platform-weapp@3.2.4@@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.2.4@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/_react@17.0.2@react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/api */ "./src/utils/api.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components */ "./src/components/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/pages/listen_detail/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/_react@17.0.2@react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var BookInfo = function BookInfo(props) {
  var info = props.info;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
    className: "info",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "c"], {
      src: 'http://localhost:8888' + info.img
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
      className: "desc",
      children: info.desc
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
      className: "name",
      children: info.book_name
    })]
  });
};

var CommentRow = function CommentRow(props) {
  var comment = props.comment;
  console.log('comment', comment);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
    className: "comment-row",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
      className: "left",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "c"], {
        src: comment.avatar
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
      className: "right",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "o"], {
          children: comment.nick_name || 'gp5'
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "o"], {
          children: comment.comment_time
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
        children: comment.content
      })]
    })]
  });
};

var StarRow = function StarRow(props) {
  var star = props.star;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
    className: "star-row",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "c"], {
      src: star.avatar
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "o"], {
      children: star.nick_name
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      book = _useState2[0],
      setBook = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      commentList = _useState4[0],
      setCommentList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      actived = _useState6[0],
      setActived = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState8 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      count = _useState8[0],
      setCount = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    id: 0,
    label: '评论',
    count: 0,
    height: 140
  }, {
    id: 1,
    label: '点赞',
    count: 0,
    height: 100
  }]),
      _useState10 = Object(D_GP5_mimi_taro_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState9, 2),
      tabArr = _useState10[0],
      setTabArr = _useState10[1];

  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var id = router.params.id;
    Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[/* fetchBookDetail */ "d"])({
      bookid: id
    }).then(function (res) {
      setBook(res.book);
      setCommentList(res.commentList);
    });
  }, [count]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // 动态修改tabArr中的count字段
    var newTabArr = JSON.parse(JSON.stringify(tabArr));
    newTabArr[0].count = commentList.length;
    newTabArr[1].count = book.star_list ? book.star_list.length : 0;
    setTabArr(newTabArr);
  }, [book, commentList]);

  var activedHandle = function activedHandle() {
    setActived(true);
  }; // 提交评论接口


  var submitHandle = function submitHandle(e) {
    // 激活状态点击发表评论
    console.log('评论内容', e); // 提交接口成功后

    var data = {
      bookid: router.params.id,
      content: e
    };
    Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[/* fetchAddComment */ "b"])(data).then(function () {
      setActived(false);
      setCount(count + 1);
    });
  }; // 提交点赞接口


  var starHandle = function starHandle() {
    // 在非激活状态下点赞
    // 提交接口
    if (!book.is_star) {
      var id = router.params.id;
      Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[/* fetchAddStar */ "c"])({
        bookid: id
      }).then(function () {
        setCount(count + 1);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
    className: "qf-listen-detail",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(BookInfo, {
      info: book
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_5__[/* QfAudio */ "a"], {
      data: book
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_components__WEBPACK_IMPORTED_MODULE_5__[/* QfTabSwiper */ "h"], {
      tabArr: tabArr,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
        children: commentList.map(function (ele) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(CommentRow, {
            comment: ele
          }, ele._id);
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "q"], {
        children: book.star_list && book.star_list.map(function (ele) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(StarRow, {
            star: ele
          }, ele._id);
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_5__[/* QfCommentBar */ "c"], {
      actived: actived,
      commentCount: commentList.length,
      isStar: book.is_star,
      starCount: book.star_list ? book.star_list.length : 0,
      onActived: activedHandle,
      onSubmit: function onSubmit(e) {
        return submitHandle(e);
      },
      onAgree: starHandle
    })]
  });
});

/***/ }),

/***/ "./src/pages/listen_detail/listen_detail.jsx":
/*!***************************************************!*\
  !*** ./src/pages/listen_detail/listen_detail.jsx ***!
  \***************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.2.4@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_listen_detail_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_babel-loader@8.0.6@babel-loader/lib!./listen_detail.jsx */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js!./src/pages/listen_detail/listen_detail.jsx");


var config = {"navigationBarTitleText":"详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_listen_detail_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/listen_detail/listen_detail', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/listen_detail/style.scss":
/*!********************************************!*\
  !*** ./src/pages/listen_detail/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/listen_detail/listen_detail.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=listen_detail.js.map