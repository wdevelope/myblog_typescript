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
  getAllLife: async (offset, pageSize) => {
    const posts = await post.findAll({
      where: {
        category: 'life',
      },
      include: {
        model: user,
        attributes: ['name'],
      },
      order: [['createdAt', 'DESC']],
      offset, // 페이지 시작 위치
      limit: pageSize, // 페이지당 아이템 수
    });

    return posts;
  },

  // life 게시글 수 조회
  getCountLife: async () => {
    return await post.count({
      where: { category: 'life' },
    });
  },

  // study 게시글 전체 조회
  getAllStudy: async (offset, pageSize) => {
    const posts = await post.findAll({
      where: {
        category: 'study',
      },
      include: {
        model: user,
        attributes: ['name'],
      },
      order: [['createdAt', 'DESC']],
      offset,
      limit: pageSize,
    });

    return posts;
  },

  // study 게시글 수 조회
  getCountStudy: async () => {
    return await post.count({
      where: { category: 'study' },
    });
  },

  // hobby 게시글 전체 조회
  getAllHobby: async (offset, pageSize) => {
    const posts = await post.findAll({
      where: {
        category: 'hobby',
      },
      include: {
        model: user,
        attributes: ['name'],
      },
      order: [['createdAt', 'DESC']],
      offset,
      limit: pageSize,
    });

    return posts;
  },

  // hobby 게시글 수 조회
  getCountHobby: async () => {
    return await post.count({
      where: { category: 'hobby' },
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

  // 조회수
  views: async (postId) => {
    const updatedPost = await post.increment('views', { where: { id: postId } });

    return updatedPost;
  },
};
