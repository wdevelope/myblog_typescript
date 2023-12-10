import subCategoryRepository from '../repositories/subCategory';
import categoryRepository from '../repositories/category';

export default {
  // 서브 카테고리 생성
  createSubCategory: async (categoryName: string, name: string, position: number) => {
    const category = await categoryRepository.findByNameCategory(categoryName);

    if (!category) {
      throw new Error('해당 이름의 카테고리를 찾을 수 없습니다.');
    }

    const createSubCategory = await subCategoryRepository.createSubCategory(category.id, name, position);

    if (!createSubCategory) {
      throw new Error('서브카테고리 생성이 실패했습니다.');
    }

    return createSubCategory;
  },

  // 서브 카테고리안의 서브 카테고리 조회
  getAllSubCategory: async (categoryId: number) => {
    return await subCategoryRepository.getAllSubCategory(categoryId);
  },

  // 서브 카테고리 업데이트
  updateSubCategory: async (subCategoryId: number, name: string) => {
    const findSubCategory = await subCategoryRepository.getOneSubCategory(subCategoryId);

    if (!findSubCategory) {
      throw new Error('업데이트할 카테고리가 존재하지 않습니다.');
    }

    const updatedSubCategory = await subCategoryRepository.updateSubCategory(subCategoryId, name);

    if (!updatedSubCategory) {
      throw new Error('업데이트 실패');
    }

    return updatedSubCategory;
  },

  // 서브 카테고리 삭제
  deleteSubCategory: async (subCategoryId: number) => {
    const findSubCategory = await subCategoryRepository.getOneSubCategory(subCategoryId);
    if (!findSubCategory) {
      throw new Error('삭제할 카테고리가 존재하지 않습니다.');
    }

    const deleteCategory = await subCategoryRepository.deleteSubCategory(subCategoryId);

    if (!deleteCategory) {
      throw new Error('카테고리 삭제 실패');
    }

    return deleteCategory;
  },
};
