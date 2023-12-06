const visitorService = require('../services/visitor.js');

module.exports = {
  // 방명록 생성
  create: async (req, res) => {
    try {
      const { title, content, password, isPrivate } = req.body;
      const userId = req.user.userId;
      const newVisitor = await visitorService.createVisitor(userId, title, content, password, isPrivate);
      res.status(201).json(newVisitor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 모든 방명록 조회
  getAll: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const visitors = await visitorService.getAllVisitors(page);
      res.status(200).json(visitors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 특정 방명록 조회
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const visitor = await visitorService.getVisitorById(id);
      res.status(200).json(visitor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 수정
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { title, content } = req.body;
      const updatedVisitor = await visitorService.updateVisitor(id, title, content);

      res.status(200).json(updatedVisitor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 삭제
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedVisitor = await visitorService.deleteVisitor(id);
      res.status(200).json(deletedVisitor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
