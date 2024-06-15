import winston from 'winston';
import expressWinston from 'express-winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// 로그 파일 설정
const errorTransport = new DailyRotateFile({
  filename: 'logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true, // 오래된 파일 압축 저장
  maxSize: '20m', // 로그파일 최대 크기. 20MB 초과시 새로운 파일 생성
  maxFiles: '14d', // 14일이 지난 로그 파일은 자동으로 삭제
});

// 커스텀 로그 포맷 정의
const logFormat = winston.format.printf(({ level, message, timestamp, meta }) => {
  const { req } = meta || {};
  const url = req ? req.originalUrl : 'unknown URL';
  const method = req ? req.method : 'unknown method';
  return `${timestamp} ${level}: ${message} - Method: ${method} - URL: ${url}`;
});

const errorLogger = expressWinston.errorLogger({
  transports: [errorTransport, new winston.transports.Console()], // 로그를 기록할 대상 지정
  format: winston.format.combine(
    winston.format.timestamp(), // 타임스탬프 추가
    logFormat // 커스텀 포맷 사용
  ),
  // 로그 형식 지정
  meta: true, // 요청 정보를 meta로 포함
  msg: 'middlewareError: {{err.message}}', // 에러 메시지를 포함한 로그 메시지
});

export default errorLogger;
