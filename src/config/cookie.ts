import * as dotenv from 'dotenv';
dotenv.config();

function getCookieOptions(env: string) {
  const isProduction = env === 'production';
  const sameSiteValue = (process.env.COOKIE_SAMESITE || 'strict').toLowerCase() as 'strict' | 'lax' | 'none';
  const domain = isProduction ? '.w-life.store' : undefined;
  return {
    // 엑세스 토큰
    accessToken: {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? sameSiteValue : 'lax',
      maxAge: 3600000, // 1시간
      domain,
    },
    // 리프레시 토큰
    refreshToken: {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? sameSiteValue : 'lax',
      maxAge: 604800000, // 7일
      domain,
    },
  };
}

const cookieOptions = getCookieOptions(process.env.NODE_ENV || 'development');

export default cookieOptions;
