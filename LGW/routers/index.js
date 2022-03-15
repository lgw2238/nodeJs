var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var logger = require('morgan');

/* get home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("GET HOME PAGE !");
  
});
/* POST home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log("GET HOME PAGE !");
  
});

router.use(logger());
module.exports = router;

