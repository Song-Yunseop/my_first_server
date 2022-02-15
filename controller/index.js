const express = require("express");
const mytest = require("./mytest");

const router = express.Router();

router.get("/test", mytest.test2);
router.delete("/test", mytest.test3);
router.post("/test", mytest.test4);

module.exports = router;
