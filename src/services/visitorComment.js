const visitorCommentRepository = require('../repositories/visitorComment.js');

module.exports = {
  // 방명록 댓글 생성
  commentCreate: async (visitorId, comment) => {
    const findVisitor = await visitorCommentRepository.commentFind(visitorId);

    if (!findVisitor) {
      throw new Error('해당 방명록을 찾을 수 없습니다.');
    }

    await visitorCommentRepository.commentCreate(visitorId, comment);
  },

  // 방명록 댓글 삭제
  commentDelete: async (visitorCommentId) => {
    const findVisitorComment = await visitorCommentRepository.visitorCommentFind(visitorCommentId);

    if (!findVisitorComment) {
      throw new Error('해당 방명록 댓글을 찾을 수 없습니다.');
    }

    return await visitorCommentRepository.commentDelete(visitorCommentId);
  },
};
