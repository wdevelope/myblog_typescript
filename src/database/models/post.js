const { DataTypes } = require('sequelize');
const sequelize = require('../mysql');

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
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['life', 'study', 'hobby']],
    },
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = post;
