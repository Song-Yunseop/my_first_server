const express = require('express');
const controller = require('../controller/board');
const mid = require('../middelWhere/authMiddleware');
const router = express.Router();

router
    .route('/')
    .get(controller.getBoardService)
    .post(mid, controller.postBoardService)
    .patch(mid, controller.patchBoardService);

router.route('/:boardId').delete(mid, controller.deleteBoardService);

module.exports = router;
