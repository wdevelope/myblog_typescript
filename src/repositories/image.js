const image = require('../database/models/image');

module.exports = {
  saveImageUrl: async (imageUrl) => {
    const newImage = await image.create({ imageUrl: imageUrl });
    return newImage.id;
  },
};
