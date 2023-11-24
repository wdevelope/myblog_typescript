const viewRepository = require('../repositories/viewRepository');

module.exports = {
  // 조회수
  views: async (postId) => {
    const viewsPost = await lifeRepository.views(postId);
    return viewsPost;
  },
};
