const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const lifePost = require('./lifePost');

// 유저
router.use('/user', userRouter);
// 일기
router.use('/lifePost', lifePost);

module.exports = router;
