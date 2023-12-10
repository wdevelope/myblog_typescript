import { Request, Response } from 'express';
import userService from '../services/user';

export default {
  // 회원가입
  register: async (req: Request, res: Response) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
      const newUser = await userService.register(name, email, password, confirmPassword);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 로그인
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const token = await userService.login(email, password);
      res.cookie('Authorization', `Bearer ${token}`, { maxAge: 3 * 24 * 60 * 60 * 1000 });
      res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 유저정보
  userInfo: async (req: Request, res: Response) => {
    try {
      const user = await userService.userInfo(res.locals.user.userId);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 유저상태 변경
  updateUser: async (req: Request, res: Response) => {
    try {
      const { email, status } = req.body;
      const user = await userService.updateUser(email, status);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 로그아웃
  logout: async (req: Request, res: Response) => {
    try {
      res.clearCookie('Authorization');
      res.status(200).json({ message: '로그아웃 되었습니다.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
