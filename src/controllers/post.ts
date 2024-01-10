import { Request, Response } from 'express';
import postService from '../services/post';

export default {
  // 게시글 생성
  createPost: async (req: Request, res: Response) => {
    try {
      const { title, content, subCategoryName, accessLevel } = req.body;
      const user = res.locals.user;
      await postService.createPost(user.userId, title, content, subCategoryName, accessLevel);
      res.status(201).json({ message: '게시글 생성 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 게시글 전체조회
  getAllPost: async (req: Request, res: Response) => {
    try {
      const subCategoryName = req.query.subCategoryName as string;
      const page = parseInt(req.query.page as string) || 1;
      const response = await postService.getAllPost(page, subCategoryName);
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 게시글 수정
  updatePost: async (req: Request, res: Response) => {
    try {
      const postId = parseInt(req.params.postId);
      const user = res.locals.user;
      const { title, content, accessLevel } = req.body;
      await postService.updatePost(postId, user.userId, title, content, accessLevel);
      res.status(200).json({ message: '게시글 수정 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 게시글 삭제
  deletePost: async (req: Request, res: Response) => {
    try {
      const postId = parseInt(req.params.postId);
      const user = res.locals.user;
      await postService.deletePost(postId, user.userId);
      res.status(200).json({ message: '게시글 삭제 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 게시글 상세조회
  getPost: async (req: Request, res: Response) => {
    try {
      const postId = parseInt(req.params.postId);
      const user = res.locals.user;
      const post = await postService.getPost(postId, user);
      res.status(200).json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
