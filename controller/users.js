const { users } = require("../models");

const getUsers = async (req, res) => {
	// const isquery = req.query;
	// const isparams = req.params;
	try {
		const a = await users.findAll();
		res.send({ msg: "성공", data: a });
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};



const postUsers = async (req, res) => {
	const name = req.body.name;
	console.log(name);
	try {
		if (name) {
			const a = await users.create({ name: name});
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


const deleteUsers = async (req, res) => {
	const id = req.body.id;
	try {
		const a = await users.findByPk(id);
		if(a) {
			const b = await users.destroy({ where: { id: id } });
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

const patchUsers = async (req, res) =>{
	const id = req.query.id;
	const name = req.body.name;
	// const id = req.query.id;
	let a;
	try {
		if (id) {
			a = await users.update({name : name},{where:{id : id}});
		}
		res.send({ msg: "업데이트 완료", a});
	} catch (error) {
		res.send(error);
	}
};

const getOneUsers  = async (req, res) => {
	const id = req.query.id;
	// const id = req.params;
	try {
		const a = await users.findByPk(id);
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
// 		id?await users.update({box:box},{where:{id : id}}):0;
// 		res.send({data:"업데이트 완료"});
// 	} catch (error) {
// 		res.send(error);
// 	}
// };



module.exports = { getUsers, postUsers, deleteUsers, getOneUsers, patchUsers};
