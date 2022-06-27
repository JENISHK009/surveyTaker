"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("../controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _express["default"].Router().post('/signUp', _controller.userController.sigup).get('/getUserSurvey', _controller.userController.getUserSurvey).post('/login', _controller.userController.login);

exports["default"] = _default;