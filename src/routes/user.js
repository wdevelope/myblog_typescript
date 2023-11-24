const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const validation = require('../middlewares/validation');
const authMiddleware = require('../middlewares/auth');

// 회원가입
router.post('/register', validation.register, userController.register);
// 로그인
router.post('/login', validation.login, userController.login);
// 로그인 확인
router.get('/check', authMiddleware, (req, res) => {
  res.status(200).json({ isLoggedIn: true });
});

module.exports = router;
