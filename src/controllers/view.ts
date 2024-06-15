import { NextFunction, Request, Response } from 'express';
import viewService from '../services/view';

export default {
  // 게시판 조회수 증가
  postViews: async (req: Request, res: Response, next: NextFunction) => {
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
      });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },

  // 방명록 조회수 증가
  visitorViews: async (req: Request, res: Response, next: NextFunction) => {
    const visitorId = parseInt(req.params.visitorId);
    const viewedVisitors = req.cookies.viewedVisitors || [];

    if (viewedVisitors.includes(visitorId)) {
      res.sendStatus(200);
      return;
    }
    try {
      await viewService.visitorViews(visitorId);
      res.cookie('viewedVisitors', [...viewedVisitors, visitorId], { maxAge: 1 * 24 * 60 * 60 * 1000 });
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },
};
