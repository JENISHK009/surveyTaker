import express from 'express'

import { userController } from '../controller'

export default express
  .Router()
  .post('/signUp', userController.sigup)
  .get('/getUserSurvey', userController.getUserSurvey)
  .post('/login', userController.login)
