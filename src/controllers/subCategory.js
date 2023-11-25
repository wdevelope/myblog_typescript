const categoryService = require('../services/category.js');

module.exports = {
  // 서브 카테고리 생성
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await categoryService.create(name, parentId);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  },

  // 모든 서브 카테고리 조회
  getAll: async (req, res) => {
    try {
      const categories = await categoryService.getAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 특정 서브 카테고리 조회
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.getOne(id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 서브 카테고리 업데이트
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updated = await categoryService.update(id, name, parentId);
      if (!updated) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 서브 카테고리 삭제
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await categoryService.delete(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
