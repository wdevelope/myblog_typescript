const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const validation = require('../middlewares/validation');

// 회원가입
router.post('/register', validation.register, userController.register);
// 로그인
router.post('/login', validation.login, userController.login);

module.exports = router;
