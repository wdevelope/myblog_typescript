const express = require('express');
const router = express.Router();
const { auth, authAdmin } = require('../middlewares/auth');
const categoryController = require('../controllers/category');

// 카테고리 생성
router.post('/', [auth, authAdmin], categoryController.create);
// 모든 카테고리 조회
router.get('/', categoryController.getAll);
// 특정 카테고리 조회
router.get('/:id', categoryController.getOne);
// 카테고리 업데이트
router.patch('/:id', [auth, authAdmin], categoryController.update);
// 카테고리 삭제
router.delete('/:id', [auth, authAdmin], categoryController.delete);

module.exports = router;
