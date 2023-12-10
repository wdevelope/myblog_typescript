import * as dotenv from 'dotenv';
dotenv.config();

import './database/relations';
import compression from 'compression';
import express, { Request, Response } from 'express';
import router from './routes';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import sequelize from './config/mysql';

const app = express();
// 미들웨어 설정
app.use(cookieParser());
app.use(express.json());
app.use(compression());

// cors 설정
app.use(
  cors({
    origin: [`https://${process.env.FNT_SERVER_PORT}`, 'http://localhost:8080'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    credentials: true,
  })
);

// API 라우트 설정
app.use(router);

// 프론트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// Vue Router를 위한 와일드카드 라우트
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(router);

// 서버 실행
app.listen(process.env.SERVER_PORT, () => {
  console.log(`서버가 켜졌습니다 👌`);
});
