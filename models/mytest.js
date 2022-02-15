"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mytest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mytest.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        required: true,
      },
      test: {
        type: DataTypes.STRING,
        require: true,
      },
    },
    {
      sequelize,
      modelName: "mytest",
      timestamps: false,
    }
  );

  return mytest;
};
