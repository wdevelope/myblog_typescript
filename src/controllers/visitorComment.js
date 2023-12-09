const visitorCommentService = require('../services/visitorComment.js');

module.exports = {
  // 방명록 댓글 생성
  commentCreate: async (req, res) => {
    try {
      const { visitorId } = req.params;
      const { comment } = req.body;
      await visitorCommentService.commentCreate(visitorId, comment);
      res.status(200).json({ message: '방명록 댓글 생성 완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 댓글 삭제
  commentDelete: async (req, res) => {
    try {
      const { visitorCommentId } = req.params;
      await visitorCommentService.commentDelete(visitorCommentId);
      res.status(200).json({ message: '방명록 삭제 완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
