import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface ExtendedRequest extends Request {
  user?: any;
}

// 유저 인증 체크
function auth(req: ExtendedRequest, res: Response, next: NextFunction): void {
  const BearerToken = req.cookies.Authorization;

  if (!BearerToken) {
    res.status(401).json({ errorMessage: '토큰이 공급되지 않았습니다.' });
    return;
  }

  const token = BearerToken.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded as any;
    next();
  } catch (ex) {
    console.error('토큰 검증 오류:', ex);
    res.status(400).json({ errorMessage: '토큰 인증 실패' });
  }
}

// 관리자 권한 체크
function authAdmin(req: ExtendedRequest, res: Response, next: NextFunction): void {
  if (req.user && req.user.status !== 'admin') {
    res.status(403).json({ errorMessage: '관리자 권한이 필요합니다.' });
    return;
  }
  next();
}

export { auth, authAdmin };
