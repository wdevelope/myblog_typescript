require('dotenv').config();
require('./database/relations');

const express = require('express');
const app = express();
const sequelize = require('./config/mysql');
const router = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// 프론트 연결
app.use(express.static(__dirname + '/public'));
app.get('/:pageName', (req, res) => {
  const pageName = req.params.pageName;
  res.sendFile(path.join(__dirname, `public/views/${pageName}.html`));
});

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//     credentials: true,
//   })
// );

app.use(cookieParser());
app.use(express.json());
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
