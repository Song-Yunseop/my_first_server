const { users } = require('../models');

module.exports = async (req, res, next) => {
    const existUserId = req.body.existUserId;

    try {
        if (!existUserId) {
            return res.status(401).send('로그인이 필요한 서비스입니다.');
        }
        const existUser = await users.findByPk(existUserId);
        if (!existUser) {
            return res.status(401).send('유저가 존재하지 않거나 토큰이 변조 되었습니다.');
        }
        res.locals.users = existUser;
        next();
    } catch (error) {
        return res.send({ msg: '서버에러 관리자 문의', data: error });
    }
};
