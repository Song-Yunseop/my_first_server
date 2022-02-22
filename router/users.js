const express = require("express");
const controller = require("../controller/users");

const router = express.Router();

router.get("/", controller.getUsers);
router.post("/", controller.postUsers);
router.delete("/", controller.deleteUsers);
router.patch("/",controller.patchUsers);
router.get("/getOne", controller.getOneUsers);

module.exports = router;
