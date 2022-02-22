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
        required: true,
      },
      box: {
        type: DataTypes.STRING,
        required: true,
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
      name: {
        type: DataTypes.STRING,
        required: true,
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

module.exports = (sequelize, DataTypes) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  score.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        required: true,
      },
      num: {
        type: DataTypes.INTEGER,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "score",
      timestamps: false,
    }
  );

  return score;
};

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
      qid: {
        type: DataTypes.INTEGER,
        required: true,
      },
      isdo: {
        type: DataTypes.STRING,
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


