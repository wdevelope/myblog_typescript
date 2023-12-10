import visitorCommentRepository from '../repositories/visitorComment';

export default {
  // 방명록 댓글 생성
  visitorCommentCreate: async (visitorId: number, comment: string) => {
    const findVisitor = await visitorCommentRepository.visitorCommentFind(visitorId);

    if (!findVisitor) {
      throw new Error('해당 방명록을 찾을 수 없습니다.');
    }

    await visitorCommentRepository.visitorCommentCreate(visitorId, comment);
  },

  // 방명록 댓글 삭제
  visitorCommentDelete: async (visitorCommentId: number) => {
    const findVisitorComment = await visitorCommentRepository.visitorCommentFind(visitorCommentId);

    if (!findVisitorComment) {
      throw new Error('해당 방명록 댓글을 찾을 수 없습니다.');
    }

    return await visitorCommentRepository.visitorCommentDelete(visitorCommentId);
  },
};
