var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var logger = require('morgan');
var mdbConn = require('../config/mariaDB');
/* GET home page. */
/* localhost:3000 주소로 접속 시 작동되는 라우터 */
router.get('/', function (req, res, next) {
  mdbConn.getUserList()
    .then((rows) => { res.json(rows) }) // 쿼리 결과가 JSON 형태로 출력됨
    .catch((err) => { console.error(err); });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("GET HOME PAGE !");
  
});

router.use(logger());
module.exports = router;

