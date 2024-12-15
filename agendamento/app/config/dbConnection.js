const mysql = require("mysql2");

const host ='localhost';
const database = 'clinica_estetica'//nome do banco de dados
const user = 'root';
const password = "1234";

dbConn = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
})
console.log("[dbConnection]");

dbConn.connect((error) => {
    console.log('dbConnection error', error);
});
module.exports = dbConn;