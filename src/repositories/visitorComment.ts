import VisitorComment from '../database/models/visitorComment.js';
import Visitor from '../database/models/visitor.js';

export default {
  // 방명록 댓글 생성
  visitorCommentCreate: async (visitorId: number, comment: string) => {
    return await VisitorComment.create({
      visitorId,
      comment,
    });
  },
  // 방명록 댓글 삭제
  visitorCommentDelete: async (visitorCommentId: number) => {
    return await VisitorComment.destroy({
      where: { id: visitorCommentId },
    });
  },
  // 특정 방명록 댓글 찾기
  visitorCommentFind: async (visitorId: number) => {
    return await Visitor.findByPk(visitorId);
  },
};
