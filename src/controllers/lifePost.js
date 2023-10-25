const lifePostService = require('../services/lifePost');

module.exports = {
  create: async (req, res) => {
    const { title, content } = req.body;
    try {
      const lifePost = await lifePostService.create(title, content);
      res.status(201).json(lifePost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  get: async (req, res) => {
    try {
      const lifePost = await lifePostService.get();
      res.status(200).json(lifePost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
