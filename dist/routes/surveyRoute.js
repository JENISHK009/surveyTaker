"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("../controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _express["default"].Router().post('/createSurvey', _controller.surveyController.createSurvey).get('/getSurvey', _controller.surveyController.getSurvey).post('/createSurveySection/', _controller.surveyController.createSurveySection)["delete"]('/deletSurveySection', _controller.surveyController.deletSurveySection)["delete"]('/deletSurvey', _controller.surveyController.deletSurvey).post('/saveAnswer', _controller.surveyController.saveSurveyResult).get('/getSurveyResult', _controller.surveyController.getSurveyResult);

exports["default"] = _default;