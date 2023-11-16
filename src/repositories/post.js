const post = require('../database/models/post');
const user = require('../database/models/user');

module.exports = {
  // 게시글 생성
  create: async (userId, title, content, category) => {
    return await post.create({
      title,
      content,
      userId,
      category,
    });
  },

  // life 게시글 전체 조회
  getAllLife: async () => {
    return await post.findAll({
      where: {
        category: 'life',
      },
      include: {
        model: user,
        attributes: ['name'],
      },
    });
  },

  // study 게시글 전체 조회
  getAllStudy: async () => {
    return await post.findAll({
      where: {
        category: 'study',
      },
      include: {
        model: user,
        attributes: ['name'],
      },
    });
  },

  // life 게시글 전체 조회
  getAllHobby: async () => {
    return await post.findAll({
      where: {
        category: 'hobby',
      },
      include: {
        model: user,
        attributes: ['name'],
      },
    });
  },

  // 게시글 삭제
  delete: async (postId) => {
    return await post.destroy({
      where: {
        id: postId,
      },
    });
  },

  // 게시글 상세 조회
  get: async (postId) => {
    return await post.findOne({
      where: {
        id: postId,
      },
    });
  },
};
