import * as dotenv from 'dotenv';
dotenv.config();

import './database/relations';
import express, { Request, Response } from 'express';
import router from './routes';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import errorLogger from './middlewares/errorLogger';
import corsOptions from './config/corsOptions';

const app = express();

// 미들웨어 설정
app.use(cookieParser());
app.use(express.json());

// CORS 설정
app.use(cors(corsOptions));

// API 라우트 설정
app.use('/api', router);

// 프론트 정적 파일
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// react Router를 위한 와일드카드 라우트
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// 로깅 미들웨어
app.use(errorLogger);

// 전역 에러 핸들링 미들웨어
app.use(errorHandler);

// 서버 실행
app.listen(process.env.SERVER_PORT, () => {
  console.log('서버가 켜졌습니다 👌');
});
