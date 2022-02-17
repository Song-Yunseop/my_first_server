const express = require("express");
const mytest = require("./mytest");

const router = express.Router();

router.get("/isbox", mytest.getMytest);
// router.get("/isbox/:id/:istest", mytest.getMytest);

router.post("/isbox", mytest.postMytest);
router.delete("/isbox/:id", mytest.deleteMytest);
router.get("/isboxgetOne", mytest.getOneMytest);
router.post("/isboxpost", mytest.isboxpostTest);
router.patch("/isbox", mytest.isboxPatch);

module.exports = router;
