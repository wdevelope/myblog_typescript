const lifePostRepository = require('../repositories/lifePost');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content) => {
    const newLifePost = await lifePostRepository.create(userId, title, content);
    return newLifePost;
  },

  // 게시글 전체조회
  get: async () => {
    const posts = await lifePostRepository.get();
    return posts;
  },
};
