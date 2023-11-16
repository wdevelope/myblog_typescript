const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const authMiddleware = require('../middlewares/auth');
const validation = require('../middlewares/validation');

// 게시글 생성
router.post('/', authMiddleware, validation.createPost, postController.create);
// life 게시글 전체조회
router.get('/life', postController.getAllLife);
// study 게시글 전체조회
router.get('/study', postController.getAllStudy);
// hobby 게시글 전체조회
router.get('/hobby', postController.getAllHobby);
// 게시글 삭제
router.delete('/:postId', authMiddleware, postController.delete);
// 게시글 상세조회
router.get('/:postId', postController.get);
// 조회수 증가
router.post('/:postId/views', postController.views);

module.exports = router;
