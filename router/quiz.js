const express = require("express");
const controller = require("../controller/quiz");
const mid = require('../middelware/mid');

const router = express.Router();

// quize
router.get("/",mid ,controller.getQuiz);
router.post("/", controller.postQuiz);
router.delete("/", controller.deleteQuiz);
router.patch("/",controller.patchQuiz);
router.get("/getOne", controller.getOneQuiz);

module.exports = router;
