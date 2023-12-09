import express from 'express';
const router = express.Router();
import { auth } from '../middlewares/auth';
import validation from '../middlewares/validation';
import postController from '../controllers/post';

// 게시글 생성
router.post('/', auth, validation.createPost, postController.create);
// 특정 카테고리 게시글 전체조회
router.get('/', postController.getAllpost);
// 게시글 수정
router.patch('/:id', auth, postController.patch);
// 게시글 삭제
router.delete('/:id', auth, postController.delete);
// 게시글 상세조회
router.get('/:id', postController.get);

export default router;
