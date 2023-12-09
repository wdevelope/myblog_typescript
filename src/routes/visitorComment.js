const express = require('express');
const router = express.Router();
const { auth, authAdmin } = require('../middlewares/auth');
const validation = require('../middlewares/validation');
const visitorCommentController = require('../controllers/visitorComment');

// 방명록 생성
router.post('/:visitorId', [auth, authAdmin], visitorCommentController.commentCreate);
// 방명록 삭제
router.delete('/:visitorCommentId', [auth, authAdmin], visitorCommentController.commentDelete);

module.exports = router;
