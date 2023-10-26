const express = require('express');
const router = express.Router();
const lifePostController = require('../controllers/lifePost');
const authMiddleware = require('../middlewares/auth');
const validation = require('../middlewares/validation');

// 게시글 생성
router.post('/', authMiddleware, validation.createPost, lifePostController.create);
// 게시글 전체조회
router.get('/', authMiddleware, lifePostController.get);

module.exports = router;
