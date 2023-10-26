const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).send('토큰이 공급되지 않았습니다.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('토큰 인증 실패');
  }
}

module.exports = auth;
