const postRepository = require('../repositories/post');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, category) => {
    const newpost = await postRepository.create(userId, title, content, category);
    return newpost;
  },

  // life 게시글 전체조회
  getAllLife: async () => {
    const posts = await postRepository.getAllLife();
    return posts;
  },

  // 게시글 삭제
  delete: async (postId) => {
    const deletedpost = await postRepository.delete(postId);
    return deletedpost;
  },

  // 게시글 상세조회
  get: async (postId) => {
    const getPost = await postRepository.get(postId);
    return getPost;
  },
};
