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
	try {
		const a = await mytest.destroy({ where: { id: "21" } });
		res.send({ msg: "성공했습니다.", data: a });
	} catch (error) {
		res.statue(200).send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

const postMytest = async (req, res) => {
	const test1 = req.body;
	req.body = 
	{
		test: "test"
	}
	const test2 = test1.test;
	console.log(test2);
	try {
		if (test) {
			const a = await mytest.create({ test: "안녕하세요" });
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

module.exports = { getMytest, deleteMytest , postMytest};
