const lifePost = require('../database/models/lifePost');
const user = require('../database/models/user');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content) => {
    return await lifePost.create({
      title,
      content,
      userId,
    });
  },

  // 게시글 삭제
  delete: async (postId) => {
    return await lifePost.destroy({
      where: {
        id: postId,
      },
    });
  },

  // 게시글 전체 조회
  get: async (req, res) => {
    return await lifePost.findAll({
      include: {
        model: user,
        attributes: ['name'],
      },
    });
  },
};
