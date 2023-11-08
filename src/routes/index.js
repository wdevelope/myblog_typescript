const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const post = require('./post');

// 유저
router.use('api/user', userRouter);
// 게시판
router.use('api/post', post);

module.exports = router;
