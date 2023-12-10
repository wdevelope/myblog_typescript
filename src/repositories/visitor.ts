import Visitor from '../database/models/visitor';
import User from '../database/models/user';
import VisitorComment from '../database/models/visitorComment.js';

export default {
  createVisitor: async (userId, title, content, password, isPrivate) => {
    return await Visitor.create({ userId, title, content, password, isPrivate });
  },

  getAllVisitors: async (offset, pageSize) => {
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

  getVisitorById: async (id) => {
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

  findById: async (id) => {
    return await Visitor.findOne({
      where: {
        id: id,
      },
    });
  },

  updateVisitor: async (id, title, content) => {
    return await Visitor.update(
      { title, content },
      {
        where: { id },
      }
    );
  },

  patch: async (id, title, content) => {
    return await Visitor.update(
      {
        title,
        content,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },

  deleteVisitor: async (id) => {
    return await Visitor.destroy({
      where: { id },
    });
  },

  findById: async (userId) => {
    return await Visitor.findOne({
      where: {
        id: userId,
      },
    });
  },
};
