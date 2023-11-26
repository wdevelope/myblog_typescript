const visitorRepository = require('../repositories/visitor');

module.exports = {
  // 방명록 생성
  createVisitor: async (userId, title, content, password, isPrivate) => {
    const newVisitor = await visitorRepository.createVisitor(userId, title, content, password, isPrivate);

    if (!newVisitor) {
      throw new Error('방명록 생성 실패');
    }

    return newVisitor;
  },

  // 모든 방명록 조회
  getAllVisitors: async () => {
    const visitors = await visitorRepository.getAllVisitors();
    return visitors;
  },

  // 특정 방명록 조회
  getVisitorById: async (id) => {
    const visitor = await visitorRepository.getVisitorById(id);
    return visitor;
  },

  // 방명록 업데이트
  updateVisitor: async (id, title, content) => {
    const updatedVisitor = await visitorRepository.updateVisitor(id, title, content);
    return updatedVisitor;
  },

  // 방명록 삭제
  deleteVisitor: async (id) => {
    const deletedVisitor = await visitorRepository.deleteVisitor(id);
    return deletedVisitor;
  },
};
