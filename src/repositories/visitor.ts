import Visitor from '../database/models/visitor';
import User from '../database/models/user';
import VisitorComment from '../database/models/visitorComment';

export default {
  // 방명록 생성
  createVisitor: async (userId: number, title: string, content: string, password: string, isPrivate: number) => {
    return await Visitor.create({ userId, title, content, password, isPrivate });
  },

  // 모든 방명록 조회
  getAllVisitors: async (offset: number, pageSize: number) => {
    const result = await Visitor.findAndCountAll({
      attributes: { exclude: ['password'] },
      include: { model: User, attributes: ['name'] },
      order: [['createdAt', 'DESC']],
      offset,
      limit: pageSize,
    });
    return {
      visitors: result.rows,
      totalCount: result.count,
    };
  },

  // 특정 방명록 조회
  getVisitorById: async (id: number) => {
    const visitor = await Visitor.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ['name', 'status'],
        },
        {
          model: VisitorComment,
          attributes: ['name', 'comment'],
        },
      ],
    });
    return visitor;
  },

  //  특정 방명록 아이디로 조회
  visitorFindById: async (id: number) => {
    return await Visitor.findByPk(id);
  },

  // 방명록 업데이트
  updateVisitor: async (visitorId: number, title: string, content: string) => {
    return await Visitor.update(
      { title, content },
      {
        where: { id: visitorId },
      }
    );
  },

  // 방명록 삭제
  deleteVisitor: async (visitorId: number) => {
    return await Visitor.destroy({
      where: { id: visitorId },
    });
  },
};
