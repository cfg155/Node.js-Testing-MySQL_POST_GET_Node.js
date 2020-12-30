const express = require('express')
const app = express()

const path = require('path')

app.use(express.json())

// Default 
app.use('/',express.static(path.join(__dirname,'public')))

// Router getData
const getData = require('./routes/getData')
app.use('/getData',getData)

// Router addData
const addData = require('./routes/addData')
app.use('/addData',addData)

app.listen(3000,()=>console.log('Connected to PORT 3000'))