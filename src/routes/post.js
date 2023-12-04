const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const { auth, authAdmin } = require('../middlewares/auth');
const validation = require('../middlewares/validation');

// 게시글 생성
router.post('/', auth, validation.createPost, postController.create);
// 특정 카테고리 게시글 전체조회
router.get('/', postController.getAllpost);
// 게시글 삭제
router.delete('/:id', auth, postController.delete);
// 게시글 상세조회
router.get('/:id', postController.get);

module.exports = router;
