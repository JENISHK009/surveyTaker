import db from '../config/connection'
const models = db.sequelize.models

const createSurvey = async (req, res) => {
  try {
    let { userId, surveyName } = req.body ? req.body : ''
    if (!userId || !surveyName) throw new Error('Please enter valid data')
    let userExist = await models.users.findOne({ where: { id: userId } })
    if (!userExist) throw new Error('Please enter valid userId')

    let surveyCreated = await models.survey.create({
      userId,
      surveyName: surveyName,
      uniqueNumber: Date.now(),
    })

    if (!surveyCreated) throw new Error('Survey not created ')
    let surveySection = await models.surveySection.create({
      type: 'question',
      questionType: 'meeting_dates',
      title: 'email',
      surveyId: surveyCreated.id,
    })
    res.status(200).send({ success: true, data: surveyCreated })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const createSurveySection = async (req, res) => {
  try {
    let { surveyId } = req.query
    console.log('surveyId:::', surveyId)
    let { REGISTRATOION_PAGE_CONTENT } = req.body ? req.body : ''
    if (!surveyId)
      throw new Error('Please enter valid REGISTRATOION_PAGE_CONTENT')
    let surveyExist = await models.survey.findOne({ where: { id: surveyId } })
    if (!surveyExist) throw new Error('Please enter valid surveyId')

    let createSurveySection
    let sectionUpdated

    if (!REGISTRATOION_PAGE_CONTENT.id) {
      createSurveySection = await models.surveySection.create({
        ...REGISTRATOION_PAGE_CONTENT,
        surveyId,
      })
      if (!createSurveySection) throw new Error('something went wrong')
    } else {
      sectionUpdated = await models.surveySection.update(
        {
          surveyId,
          type: REGISTRATOION_PAGE_CONTENT.type,
          options: REGISTRATOION_PAGE_CONTENT.options
            ? JSON.stringify(REGISTRATOION_PAGE_CONTENT.options)
            : '',
          rank: REGISTRATOION_PAGE_CONTENT.rank,
          title: REGISTRATOION_PAGE_CONTENT.title,
          isRequired: REGISTRATOION_PAGE_CONTENT.isRequired,
        },
        { where: { id: REGISTRATOION_PAGE_CONTENT.id } },
      )
      if (!sectionUpdated) throw new Error('something went wrong')
    }

    res.status(200).send({
      success: true,
      message: 'survey saved',
      data: createSurveySection,
    })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const getSurvey = async (req, res) => {
  try {
    let { surveyId, url } = req.query ? req.query : ''
    if (!surveyId && !url) throw new Error('Please enter surveyId or url')
    let filter = {}
    if (url) {
      filter = { Url: url }
    } else if (surveyId) {
      filter = { id: surveyId }
    }

    let surveyData = await models.survey.findOne({
      where: filter,

      include: [
        {
          model: models.surveySection,
          as: 'surveySection',
          attributes: {
            include: [
              ['options', 'optionsValue'],
              ['title', 'label'],
            ],
          },
        },
      ],
      order: [['surveySection', 'rank', 'ASC']],
    })
    if (!surveyData) throw new Error('survey not found')
    surveyData = JSON.parse(JSON.stringify(surveyData))
    if (surveyData.surveySection.length > 0) {
      surveyData.surveySection = surveyData.surveySection.map((obj) => {
        console.log('obj:::', obj)
        obj.optionsValue = obj.optionsValue ? JSON.parse(obj.optionsValue) : []
        return obj
      })
    }
    res.status(200).send({
      success: true,
      data: surveyData.surveySection,
      surveyName: surveyData ? surveyData.surveyName : '',
      surveyId: surveyData ? surveyData.id : '',
    })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const deletSurveySection = async (req, res) => {
  try {
    let { id } = req.query ? req.query : ''
    if (!id) throw new Error('Please enter surveySectionId ')

    let deleteSurveySection = await models.surveySection.destroy({
      where: { id },
    })
    if (!deleteSurveySection) throw new Error('Section not found')
    res.status(200).send({ success: true, message: 'Section removed' })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const deletSurvey = async (req, res) => {
  try {
    let { surveyId } = req.query ? req.query : ''
    if (!surveyId) throw new Error('Please enter surveyId ')

    let deleteSurveySection = await models.surveySection.destroy({
      where: { surveyId },
    })

    let deleteSurvey = await models.survey.destroy({
      where: { id: surveyId },
    })
    if (!deleteSurvey) throw new Error('Survey not found')
    res.status(200).send({ success: true, message: 'Survey deleted' })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const saveSurveyResult = async (req, res) => {
  try {
    let { surveyId, user_email, answers } = req.body ? req.body : ''
    if (!url) throw new Error('Please enter surveyId ')
    if (!email) throw new Error('Please enter email ')
    if (!data) throw new Error('Please enter valid answer ')

    let surveyExist = await models.survey.findOne({ where: { Url: url } })
    if (!surveyExist) throw new Error('Survey not found')

    let answerSubmited = await models.surveyResult.findAll({
      where: { email: email, surveyId: surveyExist.id },
    })
    if (answerSubmited.length > 0) throw new Error('Survey already submited')

    answers = answers.map((obj) => {
      return {
        surveyId: surveyExist.id,
        surveySectionId: obj.id ? obj.id : null,
        email: email,
        type: obj.type ? obj.type : '',
        options: obj.options ? JSON.stringify(obj.options) : '',
        answer: obj.answers ? JSON.stringify(obj.answers) : '',
        rank: obj.rank ? obj.rank : null,
        title: obj.title ? obj.title : '',
      }
    })
    let saveAnswer = await models.surveyResult.bulkCreate(data)
    if (!saveAnswer) throw new Error('Suvrey not saved')
    res.status(200).send({ success: true, message: 'Survey submited' })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

const getSurveyResult = async (req, res) => {
  try {
    let { surveyId } = req.query ? req.query : ''
    if (!surveyId) throw new Error('Please enter surveyId ')

    let data = await models.surveyResult.findAll({
      where: { surveyId: surveyId },
    })
    let emailMatch = []
    let newData = []
    data.map((obj) => {
      obj.options = JSON.parse(obj.options)
      if (emailMatch.includes(obj.email)) {
        newData.map((obj1) => {
          if (obj1.email == obj.email) {
            obj1.data.push(obj)
          }
        })
      } else {
        newData.push({ email: obj.email, data: [obj] })
        emailMatch.push(obj.email)
      }
    })
    res.status(200).send({ success: true, newData })
  } catch (err) {
    console.log(err)
    res.status(400).send({ success: false, message: err.message })
  }
}

export default {
  createSurvey,
  getSurvey,
  createSurveySection,
  deletSurveySection,
  deletSurvey,
  saveSurveyResult,
  getSurveyResult,
}
