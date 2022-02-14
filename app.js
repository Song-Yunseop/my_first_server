const express = require("express");
const { sequelize, Sequelize, mytest } = require('./models');


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

app.use('/', async(req, res)=>{
    const a = await mytest.destroy({where: {id:2}});
    res.send({test:"생성완료..!!", a: a})
});


app.listen(3000,()=> {
    console.log("http://localhost:3000");
})