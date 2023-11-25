const lifeRepository = require('../repositories/life');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, category) => {
    const newpost = await lifeRepository.create(userId, title, content, category);
    return newpost;
  },

  // life 전체조회 (페이지네이션)
  getAllLife: async (page) => {
    const pageSize = 15;
    const offset = (page - 1) * pageSize;

    const posts = await lifeRepository.getAllLife(offset, pageSize);

    return {
      posts,
    };
  },

  // 게시글 삭제
  delete: async (postId) => {
    const deletedpost = await lifeRepository.delete(postId);
    return deletedpost;
  },

  // 게시글 상세조회
  get: async (postId) => {
    const getPost = await lifeRepository.get(postId);

    if (!getPost) {
      throw new Error('게시글이 존재하지 않습니다.');
    }

    return getPost;
  },
};
