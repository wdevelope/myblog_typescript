const imageRepository = require('../repositories/image');

module.exports = {
  uploadImage: async (req, res) => {
    const file = req.file;

    const imageUrl = file.location;

    await imageRepository.saveImageUrl(imageUrl);

    return imageUrl;
  },
};
