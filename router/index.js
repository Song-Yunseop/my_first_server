const express = require("express");
const mytest = require("./mytest");

const router = express.Router();

router.use("/",[mytest])

module.exports = router;
