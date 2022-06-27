import db from '../config/connection'
const models = db.sequelize.models
const sigup = async (req, res) => {
  try {
    let firstName = req.body && req.body.firstName ? req.body.firstName : ''
    let lastName = req.body && req.body.lastName ? req.body.lastName : ''
    let email = req.body && req.body.email ? req.body.email : null
    let password = req.body && req.body.password ? req.body.password : null
    if (!email || !password) throw new Error('Please enter email and password')

    let emailExist = await models.users.findOne({ where: { email: email } })
    if (emailExist) throw new Error('Email already used by some other user')

    let dataSaved = await models.users.create({
      email,
      password,
      firstName,
      lastName,
    })

    if (!dataSaved) throw new Error('User not created')

    res
      .status(200)
      .send({ success: true, data: dataSaved, message: 'singUp successfully' })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const login = async (req, res) => {
  try {
    let { email } = req.body && req.body.email ? req.body : null
    let { password } = req.body && req.body.password ? req.body : null
    if (!email || !password) throw new Error('Please enter email and password')

    let emailExist = await models.users.findOne({ where: { email, password } })
    if (!emailExist) throw new Error('Please enter valid email and password')

    res.status(200).send({ success: true, data: emailExist })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const getUserSurvey = async (req, res) => {
  try {
    let { userId } = req.query ? req.query : ''
    if (!userId) throw new Error('Please enter userId')
    let userExist = await models.users.findOne({ wherre: { id: userId } })
    if (!userExist) throw new Error('User not found')

    let surveyData = await models.survey.findAll({
      where: { userId: userId },
    })
    console.log('surveyData::::', surveyData)
    // if (surveyData.length == 0) throw new Error('Survey not found')

    res.status(200).send({ success: true, data: surveyData })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

export default { sigup, login, getUserSurvey }
