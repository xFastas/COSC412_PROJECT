// Import the mysql2 library
const mysql = require('mysq');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@$$w0rd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});