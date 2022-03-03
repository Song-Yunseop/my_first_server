const { users } = require("../models");

module.exports = async (req, res, next) => {
    const existUserId = req.body.existUserId;

    try {
        if(!existUserId) {
            res.send("아이디를 입력해주세요");
        }
        const existUser = await users.findByPk(existUserId);
        if(!existUser) {
            res.send("유저가 존재하지 않거나 토큰이 변조 되었습니다.");
        }
        res.locals.users = existUser;
        next();
    } catch (error) {
        return res.send({msg: "서버에러 관리자 문의", data: error});
    }




    

}