
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlinfo = require('../db/mysql');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//   //res.json(recordDao.findAllRecord());
// });

router.get('/', function(req, res, next) {

  results = [];
  var conn = mysql.createConnection(mysqlinfo.mysql);      //创建一个连接        mysql是我们上面文件暴露出来的模板的方法
  conn.connect();

  conn.query('select  * from user', function(err, rows, fields) {
        if (err) throw err;
        //console.log('The solution is: ', rows);
        res.json(rows);
  });
  
  conn.end();
});

module.exports = router;
