const viewService = require('../service/view');

// 조회수
module.exports = {
  views: async (req, res) => {
    const postId = req.params.postId;
    try {
      await viewService.views(postId);
      res.status(200).json({ message: '조회수 업' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
