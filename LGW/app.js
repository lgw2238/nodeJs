var createError = require('http-errors');
var express = require('express');
var path = require('path');
const ejsLint = require ( 'ejs-lint' ) ;
// Express 미들웨어 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var errorHandler = require('errorhandler');
var logger = require('morgan');
var helmet = require('helmet');

// Express 기본 모듈
var crypto = require('crypto');
var static = require('serve-static');

// 오류 핸들러 모듈 사용
// var expressErrorHandler = require('express-error-handler');
// Session 미들웨어 불러오기
//var expressSession = require('express-session');

//http 모듈을 가져온다.
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// MONGODB CONNECTED
const MongoClient = require('mongodb').MongoClient;
// 데이터베이스 객체를 위한 변수 선언
var database;
// MONGODB CONNECTED STEP2
function connectDB() {
  // 데이터베이스 연결 정보
  var databaseUrl = 'mongodb://localhost:27017/local';
  
  // 데이터베이스 연결
  MongoClient.connect(databaseUrl, {useNewUrlParser : true}, function(err, client) {
      if (err) throw err;
      
      console.log('데이터베이스에 연결되었습니다. : ' + databaseUrl);
      
      // database 변수에 할당
      database = client.db('local');
      console.log("database :" , database);
  });
}

// const maria = require("./config/mysql");
// maria.connect();
// app.use(expressSession({
//   secret: 'my key',
//   resave: true,
//   saveUninitialized: true
//   }));
// 라우터 객체 참조
var router = express.Router();

// module
var index = require('./routers/index');
var users = require('./routers/users');
var about = require('./routers/about');
var join = require('./routers/join');
//var main = require('./routers/main');

var app = express();
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('common'));
//app.use(helmet());
app.use(express.json());
//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));
//body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));
console.log('aplication start');
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// page module
app.use('/', index);
//app.use('/router', router);
app.use('/users', users);
app.use('/about', about);
app.use('/join', join);
//app.use('/main', main);

//#Server 구동
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('============================');
     console.log('★Server running★');
  console.log(`http://${hostname}:${port}/`);
  console.log('============================');
  connectDB();
});

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
