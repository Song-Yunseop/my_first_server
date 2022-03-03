const express = require('express');
const { sequelize, Sequelize, mytest } = require('./models');
const router = require('./router');
const viewRouter = require('./view');
const driver = async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    console.error('초기화 실패');
    console.error(err);
    return;
  }
  console.log('초기화 완료.');
};
driver();
const app = express();
app.use('/web', express.static('web'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', router);
app.set('views', __dirname + '/web');
app.set('view engine', 'ejs');
app.use('/', viewRouter);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
