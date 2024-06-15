// * 쿠키 설정
function getCookieOptions(env: string) {
  const isProduction = env === 'production';
  const sameSiteValue = (process.env.COOKIE_SAMESITE || 'strict').toLowerCase() as 'strict' | 'lax' | 'none';

  return {
    // 엑세스 토큰
    accessToken: {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? sameSiteValue : 'lax',
      maxAge: 3600000, // 1시간,
      // maxAge: 5000, // 5초
    },
    // 리프레시 토큰
    refreshToken: {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? sameSiteValue : 'lax',
      maxAge: 604800000, // 7일
    },
  };
}

const cookieOptions = getCookieOptions(process.env.NODE_ENV || 'development');

export default cookieOptions;
