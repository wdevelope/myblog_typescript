import { Request, Response } from 'express';
import visitorService from '../services/visitor';

export default {
  // 방명록 생성
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, content, password, isPrivate } = req.body;
      const userId = res.locals.user.userId;
      const newVisitor = await visitorService.createVisitor(userId, title, content, password, isPrivate);
      res.status(201).json(newVisitor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 모든 방명록 조회
  getAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const visitors = await visitorService.getAllVisitors(page);
      res.status(200).json(visitors);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 특정 방명록 조회
  getOne: async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const visitor = await visitorService.getVisitorById(id);
      res.status(200).json(visitor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 비밀번호 체크
  visitorPasswordCheck: async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const { password } = req.body;
      await visitorService.visitorPasswordCheck(id, password);
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 수정
  update: async (req: Request, res: Response): Promise<void> => {
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

  // 방명록 수정
  patch: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const userId = res.locals.user.userId;
      const { title, content } = req.body;
      await visitorService.patch(id, userId, title, content);
      res.status(200).json({ message: '방명록 수정 완료' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 방명록 삭제
  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      const userId = res.locals.user.userId;
      await visitorService.deleteVisitor(id, userId);
      res.status(200).json({ message: '방명록 삭제 완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
