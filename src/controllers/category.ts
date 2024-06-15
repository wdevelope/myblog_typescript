import { Request, Response, NextFunction } from 'express';
import categoryService from '../services/category';

export default {
  // 카테고리 생성
  createCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, position } = req.body;
      await categoryService.createCategory(name, position);
      res.status(201).json({ message: '카테고리 생성완료' });
    } catch (error) {
      next(error);
    }
  },

  // 모든 카테고리 조회
  getAllCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await categoryService.getAllCategory();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },

  // 특정 카테고리 조회
  getOneCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const category = await categoryService.getOneCategory(categoryId);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },

  // 카테고리 업데이트
  updateCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const { name } = req.body;
      const updated = await categoryService.updateCategory(categoryId, name);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  },

  // 카테고리 삭제
  deleteCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      await categoryService.deleteCategory(categoryId);
      res.status(200).json({ message: '카테고리 삭제완료.' });
    } catch (error) {
      next(error);
    }
  },
};
