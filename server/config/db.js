const mysql = require('mysql')
const { promisify } = require('util')
require('dotenv').config()

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})
db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('DB is connected')
  }
})

db.query = promisify(db.query)

module.exports = db
