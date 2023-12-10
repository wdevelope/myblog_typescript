import { Request, Response } from 'express';
import visitorCommentService from '../services/visitorComment';

export default {
  // 방명록 댓글 생성
  visitorCommentCreate: async (req: Request, res: Response) => {
    try {
      const visitorId = parseInt(req.params.visitorId);
      const { comment } = req.body;
      await visitorCommentService.visitorCommentCreate(visitorId, comment);
      res.status(200).json({ message: '방명록 댓글 생성 완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },

  // 방명록 댓글 삭제
  visitorCommentDelete: async (req: Request, res: Response) => {
    try {
      const visitorCommentId = parseInt(req.params.visitorCommentId);
      await visitorCommentService.visitorCommentDelete(visitorCommentId);
      res.status(200).json({ message: '방명록 삭제 완료' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },
};
