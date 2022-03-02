const { board, quiz, users } = require("../models");

const getBoard = async (req, res) => {
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
    const boardOne = await board.findByPk(id);
    if (boardOne) {
      res.send({ msg: "성공", data: boardOne });
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
  const { userId, quizId, answer } = req.body;
  try {
    const existUser = await users.findByPk(userId);
    const existQuiz = await quiz.findByPk(quizId);
    if(existQuiz){
      return res.send({ msg: "해당 문제가 존재하지 않습니다."})
    }
    else if(existUser){
      return res.send({ msg : "해당 유저가 존재하지 않습니다."})
    }
    
    await board.create({userId : existUser.id, quizId: existQuiz.id, answer: answer})
    const isAnswer = answer? "맞았습니다." : "틀렷습니다."
    return res.send({msg: `${existQuiz.name}님의 ${existQuiz.content}는  ${isAnswer}`})
  } catch (error) {
    res.send({
      msg: "접속실패 error ",
      data: null,
    });
  }
};

const deleteBoardSerive = async (req, res) => {
  const {id, userid, quizId} = req.body;
  try {
    const existUser = await users.findByPk(userid);
    const existQuiz = await quiz.findByPk(quizId);
    if(existQuiz){
      return res.send({ msg: "해당 문제가 존재하지 않습니다."})
    }
    else if(existUser){
      return res.send({ msg : "해당 유저가 존재하지 않습니다."})
    }
    
    await board.destroy({where: { id: id, userId : existUser.id, quizId: existQuiz.id}})
    return res.send({msg: `${existQuiz.name}님의 ${existQuiz.content}문제를 삭제했습니다.`})
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
  try {
    if (id) {
      const existUser = await users.findByPk(userId);
      const existQuiz = await quiz.findByPk(quizId);
      if(existQuiz){
        return res.send({ msg: "해당 문제가 존재하지 않습니다."})
      }
      else if(existUser){
        return res.send({ msg : "해당 유저가 존재하지 않습니다."})
      }

      //굿
      const boards = await board.update(
        { userId: existUser.id, quizId: existQuiz.id, answer: answer },
        { where: { id: id } }
      );
      return res.send({ msg: "업데이트 완료", data: boards });
    } else {
      res.send({ msg: "id가 존재하지 않습니다..." });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getBoard,
  deleteBoardSerive,
  postBoardService,
  patchBoard,
  getOneBoard,
};
