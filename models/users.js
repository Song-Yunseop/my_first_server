"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "users",
      timestamps: false,
    }
  );

  return users;
};
