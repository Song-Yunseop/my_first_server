const express = require("express");

const controller = require("../controller/users");
const mid = require('../middelware/mid');

const router = express.Router();

// /user
router.post("/login", controller.postUsersLogin);
router.post("/singup", controller.postUsersSingup);
router.delete("/", controller.deleteUsers);
router.patch("/", controller.patchUsers);
router.get("/", mid, controller.getuser);


module.exports = router;
