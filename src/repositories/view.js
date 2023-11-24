const user = require('../database/models/user');

module.exports = {
  // 조회수
  views: async (postId) => {
    const updatedPost = await life.increment('views', { where: { id: postId } });

    return updatedPost;
  },
};
