"use strict";

var DataTypes = require('sequelize').DataTypes;

var usersModel = require('./userModel');

var surveyModel = require('./surveyModel');

var surveySectionModel = require('./surveySectionModel');

var surveyResultModel = require('./surveyResultModel');

function initModels(sequelize) {
  var users = usersModel(sequelize, DataTypes);
  var survey = surveyModel(sequelize, DataTypes);
  var surveySection = surveySectionModel(sequelize, DataTypes);
  var surveyResult = surveyResultModel(sequelize, DataTypes);
  survey.belongsTo(users, {
    as: 'user',
    targetKey: 'id',
    foreignKey: 'userId'
  });
  users.hasMany(survey, {
    as: 'survey',
    targetKey: 'id',
    foreignKey: 'userId'
  });
  surveySection.belongsTo(survey, {
    as: 'survey',
    targetKey: 'id',
    foreignKey: 'surveyId'
  });
  survey.hasMany(surveySection, {
    as: 'surveySection',
    targetKey: 'id',
    foreignKey: 'surveyId'
  });
  surveyResult.belongsTo(survey, {
    as: 'survey',
    targetKey: 'id',
    foreignKey: 'surveyId'
  });
  surveyResult.belongsTo(surveySection, {
    as: 'surveySection',
    targetKey: 'id',
    foreignKey: 'surveySectionId'
  });
  surveySection.hasMany(surveyResult, {
    as: 'surveyResult',
    targetKey: 'id',
    foreignKey: 'surveySectionId'
  });
  survey.hasMany(surveyResult, {
    as: 'surveyResult',
    targetKey: 'id',
    foreignKey: 'surveyId'
  });
  return {
    users: users,
    survey: survey,
    surveySection: surveySection,
    surveyResult: surveyResult
  };
}

module.exports = initModels;