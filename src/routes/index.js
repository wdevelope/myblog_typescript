const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const lifeRouter = require('./life');
const imageRouter = require('./image');

// 유저 관련 라우트
router.use('/api/user', userRouter);
// life 게시판 관련 라우트
router.use('/api/life', lifeRouter);
// 이미지 업로드 관련 라우트
router.use('/api/image', imageRouter);

module.exports = router;
