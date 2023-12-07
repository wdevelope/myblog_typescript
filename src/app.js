require('dotenv').config();
require('./database/relations');

const compression = require('compression');
const express = require('express');
const app = express();
const sequelize = require('./config/mysql');
const router = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

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
app.use(express.static('public'));

// Vue Router를 위한 와일드카드 라우트
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(router);

// DB 동기화 + 서버실행
(async () => {
  try {
    await sequelize.sync();
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`${process.env.SERVER_PORT} 서버가 켜졌습니다 👌`);
    });
  } catch (error) {
    console.error('DB 연결 오류:', error);
  }
})();
