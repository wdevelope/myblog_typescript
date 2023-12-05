const category = require('../database/models/category.js');

module.exports = {
  // 카테고리 생성
  create: async (name, position) => {
    return await category.create({ name, position });
  },

  // 모든 카테고리 조회
  getAll: async () => {
    return await category.findAll();
  },

  // 특정 카테고리 조회
  getId: async (id) => {
    return await category.findByPk(id);
  },

  // 카테고리 이름 조회
  findByName: async (name) => {
    return await category.findOne({ where: { name } });
  },

  // 카테고리 업데이트
  update: async (id, name) => {
    return await category.update(
      { name },
      {
        where: { id },
      }
    );
  },

  // 카테고리 삭제
  delete: async (id) => {
    return await category.destroy({
      where: { id: id },
    });
  },
};
