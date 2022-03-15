var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'about' });
  console.log('GET ABOUT PAGE');
});

module.exports = router;