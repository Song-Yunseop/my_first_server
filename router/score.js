const express = require("express");
const controller = require("../controller/score");

const router = express.Router();

router.get("/get", controller.getScore);
router.post("/post", controller.postScore);
router.delete("/delete", controller.deleteScore);
router.patch("/patch",controller.patchScore);
router.get("/getOne", controller.getOneScore);

module.exports = router;
