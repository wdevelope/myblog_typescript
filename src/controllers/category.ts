import { Request, Response } from 'express';
import categoryService from '../services/category';

export default {
  // 카테고리 생성
  createCategory: async (req: Request, res: Response) => {
    try {
      const { name, position } = req.body;
      await categoryService.createCategory(name, position);
      res.status(201).json({ message: '카테고리 생성완료' });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  },

  // 모든 카테고리 조회
  getAllCategory: async (req: Request, res: Response) => {
    try {
      const categories = await categoryService.getAllCategory();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 특정 카테고리 조회
  getOneCategory: async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const category = await categoryService.getOneCategory(categoryId);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 카테고리 업데이트
  updateCategory: async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const { name } = req.body;
      const updated = await categoryService.updateCategory(categoryId, name);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 카테고리 삭제
  deleteCategory: async (req: Request, res: Response) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      await categoryService.deleteCategory(categoryId);
      console.log('cicd 테스트중');
      res.status(200).json({ message: '카테고리 삭제완료.' });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
