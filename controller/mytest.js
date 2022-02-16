const { sequelize, Sequelize, mytest } = require("../models");

const test2 = async (req, res) => {
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
const test3 = async (req, res) => {
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

const test4 = async (req, res) => {
	const { test } = req.body;
	console.log(req.body);
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

module.exports = { test2, test3 , test4};
