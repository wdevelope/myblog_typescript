const post = require('../database/models/post');
const visitor = require('../database/models/visitor');

module.exports = {
  // 게시글 조회수
  postViews: async (postId) => {
    return await post.increment('views', { where: { id: postId } });
  },

  // 방명록 조회수
  visitorViews: async (postId) => {
    return await visitor.increment('views', { where: { id: postId } });
  },
};
