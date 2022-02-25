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
	const { email, password, name } = req.body;
	console.log(email, password, name);
	try {  
		if (email && password && name) {
			const a = await users.create({ email: email, password: password, name: name});
			res.send({ msg: "가입 성공", data: a });
		} else {
			res.send({ msg: "가입 실패" });
		}
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			data: null,
		});
	}
};

const postUsersLogin = async (req, res) => {
	const { email, password } = req.body;
	const name = req.query.name;
	console.log(email, password);
	try { 
		const userEmail = await users.findOne({where: { email : email}});
		const userPass = await users.findOne({where: { password : password}});
		const username = await users.findOne({where: { name : name}});
		console.log(userEmail, userPass);
		if (userEmail && userPass ) {
			await users.create({ email: userEmail, 
								 password: userPass,
								 name: username
								});
			res.send({ msg: "로그인 성공", data: username });
		} else {
			res.send({ msg: "로그인 실패" });
		}
	} catch (error) {
		res.send({
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
		if (id) { //여기도 똑같네
			a = await users.update({name : name},{where:{id : id}});
			res.send({ msg: "업데이트 완료", a});
		} else {
			res.send({ msg: "id를 보내주세요...."});
		}
	} catch (error) {
		res.send(error);
	}
};

const getOneUsers  = async (req, res) => {
	const id = req.query.id;
	// const id = req.params;
	try {
		if (id) {
			const a = await users.findByPk(id);
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
// 		id?await users.update({box:box},{where:{id : id}}):0;
// 		res.send({data:"업데이트 완료"});
// 	} catch (error) {
// 		res.send(error);
// 	}
// };



module.exports = { getUsers, postUsers, deleteUsers, getOneUsers, patchUsers, postUsersLogin};
