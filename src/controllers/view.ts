import { Request, Response } from 'express';
import viewService from '../services/view';

export default {
  // 게시판 조회수 증가
  postViews: async (req: Request, res: Response): Promise<void> => {
    const postId = req.params.postId;
    try {
      await viewService.postViews(postId);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 방명록 조회수 증가
  visitorViews: async (req: Request, res: Response): Promise<void> => {
    const visitorId = req.params.visitorId;
    try {
      await viewService.visitorViews(visitorId);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
