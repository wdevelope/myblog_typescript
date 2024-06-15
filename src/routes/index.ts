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
router.use('/user', userRouter);
// 카테고리
router.use('/category', categoryRouter);
// 서브 카테고리
router.use('/subCategory', subCategoryRouter);
// 게시판
router.use('/post', postRouter);
// 방명록
router.use('/visitor', visitorRouter);
// 방명록 댓글
router.use('/visitorComment', visitorCommentRouter);
// 조회수
router.use('/view', viewRouter);

export default router;
