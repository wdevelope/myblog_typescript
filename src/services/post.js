const postRepository = require('../repositories/post');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, subCategoryId) => {
    const newpost = await postRepository.create(userId, title, content, subCategoryId);
    return newpost;
  },

  // post 전체조회 (페이지네이션)
  getAllpost: async (page, subCategoryId) => {
    const pageSize = 15;
    const offset = (page - 1) * pageSize;

    const { posts, totalCount } = await postRepository.getAllpost(offset, pageSize, subCategoryId);
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      posts,
      meta: {
        totalPages,
        currentPage: page,
        totalCount,
      },
    };
  },

  // 게시글 삭제
  delete: async (id) => {
    const deletedpost = await postRepository.delete(id);
    return deletedpost;
  },

  // 게시글 상세조회
  get: async (id) => {
    const getPost = await postRepository.get(id);

    if (!getPost) {
      throw new Error('게시글이 존재하지 않습니다.');
    }

    return getPost;
  },
};
