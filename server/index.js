const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user')
const movementsRouter = require('./routes/movements')

const app = express()

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Movements api')
})

module.exports = (req, res) => {
  // set header first to allow request or origin domain (value can be different)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE')

  if (req.method === 'OPTIONS') {
    return res.status(200).json(({
      body: 'OK'
    }))
  }
}
app.use('/user', userRouter)
app.use('/movements', movementsRouter)

const PORT = process.env.PORT || 4001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on PORT ${PORT} 🚀`)
})
