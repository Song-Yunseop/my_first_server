const { sequelize, Sequelize, mytest } = require("./models");

const test2 = async (req, res) => {
  mytest.create("mytest");
  res.send("mytest");
};
