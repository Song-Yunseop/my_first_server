'use strict';
const { Model } = require('sequelize');
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
      title: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
      },
      text: {
        type: DataTypes.STRING,
        required: true,
      },
      userid: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'board',
      timestamps: false,
    }
  );
  board.associate = function (models) {
    models.board.belongsTo(models.users, {
      foreignKey: "userid",
      targetKey: "id",
    });
  };


  return board;
};
