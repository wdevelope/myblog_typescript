const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ errorMessage: '토큰이 공급되지 않았습니다.' });
  }

  const token = authorizationHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ errorMessage: '토큰 인증 실패' });
  }
}

module.exports = auth;
