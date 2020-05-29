require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

// always use express json
app.use(express.json())

// connect to the database using massive.js
massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
})
  .then(dbInstance => {
    app.set('db', dbInstance)
  })
  .catch(err => console.log(err))

// RESTful endpoints
app.get('/api/inventory', controller.allProducts)
app.post('/api/product', controller.addProduct)

// start listening for incoming requests
app.listen(SERVER_PORT, () => {
  console.log(`Merchendising on port ${SERVER_PORT}`)
})
