const { users } = require('../models');

const loginService = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.send({ msg: '이메일 또는 패스워드를 넣어주세요.!', success: false });
  }
  try {
    const existUser = await users.findOne({ where: { email } });
    if (!existUser) {
      return res.send({ msg: '해당 이메일이 존재하지 않습니다.', success: false });
    }
    if (existUser.password !== password) {
      return res.send({ msg: '비밀번호가 틀렷습니다.', success: false });
    }
    return res.send({ msg: '로그인 성공', success: true, data: existUser });
  } catch (error) {
    return res.send({ msg: '알수없는 에러', success: false, error });
  }
};

const singupService = async (req, res) => {
  const { email, password, password2, name } = req.body;
  if (!email && !password && !password2 && !name) {
    return res.send({ msg: '입력값을 전부다 채워주세요..!', success: false });
  }
  if (password !== password2) {
    return res.send({ msg: '페스워드가 일치하지 않습니다.', success: false });
  }
  try {
    await users.create({ email, password, name });
    return res.send({ msg: '회원가입 성공', success: true });
  } catch (error) {
    return res.send({ msg: '알수없는 에러', success: false, error });
  }
};

const getUserService = async (req, res) => {
  return res.send({ msg: '성공', success: true, data: res.locals.users });
};

module.exports = { loginService, singupService, getUserService };
