const viewService = require('../services/view');

// 조회수
module.exports = {
  // 게시판 조회수 증가
  postViews: async (req, res) => {
    const postId = req.params.postId;
    try {
      await viewService.postViews(postId);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 방명록 조회수 증가
  visitorViews: async (req, res) => {
    const postId = req.params.postId;
    try {
      await viewService.visitorViews(postId);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
