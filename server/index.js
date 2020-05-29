require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = './controller'
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

// start listening for incoming requests
app.listen(SERVER_PORT, () => {
  console.log(`Shelfie-ing items on port ${SERVER_PORT}`)
})
