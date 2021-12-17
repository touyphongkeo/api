//page ການເຊື່ອມໂຍງຖານຂໍ້ມູນ  npm i mysql
var mysql = require("mysql")
var connection = mysql.createPool({
    connectionLimit: 10000,
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "nodejs_workshop_db"

})
module.exports = connection;
//
