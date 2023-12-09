import express from 'express';
const router = express.Router();
import viewController from '../controllers/view';

// 조회수 업
router.post('/post/:postId', viewController.postViews);
// 조회수 업
router.post('/visitor/:visitorId', viewController.visitorViews);

export default router;
