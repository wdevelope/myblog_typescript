require('dotenv').config();
require('./database/models/user');

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.SERVER_PORT;
const sequelize = require('./database/mysql');

// db sync
(async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`${port} 서버가 켜졌습니다 👌`);
    });
  } catch (error) {
    console.error('DB 연결 오류:', error);
  }
})();
