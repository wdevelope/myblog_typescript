import SubCategory from '../database/models/subCategory';

export default {
  // 서브 카테고리 생성
  createSubCategory: async (categoryId: number, name: string, position: number) => {
    return await SubCategory.create({ categoryId, name, position });
  },

  // 카테고리안의 서브 카테고리 조회
  getAllSubCategory: async (categoryId: number) => {
    return await SubCategory.findAll({
      where: {
        categoryId,
      },
    });
  },

  // 특정 서브 카테고리 조회
  getOneSubCategory: async (id: number) => {
    return await SubCategory.findByPk(id);
  },

  // 서브 카테고리 업데이트
  updateSubCategory: async (id: number, name: string) => {
    return await SubCategory.update(
      { name },
      {
        where: { id },
      }
    );
  },

  // 서브 카테고리 삭제
  deleteSubCategory: async (id: number) => {
    return await SubCategory.destroy({ where: { id } });
  },
};
