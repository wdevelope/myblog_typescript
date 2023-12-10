import express from 'express';
const router = express.Router();
import { auth, authAdmin } from '../middlewares/auth';
import categoryController from '../controllers/category';

// 카테고리 생성
router.post('/', [auth, authAdmin], categoryController.createCategory);
// 모든 카테고리 조회
router.get('/', categoryController.getAllCategory);
// 특정 카테고리 조회
router.get('/:categoryId', categoryController.getOneCategory);
// 카테고리 업데이트
router.patch('/:categoryId', [auth, authAdmin], categoryController.updateCategory);
// 카테고리 삭제
router.delete('/:categoryId', [auth, authAdmin], categoryController.deleteCategory);

export default router;
