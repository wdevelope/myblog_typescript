const Visitor = require('../database/models/visitor');
const user = require('../database/models/user');

module.exports = {
  // 방명록 생성
  createVisitor: async (userId, title, content, password, isPrivate) => {
    return await Visitor.create({ userId, title, content, password, isPrivate });
  },

  // 방명록 전체조회
  getAllVisitors: async (offset, pageSize) => {
    const result = await Visitor.findAndCountAll({
      attributes: { exclude: ['password'] }, // 'password' 필드 제외
      include: { model: user, attributes: ['name'] },
      order: [['createdAt', 'DESC']],
      offset,
      limit: pageSize,
    });
    return {
      visitors: result.rows, // 조회된 게시글
      totalCount: result.count, // 총 게시글 수
    };
  },

  // 특정 방명록 조회
  getVisitorById: async (id) => {
    const visitor = await Visitor.findByPk(id, {
      include: {
        model: user,
        attributes: ['name', 'status'],
      },
    });
    return visitor;
  },

  // 방명록 조회
  findById: async (id) => {
    return await Visitor.findOne({
      where: {
        id: id,
      },
    });
  },

  // 방명록 업데이트
  updateVisitor: async (id, title, content) => {
    return await Visitor.update(
      { title, content },
      {
        where: { id },
      }
    );
  },

  // 방명록 삭제
  deleteVisitor: async (id) => {
    return await Visitor.destroy({
      where: { id },
    });
  },
};
