import express from 'express'
import cors from 'cors'
const app = express()

const PORT = process.env.PORT || 8000
import { userRoute, surveyRoute } from './src/routes'
require('dotenv').config({ path: '.env' })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})
app.use(cors({ credentials: true }))

app.use('/user', userRoute)
app.use('/survey', surveyRoute)

app.listen(PORT, () => {
  console.log(`API Running at Localhost: ${PORT}`)
})
