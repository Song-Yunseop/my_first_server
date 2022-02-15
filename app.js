const express = require("express");
const { sequelize, Sequelize, mytest } = require('./models');
const controller = require("./controller")

const driver = async () => {
    try {
      await sequelize.sync();
    } catch (err) {
      console.error('초기화 실패');
      console.error(err);
      return;
    }
    console.log('초기화 완료.');
  }
driver();
const app = express();
app.use(express.json());
app.use('/', controller);


app.listen(3000,()=> {
    console.log("http://localhost:3000");
})