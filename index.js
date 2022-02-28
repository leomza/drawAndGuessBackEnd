const app = require('./server')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 8000

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Data base connected')

    app.listen(port, () => {
      console.log(`Listening on port: ${port}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1) //This error is going to stop the app ("1" means "True")
  }
}

connectDB()

module.exports = connectDB
