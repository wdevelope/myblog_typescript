const subCategory = require('../database/models/subCategory.js');

module.exports = {
  // 카테고리 생성
  create: async (categoryId, name, position) => {
    return await subCategory.create({ categoryId, name, position });
  },

  // 카테고리안의 서브 카테고리 조회
  getAll: async (categoryId) => {
    return await subCategory.findAll({
      where: {
        categoryId,
      },
    });
  },

  // 특정 카테고리 조회
  getOne: async (id) => {
    return await subCategory.findByPk(id);
  },

  // 카테고리 업데이트
  update: async (id, name) => {
    return await subCategory.update(
      { name },
      {
        where: { id },
      }
    );
  },

  // 카테고리 삭제
  delete: async (id) => {
    return await subCategory.destroy({ where: { id } });
  },
};
