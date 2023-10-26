require('dotenv').config();
require('./database/relations');

const express = require('express');
const app = express();
const sequelize = require('./database/mysql');
const router = require('./routes');

app.use(express.json());
app.use(router);

// db sync
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
