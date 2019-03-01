var express = require('express');
var router = express.Router();

// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('../db/nxSqlite.db');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   results = [];
//   db.all("SELECT * from user", function(err, rows){
//       rows.map((row)=>{
//       results.push({"id":row.userid,
//                 "description":row.desc,
//                 "answer":row.name,
//                 "password":row.pw,})
//       });
//       res.json(results);
// });
// });

module.exports = router;
