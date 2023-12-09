const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const validation = require('../middlewares/validation');
const { auth, authAdmin } = require('../middlewares/auth');

// 회원가입
router.post('/register', validation.register, userController.register);
// 로그인
router.post('/login', validation.login, userController.login);
// 회원정보
router.get('/userInfo', auth, userController.userInfo);
// 유저상태변경
router.patch('/status', [auth, authAdmin], userController.updateUser);
// 로그아웃
router.post('/logout', auth, userController.logout);
// 로그인 확인
router.get('/check', auth, (req, res) => {
  res.status(200).json({ isLoggedIn: true });
});

module.exports = router;
