import SubCategory from '../database/models/subCategory';

export default {
  // 카테고리 생성
  create: async (categoryId: number, name: string, position: number) => {
    return await SubCategory.create({ categoryId, name, position });
  },

  // 카테고리안의 서브 카테고리 조회
  getAll: async (categoryId: number) => {
    return await SubCategory.findAll({
      where: {
        categoryId,
      },
    });
  },

  // 특정 카테고리 조회
  getOne: async (id: number) => {
    return await SubCategory.findByPk(id);
  },

  // 카테고리 업데이트
  update: async (id: number, name: string) => {
    return await SubCategory.update(
      { name },
      {
        where: { id },
      }
    );
  },

  // 카테고리 삭제
  delete: async (id: number) => {
    return await SubCategory.destroy({ where: { id } });
  },
};
