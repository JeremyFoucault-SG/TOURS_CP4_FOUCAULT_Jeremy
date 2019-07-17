const  mysql = require('mysql');

const  db = mysql.createConnection({
host :  'localhost', 
user :  'root', 
password: 'Thetrue1!',
database :  'circus',
});
module.exports = db;