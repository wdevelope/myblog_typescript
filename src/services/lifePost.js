const lifePostRepository = require('../repositories/lifePost');

module.exports = {
  // 게시글 생성
  create: async (title, content) => {
    const newLifePost = await lifePostRepository.create(title, content);
    return newLifePost;
  },

  // 게시글 전체조회
  get: async () => {
    const posts = await lifePostRepository.get();
    return posts;
  },
};
