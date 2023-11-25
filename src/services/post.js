const postRepository = require('../repositories/post');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, categoryId) => {
    const newpost = await postRepository.create(userId, title, content, categoryId);
    return newpost;
  },

  // post 전체조회 (페이지네이션)
  getAllpost: async (page) => {
    const pageSize = 15;
    const offset = (page - 1) * pageSize;

    const posts = await postRepository.getAllpost(offset, pageSize);

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

    if (!getPost) {
      throw new Error('게시글이 존재하지 않습니다.');
    }

    return getPost;
  },
};
