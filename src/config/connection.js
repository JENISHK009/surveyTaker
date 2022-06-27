const { Sequelize } = require('sequelize')
const initModels = require('../models/initModel')
const sqlport = 3306

const username = 'uvmtlr3ymynjpapu'
const password = 'PC7oLrLpJuFATgozbP0o'
const database = 'bnpkqyy29kid13nddxhg'
const hostName = 'bnpkqyy29kid13nddxhg-mysql.services.clever-cloud.com'

const sequelize = new Sequelize(database, username, password, {
  host: hostName,
  port: sqlport,
  dialect: 'mysql',
})
initModels(sequelize)

sequelize
  .authenticate()
  .then(async (result) => {
    console.log('DB Connected successfully')
    // await sequelize.sync({ alter: true })
  })
  .catch((err) => {
    console.log(`${err}`)
  })

const db = { sequelize, Sequelize }
module.exports = db
