var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./db/nx.db');




/* GET home page. */

router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
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
    //res.json(recorddao.findAllRecord())
});

router.post('/',function(req, res, next){
    db.run("insert into record(content,contenttype,contenttoken) VALUES (?,?,?)",'content test','1','',function(err){
       if(err){
            results = [{status:err}];
            res.json(results);
       }
       else{
            results = [{status:'success'}];
            res.json(results);
       }

    });
});

module.exports = router;