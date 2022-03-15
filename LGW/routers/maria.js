var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var mdbConn = require('../config/mariaDB');

router.get('/', function (req, res, next) {
  mdbConn.getUserList()
    .then((rows) => { res.json(rows) }) // 쿼리 결과가 JSON 형태로 출력됨
    .catch((err) => { console.error(err); });
});

module.exports = router;
