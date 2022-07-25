const express = require('express')
const userRouter = require('./routes/user')
const movementsRouter = require('./routes/movements')

const app = express()

app.use(express.json())

app.use('/user', userRouter)
app.use('/movements', movementsRouter)

const PORT = 4001
app.listen(PORT, () => {
  console.log(`🚀 Server listening on PORT ${PORT} 🚀`)
})
