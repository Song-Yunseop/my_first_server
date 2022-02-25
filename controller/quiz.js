const { query } = require("express");
const { quiz, users, score } = require("../models");

const getQuiz = async (req, res) => {
	// const isquery = req.query;
	// const isparams = req.params;
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

const postQuiz = async (req, res) => {
	const { content, qscore} = req.body;
	console.log(content);
	// const qid = req.body.qid;
	// const isdo = req.body.isdo;
	// const userid = req.body.userid;
	try {
		if (content) {
			const a = await quiz.create({
				content: content,
				qscore: qscore
			});
			res.send({ msg: "성공", data: a });
		} else {
			res.send({ msg: "데이터를 안넣습니다." });
		}
	} catch (error) {
		res.statue(200).send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

// const postQuiz2 = async (req, res) => {
// 	const { isdo } = req.body;
// 	const id = req.query.id;
// 	const sc = await score.findByPk(id);
// 	console.log(sc);
// 	// const qid = req.body.qid;
// 	// const isdo = req.body.isdo;
// 	// const userid = req.body.userid;

// 	try {
// 		if (sc) {
// 			const a = await quiz.create({ isdo: isdo, qid: sc.id });
// 			res.send({ msg: "성공", data: a });
// 		} else {
// 			res.send({ msg: "해당 사용자는 없습니다." });
// 		}
// 	} catch (error) {
// 		res.statue(200).send({
// 			msg: "접속실패 error ",
// 			data: null,
// 		});
// 	}
// };

// const postQuiz3 = async (req, res) => {
// 	const { qid, isdo } = req.body;
// 	const id = req.query.id;
// 	try {
// 		const user = await users.findByPk(id);
// 		const sc = await score.findByPk(qid);

// 		console.log(id);
// 		// const qid = req.body.qid;
// 		// const isdo = req.body.isdo;
// 		// const userid = req.body.userid;
// 		if (user && sc) {
// 			const a = await quiz.create({
// 				userid: user.id,
// 				isdo: isdo,
// 				qid: sc.id,
// 			});
// 			res.send({ msg: "성공", data: a });
// 		} else {
// 			res.send({ msg: "해당 사용자는 없습니다." });
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		res.send({
// 			msg: "접속실패 error ",
// 			data: null,
// 		});
// 	}
// };
//유저아이디가  해당아이디값을 가진 스코어가 있으면 퀴즈로 do qid

const deleteQuiz = async (req, res) => {
	const id = req.body.id;
	try {
		const a = await quiz.findByPk(id);
		if (a) {
			const b = await quiz.destroy({ where: { id: id } });
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

const patchQuiz = async (req, res) => {
	const id = req.query.id;
	const { content, qscore} = req.body;
	// const qid = req.body.qid;
	// const isdo = req.body.isdo;
	// const userid = req.body.userid;
	let a;
	try {
		if (id) {
			a = await quiz.update(
				{ content: content, qscore: qscore },
				{ where: { id: id } }
			);

			res.send({ msg: "업데이트 완료", a });
		} else {
			res.send({ msg: "id를 보내주세요..." });
		}
	} catch (error) {
		res.send(error);
	}
};

const getOneQuiz = async (req, res) => {
	const id = req.query.id;
	// const id = req.params;
	try {
		const a = await quiz.findByPk(id);
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

// const isboxPatch = async () =>{
// 	const { box } = req.body;
// 	const { id } = req.query;
// 	try {
// 		id?await quiz.update({box:box},{where:{id : id}}):0;
// 		res.send({data:"업데이트 완료"});
// 	} catch (error) {
// 		res.send(error);
// 	}
// };

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
	postQuizeService,
};
