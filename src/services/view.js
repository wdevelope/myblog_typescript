const viewRepository = require('../repositories/view');

module.exports = {
  // 게시글 조회수
  postViews: async (postId) => {
    const viewsPost = await viewRepository.postViews(postId);
    return viewsPost;
  },

  // 방명록 조회수
  visitorViews: async (visitorId) => {
    const viewsPost = await viewRepository.visitorViews(visitorId);
    return viewsPost;
  },
};
