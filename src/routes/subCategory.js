const express = require('express');
const router = express.Router();
const { auth, authAdmin } = require('../middlewares/auth');
const subCategoryController = require('../controllers/category');

// 모든 서브 카테고리 조회
router.get('/', subCategoryController.getAll);
// 특정 서브 카테고리 조회
router.get('/:id', subCategoryController.getOne);
// 서브 카테고리 생성
router.post('/', [auth, authAdmin], subCategoryController.create);
// 서브 카테고리 업데이트
router.put('/:id', [auth, authAdmin], subCategoryController.update);
// 서브 카테고리 삭제
router.delete('/:id', [auth, authAdmin], subCategoryController.delete);

module.exports = router;
