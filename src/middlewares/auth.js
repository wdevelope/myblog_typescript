const jwt = require('jsonwebtoken');

// 유저 인증 체크
function auth(req, res, next) {
  const BearerToken = req.cookies.Authorization;

  if (!BearerToken) {
    return res.status(401).json({ errorMessage: '토큰이 공급되지 않았습니다.' });
  }

  const token = BearerToken.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    console.error('토큰 검증 오류:', ex);
    res.status(400).json({ errorMessage: '토큰 인증 실패' });
  }
}

// 관리자 권한 체크
function authAdmin(req, res, next) {
  if (req.user.status !== 'admin') {
    return res.status(403).json({ errorMessage: '관리자 권한이 필요합니다.' });
  }
  next();
}

module.exports = {
  auth,
  authAdmin,
};
