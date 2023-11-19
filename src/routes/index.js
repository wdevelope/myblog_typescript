const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const postRouter = require('./post');
const imageRouter = require('./image');

// 유저 관련 라우트
router.use('/api/user', userRouter);
// 게시판 관련 라우트
router.use('/api/post', postRouter);
// 이미지 업로드 관련 라우트
router.use('/api/image', imageRouter);

module.exports = router;
