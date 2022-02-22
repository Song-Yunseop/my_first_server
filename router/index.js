const express = require("express");
const mytest = require("./mytest");
const quiz = require("./quiz");
const score = require("./score");
const users = require("./users");

const router = express.Router();

router.use("/",[mytest])
router.use("/quiz",[quiz])
router.use("/score",[score])
router.use("/users",[users])

module.exports = router;
