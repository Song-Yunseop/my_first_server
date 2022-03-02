const express = require("express");
const controller = require("../controller/board");

const router = express.Router();


// /board
router.get("/", controller.getBoard);
router.post("/", controller.postBoardService);
router.delete("/", controller.deleteBoardSerive);
router.patch("/",controller.patchBoard);
router.get("/getOne", controller.getOneBoard);

module.exports = router;
