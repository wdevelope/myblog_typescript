const express = require('express');
const router = express.Router();
const { auth, authAdmin } = require('../middlewares/auth');
const subCategoryController = require('../controllers/subCategory');

// 서브 카테고리 생성
router.post('/', [auth, authAdmin], subCategoryController.create);
// 카테고리안에 서브 카테고리 조회
router.get('/:categoryId', subCategoryController.getAll);
// 서브 카테고리 업데이트
router.patch('/:id', [auth, authAdmin], subCategoryController.update);
// 서브 카테고리 삭제
router.delete('/:id', [auth, authAdmin], subCategoryController.delete);

module.exports = router;
