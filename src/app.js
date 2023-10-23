require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, () => console.log(`${port} 포트 서버 실행🔥 `));
