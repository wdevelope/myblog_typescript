import { Sequelize } from 'sequelize';

// 데이터베이스 연결 설정
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  port: Number(process.env.DB_PORT),
  logging: false,  // 로깅 비활성화
});

export default sequelize;
