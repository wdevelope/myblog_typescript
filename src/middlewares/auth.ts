import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import cookieOptions from '../config/cookie';

interface UserPayload {
  userId: number;
  status: string;
}

// * 유저 검증 미들웨어
const auth = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET as string) as UserPayload;
      res.locals.user = decoded;
      return next();
    } catch (error) {
      next(error);
    }
  }

  if (!refreshToken) {
    return res.status(401).json({ errorMessage: '로그인을 해주세요.' });
  }

  try {
    const decodedRefreshToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as UserPayload;

    const newAccessToken = jwt.sign(
      { userId: decodedRefreshToken.userId, status: decodedRefreshToken.status },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.cookie('accessToken', newAccessToken, cookieOptions.accessToken);

    res.locals.user = jwt.verify(newAccessToken, process.env.JWT_SECRET as string) as UserPayload;
    next();
  } catch (ex) {
    console.error('리프레시 토큰 검증 오류:', ex);
    res.status(400).json({ errorMessage: '토큰 인증 실패' });
  }
};

// * 관리자 검증 미들웨어
const authAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user as UserPayload;
  if (!user || user.status !== 'admin') {
    res.status(403).json({ errorMessage: '관리자 권한이 필요합니다.' });
    return;
  }
  next();
};

const authOptional = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies.accessToken;

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET as string) as UserPayload;
      res.locals.user = decoded;
      next();
    } catch (error) {
      console.error('토큰 검증 오류:', error);
      // 토큰 검증 실패 시에도 요청은 계속 진행
      next();
    }
  } else {
    // 토큰이 없는 경우에도 요청은 계속 진행
    next();
  }
};

export { auth, authAdmin, authOptional };
