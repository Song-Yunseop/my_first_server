const { STRING } = require("sequelize");
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
	try {
		const a = await mytest.findByPk(29);
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


module.exports = { getMytest, postMytest, deleteMytest, getOneMytest, isboxpostTest};
