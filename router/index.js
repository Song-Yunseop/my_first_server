const express = require("express");
const quiz = require("./quiz");
const users = require("./users");
const board = require("./board");

const router = express.Router();

router.use("/quiz",[quiz])
router.use("/users",[users])
router.use("/board",[board])

module.exports = router;
