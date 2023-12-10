import express from 'express';
const router = express.Router();

import userRouter from './user';
import postRouter from './post';
import categoryRouter from './category';
import subCategoryRouter from './subCategory';
import visitorRouter from './visitor';
import viewRouter from './view';
import visitorCommentRouter from './visitorComment';

// 유저
router.use('/api/user', userRouter);
// 카테고리
router.use('/api/category', categoryRouter);
// 서브 카테고리
router.use('/api/subCategory', subCategoryRouter);
// 게시판
router.use('/api/post', postRouter);
// 방명록
router.use('/api/visitor', visitorRouter);
// 방명록 댓글
router.use('/api/visitorComment', visitorCommentRouter);
// 조회수
router.use('/api/view', viewRouter);

export default router;
