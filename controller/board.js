const { board, quiz, users } = require("../models");

const getBoard = async (req, res) => {
  // const isquery = req.query;
  // const isparams = req.params;
  try {
    const boardAll = await board.findAll();
    res.send({ msg: "성공", data: boardAll });
  } catch (error) {
    res.send({
      msg: "접속실패 error ",
      data: null,
    });
  }
};

const getOneBoard = async (req, res) => {
  const id = req.query.id;
  // const id = req.params;
  try {
    const a = await board.findByPk(id);
    if (a) {
      res.send({ msg: "성공", data: a });
    } else {
      res.send({ msg: "id가 존재하지 않습니다." });
    }
  } catch (error) {
    res.send({
      msg: "접속실패 error ",
      data: null,
    });
  }
};

const postBoardService = async (req, res) => {
  const { id } = req.query;
  const { userId, quizId, answer } = req.body;
  // const id = req.params;
  try {
    const user = await users.findByPk(id);
    const uName = await users.findByPk(userId);
    const qName = await quiz.findByPk(quizId);

    if (user && uName && qName) {
      const quizs = await quiz.create({
        userid: uName.id,
        content: qName.id,
        answer,
      });
      let data = {
        answer: quizs.isdo ? "정답입니다.!" : "틀렷어요..!",
        name: uName.name,
        content: qName.content,
      };
      if (quizs.isdo) {
        res.send({ msg: "성공했습니다.", data: data });
      }
    } else {
      res.send({ msg: "id가 존재하지 않습니다." });
    }
  } catch (error) {
    res.send({
      msg: "접속실패 error ",
      data: null,
    });
  }
};

const postBoard = async (req, res) => {
  const num = req.body.num;
  console.log(num);
  try {
    if (num) {
      const a = await board.create({ num: num });
      res.send({ msg: "성공", data: a });
    } else {
      res.send({ msg: "데이터를 안넣어요!" });
    }
  } catch (error) {
    res.statue(200).send({
      msg: "접속실패 error ",
      data: null,
    });
  }
};

const deleteBoard = async (req, res) => {
  const id = req.body.id;
  try {
    const a = await board.findByPk(id);
    if (a) {
      const b = await board.destroy({ where: { id: id } });
      res.send({ msg: "성공했습니다.", data: b });
    } else {
      res.send({ mag: "해당 id존재하지 않음" });
    }
  } catch (error) {
    res.statue(200).send({
      msg: "접속실패 error ",
      data: null,
    });
  }
};

const patchBoard = async (req, res) => {
  const id = req.query.id;
  const { userId, quizId, answer } = req.body;
  let a;
  try {
    if (id) {
      a = await board.update(
        { userId: userId, quizId: quizId, answer: answer },
        { where: { id: id } }
      );
      res.send({ msg: "업데이트 완료", a });
    } else {
      res.send({ msg: "id가 존재하지 않습니다..." });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getBoard,
  postBoard,
  deleteBoard,
  postBoardService,
  patchBoard,
  getOneBoard,
};
