const life = require('../database/models/life');
const user = require('../database/models/user');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, category) => {
    return await life.create({
      title,
      content,
      userId,
      category,
    });
  },

  // life 게시글 전체 조회
  getAllLife: async (offset, pageSize) => {
    const posts = await life.findAll({
      include: {
        model: user,
        attributes: ['name'],
      },
      order: [['createdAt', 'DESC']],
      offset, // 페이지 시작 위치
      limit: pageSize, // 페이지당 아이템 수
    });

    return posts;
  },

  // life 게시글 수 조회
  getCountLife: async () => {
    return await life.count({
      where: { category: 'life' },
    });
  },

  // 게시글 삭제
  delete: async (postId) => {
    return await life.destroy({
      where: {
        id: postId,
      },
    });
  },

  // 게시글 상세 조회
  get: async (postId) => {
    return await life.findOne({
      where: {
        id: postId,
      },
    });
  },
};
