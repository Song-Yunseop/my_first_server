const express = require("express");
const controller = require("../controller/mytest");

const router = express.Router();

router.get("/posting", controller.getMytest);
router.post("/posting", controller.postMytest);
router.delete("/posting", controller.deleteMytest);
router.get("/isboxgetOne", controller.getOneMytest);
router.post("/isboxpost", controller.isboxpostTest);
router.patch("/posting",controller.isboxPatch);

router.get("/postingdetail", controller.getMytest2);


module.exports = router;
