const { quiz, users, score } = require("../models");

const getQuiz = async (req, res) => {
	try {
		const quizAll = await quiz.findAll();
		res.send({ msg: "성공", data: quizAll });
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

//해당 퀴즈 post
const postQuiz = async (req, res) => {
	const { content, qscore} = req.body;
	try {
		if (content) {
			const existQuiz = await quiz.create({
				content: content,
				qscore: qscore
			});
			res.send({ msg: "성공", data: existQuiz });
		} else {
			res.send({ msg: "데이터를 안넣습니다." });
		}
	} catch (error) {
		res.statue(200).send({
			msg: "접속실패 error ",
			error: error,
		});
	}
};

// 퀴즈 삭제
const deleteQuiz = async (req, res) => {
	const id = req.body.id;
	try {
		const existQuiz = await quiz.findByPk(id);
		if (existQuiz) {
			await quiz.destroy({ where: { id: id } });
			res.send({ msg: `${existQuiz.content}를 삭제 성공했습니다.` });
		} else {
			res.send({ mag: "해당 id를 가진 퀴즈가 존재하지 않음" });
		}
	} catch (error) {
		res.statue(200).send({
			msg: "접속실패 error ",
			error: error,
		});
	}
};

const patchQuiz = async (req, res) => {
	const id = req.query.id;
	const { content, qscore} = req.body;
	
	try {
		if (id) {
			const existQuiz = await quiz.update(
				{ content: content, qscore: qscore },
				{ where: { id: id } }
			);

			res.send({ msg: "업데이트 완료", existQuiz });
		} else {
			res.send({ msg: "id를 보내주세요..." });
		}
	} catch (error) {
		res.send(error);
	}
};

const getOneQuiz = async (req, res) => {
	const id = req.query.id;
	try {
		const existQuiz = await quiz.findByPk(id);
		if (existQuiz) {
			res.send({ msg: "성공", data: existQuiz });
		} else {
			res.send({ msg: `해당 ${id}값을 가진 퀴즈가 존재하지 않습니다. id값 재확인` });
		}
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			error: error,
		});
	}
};


//잘했는데 필요없으니깐 삭제함. 이게 필요한 이유를 모르겟습니다.
const postQuizeService = async (req, res) => {
	const { id } = req.query; //유저아디
	const { qid, isdo } = req.body;
	try {
		const exUser = await users.findByPk(id);
		const exScroe = await score.findByPk(qid);
		if(exUser && exScroe){
			const quizs = await quiz.create( {userid: exUser.id , qid: exScroe.id, isdo})
			let data = {
				answer : quizs.isdo ? "정답입니다.!" : "틀렷어요..!",
				name : exUser.name,
				scroe : exScroe.num
			}

			if(quizs.isdo){
				res.send({msg: "성공했습니다.", data: data})
			}
		}else{
			res.send({msg: "해당하는 유저 또는 문제가 존재 하지 않습니다."})
		}
	} catch (error) {
		res.send({msg:"알수없는 오류", error});
	}
};

module.exports = {
	getQuiz,
	postQuiz,
	deleteQuiz,
	getOneQuiz,
	patchQuiz,
};
