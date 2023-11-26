const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const postRouter = require('./post');
const imageRouter = require('./image');
const categoryRouter = require('./category');
const subCategoryRouter = require('./subCategory');

// 유저 관련 라우트
router.use('/api/user', userRouter);
// 카테고리 관련 라우트
router.use('/api/category', categoryRouter);
// 서브 카테고리 관련 라우트
router.use('/api/subCategory', subCategoryRouter);
// 게시판 관련 라우트
router.use('/api/post', postRouter);
// 이미지 업로드 관련 라우트
router.use('/api/image', imageRouter);

module.exports = router;
