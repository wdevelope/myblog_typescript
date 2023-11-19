const postRepository = require('../repositories/post');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, category) => {
    const newpost = await postRepository.create(userId, title, content, category);
    return newpost;
  },

  // life 전체조회 (페이지네이션)
  getAllLife: async (page) => {
    const pageSize = 15;
    const offset = (page - 1) * pageSize;
    const totalItems = await postRepository.getCountLife();
    const totalPages = Math.ceil(totalItems / pageSize);
    const posts = await postRepository.getAllLife(offset, pageSize);

    return {
      posts,
      totalPages,
    };
  },

  // study 전체조회 (페이지네이션)
  getAllStudy: async (page) => {
    const pageSize = 15;
    const offset = (page - 1) * pageSize;
    const totalItems = await postRepository.getCountStudy();
    const totalPages = Math.ceil(totalItems / pageSize);
    const posts = await postRepository.getAllStudy(offset, pageSize);

    return {
      posts,
      totalPages,
    };
  },

  // hobby 전체조회 (페이지네이션)
  getAllHobby: async (page) => {
    const pageSize = 15;
    const offset = (page - 1) * pageSize;
    const totalItems = await postRepository.getCountHobby();
    const totalPages = Math.ceil(totalItems / pageSize);
    const posts = await postRepository.getAllHobby(offset, pageSize);

    return {
      posts,
      totalPages,
    };
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

  // 조회수
  views: async (postId) => {
    const viewsPost = await postRepository.views(postId);
    return viewsPost;
  },
};
