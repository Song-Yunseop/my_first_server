const express = require("express");
const controller = require("../controller/users");

const router = express.Router();

// /user
router.post("/login", controller.postUsersLogin);
router.post("/singup", controller.postUsersSingup);
router.delete("/", controller.deleteUsers);
router.patch("/", controller.patchUsers);

module.exports = router;
