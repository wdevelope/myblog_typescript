import { Request, Response } from 'express';
import subCategoryService from '../services/subCategory';

export default {
  // 서브 카테고리 생성
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const { categoryName, name, position } = req.body;
      const category = await subCategoryService.create(categoryName, name, position);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  },

  // 카테고리안의 서브 카테고리 조회
  getAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const { categoryId } = req.params;
      const categories = await subCategoryService.getAll(categoryId);
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 서브 카테고리 업데이트
  update: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updated = await subCategoryService.update(id, name);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 서브 카테고리 삭제
  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await subCategoryService.delete(id);
      res.status(200).json({ message: '서브 카테고리 삭제완료' });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
