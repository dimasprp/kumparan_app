'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Employee = function(article){
    this.autor        = article.author;
    this.title      = article.title;
    this.body     = article.body;
};
Employee.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO article set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Employee.findById = function (autor, result) {
    dbConn.query("Select * from article where autor = ? AND created IN (SELECT MAX(created) FROM article)", autor,  function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

module.exports= Employee;