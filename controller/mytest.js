const res = require("express/lib/response");
const { sequelize, Sequelize, mytest } = require("../models");

const getMytest = async (req, res) => {
	try {
		const a = await mytest.findAll();
		res.send({ msg: "성공했습니다.", data: a });
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};


const postMytest = async (req, res) => {
	const box = req.body.box;
	console.log(box);
	try {
		if (box) {
			const a = await mytest.create({ box: box });
			res.send({ msg: "성공했습니다.", data: a });
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


const deleteMytest = async (req, res) => {
	const id = req.body.id
	try {
		const a = await mytest.destroy({ where: { id: id } });
		res.send({ msg: "성공했습니다.", data: a });
	} catch (error) {
		res.statue(200).send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

const getOneMytest = async (req, res) => {
	const id = req.query.id;
	console.log(id);
	try {
		const a = await mytest.findByPk(id);
		res.send({ msg: "성공했습니다.", data: a });
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

const isboxpostTest = async (req, res) => {
	const box = req.body.box;
	const boolean = req.body.boolean;
	console.log(box);
	try {
		if (boolean) {
			const a = await mytest.create({ box: box });
			res.send({ msg: "성공했습니다.", data: a });
		} else {
			res.send({ msg: "데이터를 안넣어요!" });
		}
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

const isboxPatch =  async (req,res) =>{
	const { box } = req.body;
	const { id } = req.query;
	let a;
	try {
		if(id){
			a = await mytest.update({box:box},{where:{id:id}});
		}
		res.send({data:"업데이트 완료", a});
	} catch (error) {
		res.send(error);
	}
}


module.exports = { getMytest, postMytest, deleteMytest, getOneMytest, isboxpostTest, isboxPatch};
