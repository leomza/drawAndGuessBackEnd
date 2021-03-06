const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const pathToPublicFolder = path.resolve(__dirname, './public')
const morgan = require('morgan')
const cors = require('cors')

app.use(express.static(pathToPublicFolder))
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: 'https://guessdraw.netlify.app'
  })
)

app.use(morgan('tiny'))

const sessionRoute = require('./routes/sessionRoute')
const userRoute = require('./routes/userRoute')

app.use('/session', sessionRoute)
app.use('/user', userRoute)

module.exports = app
