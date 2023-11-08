const postRepository = require('../repositories/post');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, category) => {
    const newpost = await postRepository.create(userId, title, content, category);
    return newpost;
  },

  // 게시글 삭제
  delete: async (postId) => {
    const deletedpost = await postRepository.delete(postId);
    return deletedpost;
  },

  // 게시글 전체조회
  get: async () => {
    const posts = await postRepository.get();
    return posts;
  },
};
