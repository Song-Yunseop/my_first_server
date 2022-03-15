const { board } = require('../models');
const { users } = require('../models');

const getBoardService = async (req, res) => {
    const { id } = req.query;
    try {
        if (id) {
            const boards = await board.findAll({ where: { id: id } });
            return res.send({ msg: '성공', success: true, data: boards });
        } else {
            const boards = await board.findAll();
            console.log(boards);
            return res.send({ msg: '성공', success: true, data: boards });
        }
    } catch (error) {
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

const postBoardService = async (req, res) => {
    const { title, text } = req.body;
    if (!title) {
        return res.send({ msg: '타이틀을 넣어주세요..!', success: false });
    }
    try {
        const boards = await board.create({ title, text, userid: res.locals.users.id });
        return res.send({ msg: '성공', success: true, data: boards });
    } catch (error) {
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

const patchBoardService = async (req, res) => {
    const { title, text } = req.body;
    const id = req.query.id;
    if (!title) {
        return res.send({ msg: '타이틀을 넣어주세요..!', success: false });
    }
    try {
        const boards = await board.update({ title, text }, { where: { id: id } });
        return res.send({ msg: '성공', success: true, data: boards });
    } catch (error) {
        console.log(error);
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

const deleteBoardService = async (req, res) => {
    const { boardId } = req.params;
    if (!boardId) {
        return res.send({ msg: '해당 id를 넣어주세요', success: false });
    }
    try {
        const existBoards = await board.findByPk(boardId);
        if (!existBoards) {
            return res.send({ msg: '해당 게시글이 존재하지 않습니다.', success: false });
        }
        await existBoards.destroy();
        return res.send({ msg: '성공', success: true });
    } catch (error) {
        console.log(error);
        return res.send({ msg: '알수없는 에러', success: false, data: error });
    }
};

const getuserboard = async (req, res) => {
    const { userid } = req.body;
    if (!userid) {
        return res.send({ msg: '해당 id를 넣어주세요', success: false });
    }
    try {
        const userboard = await board.findAll({
          include: [
            { model: users ,
              attributes: { exclude: [ "id", "password"] },
            },
          ],
        });
        return res.send({ msg: '성공', success: userboard });
      } catch (error) {
        console.log(error);
        return res.send({ msg: '알수없는 에러', success: false, data: error });
      }
    };

module.exports = { getBoardService, postBoardService, patchBoardService, deleteBoardService, getuserboard };
