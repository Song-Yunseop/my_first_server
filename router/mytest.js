const express = require("express");
const controller = require("../controller");

const router = express.Router();

router.get("/isbox", controller.mytest.getMytest);
router.post("/isbox", controller.mytest.postMytest);
router.delete("/isbox", controller.mytest.deleteMytest);
router.get("/isboxgetOne", controller.mytest.getOneMytest);
router.post("/isboxpost", controller.mytest.isboxpostTest);

module.exports = router;
