import express from 'express';
const router = express.Router();
import { auth } from '../middlewares/auth';
import visitorController from '../controllers/visitor';

// 방명록 생성
router.post('/', auth, visitorController.createVisitor);
// 방명록 전체조회
router.get('/', visitorController.getAllVisitor);
// 방명록 상세조회
router.get('/:visitorId', visitorController.getOneVisitor);
// 방명록 수정
router.patch('/:visitorId', auth, visitorController.updateVisitor);
// 방명록 삭제
router.delete('/:visitorId', auth, visitorController.deleteVisitor);
// 방명록 비밀번호 체크
router.post('/:visitorId/password', visitorController.PasswordCheckVisitor);

export default router;
