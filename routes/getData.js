const express = require('express')
const router = express.Router()

// Import MySQL Connection
const mysql_connection = require('../connection/mysql')

router
    .route('/')
    .get((req,res) =>{
        let sql = 'SELECT * FROM product'
        mysql_connection.query(sql,(err,rows) =>{
            if(err) throw err
            else{
                res.json(rows)
            }
        })
    })

module.exports = router