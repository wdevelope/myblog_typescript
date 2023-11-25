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
    const category = await categoryRepository.getId(id);

    if (!category) {
      throw new Error('카테고리가 존재하지 않습니다.');
    }

    return category;
  },

  // 카테고리 업데이트
  update: async (id, name) => {
    const category = await categoryRepository.getId(id);

    if (!category) {
      throw new Error('업데이트할 카테고리가 존재하지 않습니다.');
    }

    const updatedCategory = await categoryRepository.update(id, name);

    if (!updatedCategory) {
      throw new Error('업데이트 실패');
    }

    return updatedCategory;
  },

  // 카테고리 삭제
  delete: async (id) => {
    const category = await categoryRepository.getId(id);

    if (!category) {
      throw new Error('삭제할 카테고리가 존재하지 않습니다.');
    }

    const deleteCategory = await categoryRepository.delete(id);

    if (!deleteCategory) {
      throw new Error('카테고리 삭제에 실패했습니다.');
    }

    return;
  },
};
