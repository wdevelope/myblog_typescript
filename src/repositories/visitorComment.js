const visitorComment = require('../database/models/visitorComment.js');
const Visitor = require('../database/models/visitor');

module.exports = {
  // 방명록 댓글 생성
  commentCreate: async (visitorId, comment) => {
    return await visitorComment.create({
      visitorId,
      comment,
    });
  },

  // 방명록 댓글 삭제
  commentDelete: async (visitorCommentId) => {
    return await visitorComment.destroy({
      where: { id: visitorCommentId },
    });
  },

  // 방명록 찾기
  commentFind: async (visitorId) => {
    return await Visitor.findByPk(visitorId);
  },

  // 방명록 댓글 찾기
  visitorCommentFind: async (visitorCommentId) => {
    return await visitorComment.findByPk(visitorCommentId);
  },
};
