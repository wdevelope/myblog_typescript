const lifePost = require('../database/models/lifePost');

module.exports = {
  // 게시글 생성
  create: async (title, content) => {
    await lifePost.create({
      title,
      content,
    });
  },

  // 게시글 전체 조회
  get: async (req, res) => {
    const lifePosts = await lifePost.findAll();
    return lifePosts;
  },
};
