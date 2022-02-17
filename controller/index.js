const express = require("express");
const mytest = require("./mytest");

const router = express.Router();

router.get("/isbox", mytest.getMytest);
router.post("/isbox", mytest.postMytest);
router.delete("/isbox", mytest.deleteMytest);
router.get("/isboxgetOne", mytest.getOneMytest);
router.post("/isboxpost", mytest.isboxpostTest);

module.exports = router;
