const imageService = require('../services/image');

module.exports = {
  // 이미지 업로드
  uploadImage: async (req, res) => {
    try {
      const imageUrl = await imageService.uploadImage(req);
      res.json({ imageUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // 이미지 가져오기
  getImage: async (req, res) => {
    try {
      const imageId = req.params.id;
      const imageUrl = await imageService.getImage(imageId);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
