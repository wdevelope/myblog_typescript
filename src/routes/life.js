const express = require('express');
const router = express.Router();
const lifeController = require('../controllers/life');
const { auth, authAdmin } = require('../middlewares/auth');
const validation = require('../middlewares/validation');

// 게시글 생성
router.post('/', auth, validation.createPost, lifeController.create);
// 게시글 전체조회
router.get('/', lifeController.getAllLife);
// 게시글 삭제
router.delete('/:postId', auth, lifeController.delete);
// 게시글 상세조회
router.get('/:postId', lifeController.get);

module.exports = router;
