const post = require('../database/models/post');
const user = require('../database/models/user');
const subCategory = require('../database/models/subCategory');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, subCategoryId) => {
    return await post.create({
      userId,
      title,
      content,
      subCategoryId,
    });
  },

  // post 게시글 전체 조회
  getAllpost: async (offset, pageSize, subCategoryId) => {
    const result = await post.findAndCountAll({
      include: [
        {
          model: user,
          attributes: ['name'],
        },
      ],
      order: [['createdAt', 'DESC']],
      where: {
        subCategoryId,
      },

      offset, // 페이지 시작 위치
      limit: pageSize, // 페이지당 아이템 수
    });

    return {
      posts: result.rows,
      totalCount: result.count,
    };
  },

  //서브카테고리 이름 조회
  getSubCategory: async (subCategoryId) => {
    const subCategoryResult = await subCategory.findOne({
      where: { id: subCategoryId },
      attributes: ['name'],
    });
    return subCategoryResult;
  },

  // 게시글 수정
  patch: async (id, title, content) => {
    return await post.update(
      {
        title,
        content,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },

  // 게시글 삭제
  delete: async (id) => {
    return await post.destroy({
      where: {
        id: id,
      },
    });
  },

  // 게시글 상세 조회
  get: async (id) => {
    return await post.findByPk(id, {
      include: {
        model: user,
        attributes: ['name', 'status'],
      },
    });
  },

  // 게시글 조회
  findById: async (userId) => {
    return await post.findOne({
      where: {
        id: userId,
      },
    });
  },
};
