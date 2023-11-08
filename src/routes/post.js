const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const authMiddleware = require('../middlewares/auth');
const validation = require('../middlewares/validation');

// 게시글 생성
router.post('/', authMiddleware, validation.createPost, postController.create);
// 게시글 삭제
router.delete('/:postId', authMiddleware, postController.delete);
// 게시글 전체조회
router.get('/', authMiddleware, postController.get);

module.exports = router;
