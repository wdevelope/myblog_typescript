const post = require('../database/models/post');
const user = require('../database/models/user');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, categoryId) => {
    return await post.create({
      title,
      content,
      userId,
      categoryId,
    });
  },

  // post 게시글 전체 조회
  getAllpost: async (offset, pageSize) => {
    const posts = await post.findAll({
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

  // 게시글 삭제
  delete: async (postId) => {
    return await post.destroy({
      where: {
        id: postId,
      },
    });
  },

  // 게시글 상세 조회
  get: async (postId) => {
    return await post.findByPk(postId, {
      include: {
        model: user,
        attributes: ['name', 'status'],
      },
    });
  },
};
