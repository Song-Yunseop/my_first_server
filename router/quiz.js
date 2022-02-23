const express = require("express");
const controller = require("../controller/quiz");

const router = express.Router();

//여기 url 싹다 /로 만들고 
// getOne 부분만 냅두면 될듯
//다른 라우터도 공통
router.get("/", controller.getQuiz);
router.post("/", controller.postQuiz);
router.delete("/", controller.deleteQuiz);
router.patch("/",controller.patchQuiz);
router.get("/getOne", controller.getOneQuiz);
router.post("/post", controller.postQuiz2);
router.post("/post1", controller.postQuiz3);

module.exports = router;
