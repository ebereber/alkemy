const mysql = require('mysql')
const { promisify } = require('util')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'alkemy'
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
