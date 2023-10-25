const express = require('express');
const router = express.Router();
const lifePostController = require('../controllers/lifePost');

// 회원가입
router.post('/', lifePostController.create);
// 로그인
router.post('/', lifePostController.get);

module.exports = router;
