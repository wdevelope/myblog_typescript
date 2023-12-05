const subCategoryRepository = require('../repositories/subCategory');
const categoryRepository = require('../repositories/category');

module.exports = {
  // 서브 카테고리 생성
  create: async (categoryName, name, position) => {
    const category = await categoryRepository.findByName(categoryName);

    if (!category) {
      throw new Error('해당 이름의 카테고리를 찾을 수 없습니다.');
    }

    const createSubCategory = await subCategoryRepository.create(category.id, name, position);

    if (!createSubCategory) {
      throw new Error('서브카테고리 생성이 실패했습니다.');
    }

    return createSubCategory;
  },

  // 서브 카테고리안의 서브 카테고리 조회
  getAll: async (categoryId) => {
    return await subCategoryRepository.getAll(categoryId);
  },

  // 서브 카테고리 업데이트
  update: async (id, name) => {
    const findSubCategory = await subCategoryRepository.getOne(id);

    if (!findSubCategory) {
      throw new Error('업데이트할 카테고리가 존재하지 않습니다.');
    }

    const updatedSubCategory = await subCategoryRepository.update(id, name);

    if (!updatedSubCategory) {
      throw new Error('업데이트 실패');
    }

    return updatedSubCategory;
  },

  // 서브 카테고리 삭제
  delete: async (id) => {
    const findSubCategory = await subCategoryRepository.getOne(id);
    if (!findSubCategory) {
      throw new Error('삭제할 카테고리가 존재하지 않습니다.');
    }

    const deleteCategory = await subCategoryRepository.delete(id);

    if (!deleteCategory) {
      throw new Error('카테고리 삭제 실패');
    }

    return deleteCategory;
  },
};
