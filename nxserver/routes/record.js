var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlinfo = require('../db/mysql');

// var sqlite3 = require('sqlite3').verbose();

// var db = new sqlite3.Database('./db/nx.db');
//var db = new sqlite3.Database('./nx.db');



/* GET home page. */

router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  results = [];
//   db.all("SELECT * from record", function(err, rows){
//       rows.map((row)=>{
//       results.push({"recordid":row.recordid,
//                 "content":row.content,
//                 "createtime":row.createtime,
//                 "contenttype":row.contenttype,
//                 "contenttoken":row.contenttoken,
//             })
//       });
//       res.json(results);
//      });
    //res.json(recorddao.findAllRecord())
    var conn = mysql.createConnection(mysqlinfo.mysql);      //创建一个连接        mysql是我们上面文件暴露出来的模板的方法
    conn.connect();

    conn.query('select  * from record', function(err, rows, fields) {
        if (err) throw err;
        //console.log('The solution is: ', rows);
        res.json(rows);
    });
  
    conn.end();
});

// router.post('/',function(req, res, next){
//     db.run("insert into record(content,contenttype,contenttoken) VALUES (?,?,?)",req.body.content,req.body.type,req.body.token,function(err){
       
//         if(err){
//             results = [{status:err.message}];
//             res.json(results);
//        }
//        else{
//             results = [{status:'success'}];
//             res.json(results);
//        }

//     });
// });

module.exports = router;