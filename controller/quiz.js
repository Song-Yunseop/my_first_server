const { quiz } = require("../models");

const getQuiz = async (req, res) => {
	// const isquery = req.query;
	// const isparams = req.params;
	try {
		const a = await quiz.findAll();
		res.send({ msg: "성공", data: a });
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};



const postQuiz = async (req, res) => {
	const {qid, isdo, userid} = req.body;
	// const qid = req.body.qid;
	// const isdo = req.body.isdo;
	// const userid = req.body.userid;
	console.log(qid);
	try {
		if (qid) { 
			const a = await quiz.create({ qid: qid, isdo: isdo, userid: userid});
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


const deleteQuiz = async (req, res) => {
	const id = req.body.id;
	try {
		const a = await quiz.findByPk(id);
		if(a) { 
			const b = await quiz.destroy({ where: { id: id } });
			res.send({ msg: "성공했습니다.", data: b });
		} else {
			res.send({ mag: "해당 id존재하지 않음"});
		}

	} catch (error) {
		res.statue(200).send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

const patchQuiz = async (req, res) =>{
	const id = req.query.id;
	const {qid, isdo, userid} = req.body;
	// const qid = req.body.qid;
	// const isdo = req.body.isdo;
	// const userid = req.body.userid;
	let a;
	try {
		if (id) { // 만약에 아이디가 존재하지 않는다면...? 똑같이 업데이트 완료 메세지 보내네요
			a = await quiz.update({qid: qid, isdo: isdo, userid: userid},{where:{id : id}});
			res.send({ msg: "성공했습니다.", data: a});
		}
		else{
			res.send({ msg: "id을 보내주세요...!"});
		}
		
	} catch (error) {
		res.send(error);
	}
};

const getOneQuiz  = async (req, res) => {
	const id = req.query.id;
	// const id = req.params;
	try {	//여기는 a가 존재하지 않는다면 다른 메세지를 보내도록 고쳐보세요
		const a = await quiz.findByPk(id);
		res.send({ msg: "성공", data: a});
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



module.exports = { getQuiz, postQuiz, deleteQuiz, getOneQuiz, patchQuiz};
