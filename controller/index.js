const express = require("express");
const mytest = require("./mytest");

const router = express.Router();

router.get("/test", mytest.getMytest);
router.delete("/test", mytest.deleteMytest);
router.post("/test", mytest.postMytest);

module.exports = router;
