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
        {
          model: subCategory,
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
      posts: result.rows, // 조회된 게시글
      totalCount: result.count, // 총 게시글 수
    };
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
};
