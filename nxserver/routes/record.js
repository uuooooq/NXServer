var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlinfo = require('../db/mysql');

router.get('/', function(req, res, next) {

  results = [];
  var conn = mysql.createConnection(mysqlinfo.mysql);      //创建一个连接        mysql是我们上面文件暴露出来的模板的方法
  conn.connect();

  conn.query('select  * from record', function(err, rows, fields) {
        if (err) throw err;
        //console.log('The solution is: ', rows);
        res.json(rows);
  });
  
  conn.end();
});

router.post('/',function(req, res, next){
  if(!req.body.content){
    res.json({status:'error',desc:'content is null,can not be inserted'})
  }
  else{
    var conn = mysql.createConnection(mysqlinfo.mysql);      
    conn.connect();
    conn.query('insert into record(content,contenttype) values(?,?)',[req.body.content,req.body.type],function(err){
      if(err){
        results = [{status:err.message}];
        res.json(results);
      }
      res.json({status:'success'});
    });
    conn.end();
  }
});

module.exports = router;