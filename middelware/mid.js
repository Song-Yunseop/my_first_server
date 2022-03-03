const { users } = require("../models");

module.exports = async (req, res, next) => {
    const exUserId = req.body.exUserId;
    try {
        if(!exUserId){
            return res.send({msg:"로그인이 필요한 시스탬 입니다."})
        }
        const exUsers = await users.findByPk(exUserId);
        if(!exUsers){
            return res.send({msg:"해당 토큰이 변조 또는 만료기간이 되었습니다."})
        }
        res.locals.user = exUsers;
        res.locals.ismytest = "가나다라마바사";
        next();
    } catch (error) {
        return res.send({msg: "알수없는 오류입니다.", data: error});
    }
};