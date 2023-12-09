import express from 'express';
const router = express.Router();
import { auth } from '../middlewares/auth';
import visitorController from '../controllers/visitor';

// 방명록 생성
router.post('/', auth, visitorController.create);
// 방명록 전체조회
router.get('/', visitorController.getAll);
// 방명록 상세조회
router.get('/:id', visitorController.getOne);
// 방명록 수정
router.patch('/:id', auth, visitorController.patch);
// 방명록 삭제
router.delete('/:id', auth, visitorController.delete);
// 방명록 비밀번호 체크
router.post('/:id/password', visitorController.visitorPasswordCheck);

export default router;
