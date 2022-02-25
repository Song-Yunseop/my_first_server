const express = require("express");
const controller = require("../controller/board");

const router = express.Router();

router.get("/", controller.getboard);
router.post("/", controller.postboard);
router.delete("/", controller.deleteboard);
router.patch("/",controller.patchboard);
router.get("/getOne", controller.getOneboard);

module.exports = router;
