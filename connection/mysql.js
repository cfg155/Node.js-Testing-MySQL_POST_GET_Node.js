// Import mysql
const mysql = require('mysql')

// Create Connection
const mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datadummy'
})

mysql_connection.connect((err) => {
    if(err) throw err
    else {
        console.log('MYSQL SERVER CONNECTED')
    }
})

module.exports = mysql_connection