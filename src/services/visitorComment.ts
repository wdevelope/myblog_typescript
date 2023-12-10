import visitorCommentRepository from '../repositories/visitorComment';

export default {
  // 방명록 댓글 생성
  commentCreate: async (visitorId: number, comment: string) => {
    const findVisitor = await visitorCommentRepository.commentFind(visitorId);

    if (!findVisitor) {
      throw new Error('해당 방명록을 찾을 수 없습니다.');
    }

    await visitorCommentRepository.commentCreate(visitorId, comment);
  },

  // 방명록 댓글 삭제
  commentDelete: async (visitorCommentId: number) => {
    const findVisitorComment = await visitorCommentRepository.visitorCommentFind(visitorCommentId);

    if (!findVisitorComment) {
      throw new Error('해당 방명록 댓글을 찾을 수 없습니다.');
    }

    return await visitorCommentRepository.commentDelete(visitorCommentId);
  },
};
