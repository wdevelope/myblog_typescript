import Category from '../database/models/category';

export default {
  // 카테고리 생성
  createCategory: async (name: string, position: number) => {
    return await Category.create({ name, position });
  },

  // 모든 카테고리 조회
  getAllCategory: async (): Promise<Category[]> => {
    return await Category.findAll();
  },

  // 특정 카테고리 조회
  findByIdCategory: async (id: number) => {
    return await Category.findByPk(id);
  },

  // 카테고리 이름 조회
  findByNameCategory: async (name: string) => {
    return await Category.findOne({ where: { name } });
  },

  // 카테고리 업데이트
  updateCategory: async (id: number, name: string) => {
    const [affectedCount] = await Category.update(
      { name },
      {
        where: { id },
      }
    );

    return affectedCount; // 업데이트된 행의 수를 반환
  },

  // 카테고리 삭제
  deleteCategory: async (id: number) => {
    return await Category.destroy({
      where: { id: id },
    });
  },
};
