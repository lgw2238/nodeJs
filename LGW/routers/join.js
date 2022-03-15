var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET join page. */
router.get('/', function(req, res, next) {
  res.render('join', { title: 'join' });
  console.log('GET 회원가입 HOMEPAGE');
});

module.exports = router;

