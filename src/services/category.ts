import categoryRepository from '../repositories/category';
import Category from '../database/models/category';

export default {
  // 카테고리 생성
  createCategory: async (name: string, position: number): Promise<Category> => {
    const createCategory = await categoryRepository.createCategory(name, position);

    if (!createCategory) {
      throw new Error('카테고리 생성에 실패했습니다.');
    }

    return createCategory;
  },

  // 모든 카테고리 조회
  getAllCategory: async (): Promise<Category[]> => {
    return await categoryRepository.getAllCategory();
  },

  // 특정 카테고리 조회
  getOneCategory: async (categoryId: number): Promise<Category> => {
    const category = await categoryRepository.findByIdCategory(categoryId);

    if (!category) {
      throw new Error('카테고리가 존재하지 않습니다.');
    }

    return category;
  },

  // 카테고리 업데이트
  updateCategory: async (categoryId: number, name: string): Promise<boolean> => {
    const category = await categoryRepository.findByIdCategory(categoryId);

    if (!category) {
      throw new Error('업데이트할 카테고리가 존재하지 않습니다.');
    }

    const updateResult = await categoryRepository.updateCategory(categoryId, name);

    if (updateResult[0] === 1) {
      return true; // 업데이트 성공
    } else {
      throw new Error('카테고리 이름이 그대로인데 변경좀');
    }
  },

  // 카테고리 삭제
  deleteCategory: async (categoryId: number) => {
    const category = await categoryRepository.findByIdCategory(categoryId);

    if (!category) {
      throw new Error('삭제할 카테고리가 존재하지 않습니다.');
    }

    const deleteCategory = await categoryRepository.deleteCategory(categoryId);

    if (!deleteCategory) {
      throw new Error('카테고리 삭제에 실패했습니다.');
    }

    return;
  },
};
