import VisitorComment from '../database/models/visitorComment.js';
import Visitor from '../database/models/visitor.js';

export default {
  commentCreate: async (visitorId, comment) => {
    return await VisitorComment.create({
      visitorId,
      comment,
    });
  },

  commentDelete: async (visitorCommentId) => {
    return await VisitorComment.destroy({
      where: { id: visitorCommentId },
    });
  },

  commentFind: async (visitorId) => {
    return await Visitor.findByPk(visitorId);
  },

  visitorCommentFind: async (visitorCommentId) => {
    return await VisitorComment.findByPk(visitorCommentId);
  },
};
