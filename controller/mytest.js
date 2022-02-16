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


const postMytest = async (리퀘스트, 리스폰스) => {
	const test = 리퀘스트.body.test;
	console.log(리퀘스트);
	try {
		if (test) {
			const a = await mytest.create({ test: test });
			리스폰스.send({ msg: "성공했습니다.", data: a });
		} else {
			리스폰스.send({ msg: "데이터를 안넣어요!" });
		}
	} catch (error) {
		리스폰스.statue(200).send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

module.exports = { getMytest, deleteMytest , postMytest};
