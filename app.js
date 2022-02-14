const express = require("express");
const { sequelize, Sequelize } = require('./models');

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

app.use('/',(req, res)=>{
    res.send("test");
})

app.listen(3000,()=> {
    console.log("http://localhost:3000");
})