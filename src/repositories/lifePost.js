const lifePost = require('../database/models/lifePost');
const user = require('../database/models/user');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content) => {
    await lifePost.create({
      title,
      content,
      userId,
    });
  },

  // 게시글 전체 조회
  get: async (req, res) => {
    const lifePosts = await lifePost.findAll({
      include: {
        model: user,
        attributes: ['name'],
      },
    });
    return lifePosts;
  },
};
