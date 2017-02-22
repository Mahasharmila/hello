
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Goms'
});


connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


connection.query('SELECT * from `Sample`', function(err, rows, fields) {

  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });

