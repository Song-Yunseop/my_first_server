"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  board.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        required: true,
      },
      userId: {
        type: DataTypes.STRING,
        required: true,
      },
      quizId: {
        type: DataTypes.INTEGER,
        required: true,
      },
      answer: {
        type: DataTypes.BOOLEAN,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "board",
      timestamps: false,
    }
  );

  return board;
};
