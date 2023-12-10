import express from 'express';
const router = express.Router();
import { auth, authAdmin } from '../middlewares/auth';
// import validation from '../middlewares/validation';
import subCategoryController from '../controllers/subCategory';

// 서브 카테고리 생성
router.post('/', [auth, authAdmin], subCategoryController.createSubCategory);
// 카테고리안에 서브 카테고리 조회
router.get('/:categoryId', subCategoryController.getAllSubCategory);
// 서브 카테고리 업데이트
router.patch('/:subCategoryId', [auth, authAdmin], subCategoryController.updateSubCategory);
// 서브 카테고리 삭제
router.delete('/:subCategoryId', [auth, authAdmin], subCategoryController.deleteSubCategory);

export default router;
