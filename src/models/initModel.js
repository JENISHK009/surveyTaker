const DataTypes = require('sequelize').DataTypes

const usersModel = require('./userModel')
const surveyModel = require('./surveyModel')
const surveySectionModel = require('./surveySectionModel')
const surveyResultModel = require('./surveyResultModel')

function initModels(sequelize) {
  const users = usersModel(sequelize, DataTypes)
  const survey = surveyModel(sequelize, DataTypes)
  const surveySection = surveySectionModel(sequelize, DataTypes)
  const surveyResult = surveyResultModel(sequelize, DataTypes)

  survey.belongsTo(users, {
    as: 'user',
    targetKey: 'id',
    foreignKey: 'userId',
  })

  users.hasMany(survey, {
    as: 'survey',
    targetKey: 'id',
    foreignKey: 'userId',
  })

  surveySection.belongsTo(survey, {
    as: 'survey',
    targetKey: 'id',
    foreignKey: 'surveyId',
  })

  survey.hasMany(surveySection, {
    as: 'surveySection',
    targetKey: 'id',
    foreignKey: 'surveyId',
  })

  surveyResult.belongsTo(survey, {
    as: 'survey',
    targetKey: 'id',
    foreignKey: 'surveyId',
  })

  surveyResult.belongsTo(surveySection, {
    as: 'surveySection',
    targetKey: 'id',
    foreignKey: 'surveySectionId',
  })

  surveySection.hasMany(surveyResult, {
    as: 'surveyResult',
    targetKey: 'id',
    foreignKey: 'surveySectionId',
  })

  survey.hasMany(surveyResult, {
    as: 'surveyResult',
    targetKey: 'id',
    foreignKey: 'surveyId',
  })

  return {
    users,
    survey,
    surveySection,
    surveyResult,
  }
}

module.exports = initModels
