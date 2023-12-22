import { Request, Response } from 'express';
import viewService from '../services/view';

export default {
  // 게시판 조회수 증가
  postViews: async (req: Request, res: Response) => {
    const postId = parseInt(req.params.postId);
    const viewedPost = req.cookies.viewedPost || [];

    if (viewedPost.includes(postId)) {
      res.sendStatus(200);
      return;
    }

    try {
      await viewService.postViews(postId);
      res.cookie('viewedPost', [...viewedPost, postId], {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        secure: true, // HTTPS 연결에서만 전송
      });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 방명록 조회수 증가
  visitorViews: async (req: Request, res: Response) => {
    const visitorId = parseInt(req.params.visitorId);
    const viewedVisitors = req.cookies.viewedVisitors || [];

    if (viewedVisitors.includes(visitorId)) {
      res.sendStatus(200);
      return;
    }
    try {
      await viewService.visitorViews(visitorId);
      res.cookie('viewedVisitors', [...viewedVisitors, visitorId], { maxAge: 1 * 24 * 60 * 60 * 1000, secure: true });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
