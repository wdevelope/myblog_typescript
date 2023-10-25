const lifePostService = require('../services/lifePost');

module.exports = {
  // 게시글 생성
  create: async (req, res) => {
    const { title, content } = req.body;
    try {
      await lifePostService.create(title, content);
      res.status(201).json({ message: '게시글 생성 완료' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: err.message });
    }
  },

  // 게시글 전체조회
  get: async (req, res) => {
    try {
      const lifePost = await lifePostService.get();
      res.status(200).json(lifePost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: err.message });
    }
  },
};
