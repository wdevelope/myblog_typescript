const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const post = sequelize.define('post', {
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
  accessLevel: {
    type: DataTypes.INTEGER,
    defaultValue: 0, // 기본적으로 모든 사용자가 접근 가능
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = post;
