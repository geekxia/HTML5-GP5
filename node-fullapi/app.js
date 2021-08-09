var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon')

var app = express()
// 连接数据库
require('./utils/connect')
// 连接socket服务
// require('./utils/io')

// 设置模块引擎，支持MVC
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// json格式的转化
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cookie解析
app.use(cookieParser());
// 静态资源服务
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')));

// 动态资源服务
const v = '/api/v1'
app.use('/', require('./routes/index'))
app.use(`${v}/user`, require('./routes/users'))
app.use(`${v}/good`, require('./routes/good'))
app.use(`${v}/cart`, require('./routes/cart'))
app.use(`${v}/upload`, require('./routes/upload'))
app.use(`${v}/role`, require('./routes/role'))



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
