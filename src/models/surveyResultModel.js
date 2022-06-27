const { STRING } = require('sequelize')

module.exports = (sequelize, type) => {
  return sequelize.define(
    'surveyResult',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      surveyId: type.INTEGER,
      surveySectionId: type.INTEGER,
      email: type.STRING,
      type: type.STRING,
      options: type.STRING,
      answer: type.STRING,
      rank: type.INTEGER,
      title: type.STRING,
      isDeleted: { type: type.BOOLEAN, defaultValue: false },
    },
    {
      timestamps: true,
    },
  )
}
