const express = require('express')
const router = express.Router()

// Create Body Parser
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))

// Import Connection
const mysql_connection = require('../connection/mysql')

// Import UUID.V4 
const uuid = require('uuidv4')

router
    .route('/')
    .post((req,res) => {
        let postData = {
            id: 1,
            product: req.body.product
        }
        let sql = `INSERT INTO product VALUES ('${postData.id}','${postData.product}')`
        mysql_connection.query(sql, (err,rows) => {
            if(err)throw err
            else {
                console.log('Data Inserted')
            }
        })
    })

module.exports = router