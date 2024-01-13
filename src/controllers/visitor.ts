import { Request, Response } from 'express';
import visitorService from '../services/visitor';

export default {
  // 방명록 생성
  createVisitor: async (req: Request, res: Response) => {
    try {
      const { title, content, password, isPrivate } = req.body;
      const userId = res.locals.user.userId;
      await visitorService.createVisitor(userId, title, content, password, isPrivate);
      res.status(201).json({ message: '방명록 생성 완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 모든 방명록 조회
  getAllVisitor: async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const visitors = await visitorService.getAllVisitors(page);
      res.status(200).json(visitors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 최신 방명록 모음
  getLatestVisitor: async (req: Request, res: Response) => {
    try {
      const visitors = await visitorService.getLatestVisitor();
      res.status(200).json(visitors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 특정 방명록 조회
  getOneVisitor: async (req: Request, res: Response) => {
    try {
      const visitorId = parseInt(req.params.visitorId);
      const password = req.body.password;
      const visitor = await visitorService.getVisitorById(visitorId, password);
      res.status(200).json(visitor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 비밀번호 체크
  PasswordCheckVisitor: async (req: Request, res: Response) => {
    try {
      const visitorId = parseInt(req.params.visitorId);
      const { password } = req.body;
      await visitorService.visitorPasswordCheck(visitorId, password);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 수정
  updateVisitor: async (req: Request, res: Response) => {
    try {
      const visitorId = parseInt(req.params.visitorId);
      const { title, content } = req.body;
      const userId = res.locals.user.userId;
      await visitorService.updateVisitor(visitorId, title, content, userId);
      res.status(200).json({ message: '방명록 수정완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 삭제
  deleteVisitor: async (req: Request, res: Response) => {
    try {
      const visitorId = parseInt(req.params.visitorId);
      const userId = res.locals.user.userId;
      await visitorService.deleteVisitor(visitorId, userId);
      res.status(200).json({ message: '방명록 삭제 완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
