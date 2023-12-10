import viewRepository from '../repositories/view';

export default {
  // 게시글 조회수
  postViews: async (postId: number) => {
    const viewsPost = await viewRepository.postViews(postId);
    return viewsPost;
  },

  // 방명록 조회수
  visitorViews: async (visitorId: number) => {
    const viewsPost = await viewRepository.visitorViews(visitorId);
    return viewsPost;
  },
};
