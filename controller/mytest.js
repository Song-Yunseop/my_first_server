const { mytest } = require("../models");

const getMytest = async (req, res) => {
	// const isquery = req.query;
	// const isparams = req.params;
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

const getMytest2 = async (req, res) => {
	const id = req.query.id;
	// const isparams = req.params;
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


const postMytest = async (req, res) => {
	const test = req.body.test;
	const box = req.body.box;
	console.log(box);
	try {
		if (box) {
			const a = await mytest.create({ box: box, test: test });
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
	const id = req.query.id;
	try {
		const a = await mytest.findByPk(id);
		if(a) {
			const b = await mytest.destroy({ where: { id: id } });
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

const getOneMytest = async (req, res) => {
	const id = req.query.id;
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

// const isboxPatch = async () =>{
// 	const { box } = req.body;
// 	const { id } = req.query;
// 	try {
// 		id?await mytest.update({box:box},{where:{id : id}}):0;
// 		res.send({data:"업데이트 완료"});
// 	} catch (error) {
// 		res.send(error);
// 	}
// };

const isboxPatch = async (req, res) =>{
	const { box, id, test } = req.body;
	// const { id } = req.query;
	let a;
	try {
		if (id) {
			a = await mytest.update({box:box, test:test},{where:{id : id}});
		}
		res.send({ msg: "업데이트 완료", a});
	} catch (error) {
		res.send(error);
	}
};

module.exports = { getMytest, postMytest, deleteMytest, getOneMytest, isboxpostTest, isboxPatch, getMytest2};
