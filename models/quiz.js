"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  quiz.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        required: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
      },
      qscore: {
        type: DataTypes.INTEGER,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "quiz",
      timestamps: false,
    }
  );

  return quiz;
};
