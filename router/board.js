const express = require("express");
const controller = require("../controller/board");

const router = express.Router();

router.get("/", controller.getBoard);
router.post("/", controller.postBoard);
router.delete("/", controller.deleteBoard);
router.patch("/",controller.patchBoard);
router.get("/service", controller.postBoardService);
router.get("/getOne", controller.getOneBoard);

module.exports = router;
