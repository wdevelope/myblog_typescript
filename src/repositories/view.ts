import Post from '../database/models/post';
import Visitor from '../database/models/visitor';

export default {
  // 게시글 조회수 증가
  postViews: async (postId: number) => {
    return await Post.increment('views', { where: { id: postId } });
  },

  // 방명록 조회수 증가
  visitorViews: async (visitorId: number) => {
    return await Visitor.increment('views', { where: { id: visitorId } });
  },
};
