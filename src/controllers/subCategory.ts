import { NextFunction, Request, Response } from 'express';
import subCategoryService from '../services/subCategory';

export default {
  // 서브 카테고리 생성
  createSubCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { categoryName, name, position } = req.body;
      await subCategoryService.createSubCategory(categoryName, name, position);
      res.status(201).json({ message: '서브카테고리 생성 완료' });
    } catch (error) {
      next(error);
    }
  },

  // 카테고리안의 서브 카테고리 조회
  getAllSubCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const categories = await subCategoryService.getAllSubCategory(categoryId);
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },

  // 서브 카테고리 업데이트
  updateSubCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subCategoryId = parseInt(req.params.subCategoryId);
      const { name } = req.body;
      const updated = await subCategoryService.updateSubCategory(subCategoryId, name);
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  },

  // 서브 카테고리 삭제
  deleteSubCategory: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subCategoryId = parseInt(req.params.subCategoryId);
      await subCategoryService.deleteSubCategory(subCategoryId);
      res.status(200).json({ message: '서브 카테고리 삭제완료' });
    } catch (error) {
      next(error);
    }
  },
};
