import express from 'express';
const router = express.Router();
import { auth, authAdmin } from '../middlewares/auth';
import visitorCommentController from '../controllers/visitorComment';

// 방명록 생성
router.post('/:visitorId', [auth, authAdmin], visitorCommentController.visitorCommentCreate);
// 방명록 삭제
router.delete('/:visitorCommentId', [auth, authAdmin], visitorCommentController.visitorCommentDelete);

export default router;
