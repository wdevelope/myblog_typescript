import express from 'express';
const router = express.Router();
import { auth, authAdmin } from '../middlewares/auth';
import { register, login } from '../middlewares/validation';
import userController from '../controllers/user';

// 회원가입
router.post('/register', register, userController.register);
// 로그인
router.post('/login', login, userController.login);
// 회원정보
router.get('/userInfo', auth, userController.userInfo);
// 유저상태변경
router.patch('/status', [auth, authAdmin], userController.updateUser);
// 로그아웃
router.post('/logout', userController.logout);
// 로그인 확인
router.get('/check-auth', auth, userController.checkAuth);

export default router;
