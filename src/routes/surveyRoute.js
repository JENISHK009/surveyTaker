import express from 'express'

import { surveyController } from '../controller'

export default express
  .Router()
  .post('/createSurvey', surveyController.createSurvey)
  .get('/getSurvey', surveyController.getSurvey)
  .post('/createSurveySection/', surveyController.createSurveySection)
  .delete('/deletSurveySection', surveyController.deletSurveySection)
  .delete('/deletSurvey', surveyController.deletSurvey)
  .post('/saveAnswer', surveyController.saveSurveyResult)
  .get('/getSurveyResult', surveyController.getSurveyResult)
