const express = require("express");
const controller = require("../controller/score");

const router = express.Router();

router.get("/", controller.getScore);
router.post("/", controller.postScore);
router.delete("/", controller.deleteScore);
router.patch("/",controller.patchScore);
router.get("/getOne", controller.getOneScore);

module.exports = router;
