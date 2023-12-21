import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface UserPayload {
  userId: number;
  status: string;
}

// 유저 인증 체크
const auth = (req: Request, res: Response, next: NextFunction) => {
  const BearerToken = req.cookies.Authorization;
  if (!BearerToken) {
    res.status(401).json({ errorMessage: '로그인을 해주세요.' });
    return;
  }

  const token = BearerToken.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    res.locals.user = decoded;
    next();
  } catch (ex) {
    console.error('토큰 검증 오류:', ex);
    res.status(400).json({ errorMessage: '토큰 인증 실패' });
  }
};

// 관리자 권한 체크
const authAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user as UserPayload;
  if (!user || user.status !== 'admin') {
    res.status(403).json({ errorMessage: '관리자 권한이 필요합니다.' });
    return;
  }
  next();
};

export { auth, authAdmin };
