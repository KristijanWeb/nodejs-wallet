var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'wallet' 
});

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;


// const mysql = require('mysql');

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'kristij2_nodejsuser',
//   password: 'Nodejsuser;;', 
//   database: 'kristij2_nodejs' 
// });

// conn.connect(function(err) {
//   if (err) throw err;
//   console.log('Database is connected successfully !');
// });

// module.exports = conn;