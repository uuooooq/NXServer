var express = require('express');
var router = express.Router();
var path=require('path');
//var recordDao = require('../db/recordDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  //res.json(recordDao.findAllRecord());
});

module.exports = router;
