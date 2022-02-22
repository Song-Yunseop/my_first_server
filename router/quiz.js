const express = require("express");
const controller = require("../controller/quiz");

const router = express.Router();

router.get("/get", controller.getQuiz);
router.post("/post", controller.postQuiz);
router.delete("/delete", controller.deleteQuiz);
router.patch("/patch",controller.patchQuiz);
router.get("/getOne", controller.getOneQuiz);

module.exports = router;
