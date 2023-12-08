const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const visitor = sequelize.define('visitor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true, // 비밀번호는 선택적
  },
  isPrivate: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // 기본값은 공개 게시글로 설정
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = visitor;
