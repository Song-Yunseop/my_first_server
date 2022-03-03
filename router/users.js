const express = require('express');
const controller = require('../controller/user');
const mid = require('../middelWhere/authMiddleware');
const router = express.Router();

router.post('/login', controller.loginService);
router.post('/singup', controller.singupService);
router.get('/', mid, controller.getUserService);

module.exports = router;
