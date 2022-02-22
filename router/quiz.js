const express = require("express");
const controller = require("../controller/quiz");

const router = express.Router();

//여기 url 싹다 /로 만들고 
// getOne 부분만 냅두면 될듯
//다른 라우터도 공통
router.get("/get", controller.getQuiz);
router.post("/post", controller.postQuiz);
router.delete("/delete", controller.deleteQuiz);
router.patch("/patch",controller.patchQuiz);
router.get("/getOne", controller.getOneQuiz);

module.exports = router;
