const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const visitorComment = sequelize.define('visitorComment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: 'w-life',
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = visitorComment;
