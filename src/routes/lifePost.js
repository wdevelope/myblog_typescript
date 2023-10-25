const express = require('express');
const router = express.Router();
const lifePostController = require('../controllers/lifePost');

// 게시글 생성
router.post('/', lifePostController.create);
// 게시글 전체조회
router.get('/', lifePostController.get);

module.exports = router;
