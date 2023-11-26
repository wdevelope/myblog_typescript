const postService = require('../services/post');

module.exports = {
  // 게시글 생성
  create: async (req, res) => {
    try {
      const { title, content, subCategoryId } = req.body;
      const userId = req.user.userId;
      await postService.create(userId, title, content, subCategoryId);
      res.status(201).json({ message: '게시글 생성 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // post 게시글 전체조회
  getAllpost: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const response = await postService.getAllpost(page);
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 게시글 삭제
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await postService.delete(id);
      res.status(200).json({ message: '게시글 삭제 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 게시글 상세조회
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await postService.get(id);
      res.status(200).json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
