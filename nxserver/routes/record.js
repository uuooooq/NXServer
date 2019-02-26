var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/nxSqlite.db');




/* GET home page. */

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  results = [];
  db.all("SELECT * from record", function(err, rows){
      rows.map((row)=>{
      results.push({"recordid":row.recordid,
                "content":row.content,
                "createtime":row.createtime,
                "contenttype":row.contenttype,
                "contenttoken":row.contenttoken,
            })
      });
      res.json(results);
    });
});

router.post('/',function(req, res, next){
    db.run("insert into record(content,contenttype,contenttoken) value (?,?,?)",'content test','1','',function(){
        results = [{status:'success'}];
        res.json(results);
    });
});

module.exports = router;