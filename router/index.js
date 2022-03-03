const express = require('express');
const users = require('./users');
const board = require('./board');

const router = express.Router();

router.use('/users', [users]);
router.use('/board', board);

module.exports = router;
