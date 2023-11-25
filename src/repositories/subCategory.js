const category = require('../database/models/category.js');

module.exports = {
  // 카테고리 생성
  create: async (name, position) => {
    return await category.create({ name, position });
  },

  // 모든 카테고리 조회
  getAll: async () => {
    const categories = await category.findAll();
    return categories;
  },

  // 특정 카테고리 조회
  getOne: async (id) => {
    const foundCategory = await category.findByPk(id);
    return foundCategory;
  },

  // 카테고리 업데이트
  update: async (id, name, parentId) => {
    const foundCategory = await category.findByPk(id);
    if (!foundCategory) {
      throw new Error('Category not found');
    }
    foundCategory.name = name;
    foundCategory.parentId = parentId;
    await foundCategory.save();
    return foundCategory;
  },

  // 카테고리 삭제
  delete: async (id) => {
    const foundCategory = await category.findByPk(id);
    if (!foundCategory) {
      throw new Error('Category not found');
    }
    await foundCategory.destroy();
    return { id };
  },
};
