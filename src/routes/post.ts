import express from 'express';
const router = express.Router();
import { auth, authAdmin } from '../middlewares/auth';
import { createPost } from '../middlewares/validation';
import postController from '../controllers/post';

// 게시글 생성
router.post('/', [auth, authAdmin], createPost, postController.createPost);
// 특정 서브 카테고리 게시글 전체조회
router.get('/', postController.getAllPost);
// 게시글 수정
router.patch('/:postId', [auth, authAdmin], postController.updatePost);
// 게시글 삭제
router.delete('/:postId', [auth, authAdmin], postController.deletePost);
// 게시글 상세조회
router.get('/:postId', postController.getPost);

export default router;
