"use strict";

module.exports = function (sequelize, type) {
  return sequelize.define("users", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: type.STRING,
    lastName: type.STRING,
    password: type.STRING,
    email: type.STRING,
    isDeleted: {
      type: type.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true
  });
};