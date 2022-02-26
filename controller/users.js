const { users } = require("../models");

const postUsersSingup = async (req, res) => {
	const { email, password, name } = req.body;
	
	try {  
		if (email && password && name) {
			const a = await users.create({ email: email, password: password, name: name});
			res.send({ msg: "가입 성공", data: a });
		} else {
			res.send({ msg: "email, password, name의 항목을 모두다 보내야합니다." });
		}
	} catch (error) {
		res.send({
			msg: "접속실패 error ",
			error: error,
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
	try {
		const existUser = await users.findByPk(id);
		if (existUser) { 
			//이렇게도됨 ㅋㅋ
			const upUser = await existUser.update({name : name});
			res.send({ msg: "업데이트 완료", data: upUser});
		} else {
			res.send({ msg: "id를 보내주세요...."});
		}
	} catch (error) {
		res.send(error);
	}
};



module.exports = { postUsersSingup, deleteUsers, patchUsers, postUsersLogin};
