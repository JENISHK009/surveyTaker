module.exports = (sequelize, type) => {
  return sequelize.define(
    'surveySection',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      surveyId: type.INTEGER,
      questionType: type.STRING,
      type: type.STRING,
      options: type.STRING,
      rank: type.INTEGER,
      title: type.STRING,
      isRequire: { type: type.BOOLEAN, defaultValue: false },
      isDeleted: { type: type.BOOLEAN, defaultValue: false },
    },
    {
      timestamps: true,
    },
  )
}
