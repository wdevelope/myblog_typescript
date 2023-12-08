const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const postRouter = require('./post');
const imageRouter = require('./image');
const categoryRouter = require('./category');
const subCategoryRouter = require('./subCategory');
const visitorRouter = require('./visitor');
const viewRouter = require('./view');

// 유저
router.use('/api/user', userRouter);
// 카테고리
router.use('/api/category', categoryRouter);
// 서브 카테고리
router.use('/api/subCategory', subCategoryRouter);
// 게시판
router.use('/api/post', postRouter);
// 이미지 업로드
router.use('/api/image', imageRouter);
// 방명록
router.use('/api/visitor', visitorRouter);
// 조회수
router.use('/api/view', viewRouter);

module.exports = router;
