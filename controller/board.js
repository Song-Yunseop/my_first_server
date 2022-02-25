const { board } = require("../models");

const getboard = async (req, res) => {
	// const isquery = req.query;
	// const isparams = req.params;
	try {
		const a = await board.findAll();
		res.send({ msg: "성공", data: a });
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};



const postboard = async (req, res) => {
	const num = req.body.num;
	console.log(num);
	try {
		if (num) {
			const a = await board.create({ num: num});
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


const deleteboard = async (req, res) => {
	const id = req.body.id;
	try {
		const a = await board.findByPk(id);
		if(a) {
			const b = await board.destroy({ where: { id: id } });
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

const patchboard = async (req, res) =>{
	const id = req.query.id;
	const num = req.body.num;
	let a;
	try {
		if (id) { //퀴즈에도 똑같이 있는오류 확인요망
			a = await board.update({num : num},{where:{id : id}});
			res.send({ msg: "업데이트 완료", a});
		} else {
			res.send({ msg: "id가 존재하지 않습니다..."});
		}
	} catch (error) {
		res.send(error);
	}
};

const getOneboard  = async (req, res) => {
	const id = req.query.id;
	// const id = req.params;
	try {
		const a = await board.findByPk(id);
		if (id) {
			res.send({ msg: "성공", data: a});
		} else {
			res.send({ msg: "id가 존재하지 않습니다."});
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
// 		id?await board.update({box:box},{where:{id : id}}):0;
// 		res.send({data:"업데이트 완료"});
// 	} catch (error) {
// 		res.send(error);
// 	}
// };



module.exports = { getboard, postboard, deleteboard, getOneboard, patchboard};
