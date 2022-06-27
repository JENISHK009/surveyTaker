"use strict";

module.exports = function (sequelize, type) {
  return sequelize.define('survey', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    surveyName: type.STRING,
    userId: type.INTEGER,
    uniqueNumber: type.STRING,
    isDeleted: {
      type: type.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true
  });
};