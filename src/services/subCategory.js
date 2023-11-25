const categoryRepository = require('../repositories/category');

module.exports = {
  // 카테고리 생성
  create: async (name, position) => {
    const findName = await categoryRepository.create(name, position);

    if (!findName) {
      throw new Error('Category name is required');
    }

    return findName;
  },

  // 모든 카테고리 조회
  getAll: async () => {
    return await categoryRepository.getAll();
  },

  // 특정 카테고리 조회
  getOne: async (id) => {
    const category = await categoryRepository.getOne(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  },

  // 카테고리 업데이트
  update: async (id, name, parentId) => {
    const category = await categoryRepository.getOne(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return await categoryRepository.update(id, name, parentId);
  },

  // 카테고리 삭제
  delete: async (id) => {
    const category = await categoryRepository.getOne(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return await categoryRepository.delete(id);
  },
};
