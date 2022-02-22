const express = require("express");
const controller = require("../controller/users");

const router = express.Router();

router.get("/get", controller.getUsers);
router.post("/post", controller.postUsers);
router.delete("/delete", controller.deleteUsers);
router.patch("/patch",controller.patchUsers);
router.get("/getOne", controller.getOneUsers);

module.exports = router;
