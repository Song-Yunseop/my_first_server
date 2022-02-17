const express = require("express");
const controller = require("../controller/mytest");

const router = express.Router();

router.get("/isbox", controller.getMytest);
router.post("/isbox", controller.postMytest);
router.delete("/isbox", controller.deleteMytest);
router.get("/isboxgetOne", controller.getOneMytest);
router.post("/isboxpost", controller.isboxpostTest);

module.exports = router;
