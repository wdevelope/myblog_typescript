const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const view = sequelize.define('view', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = view;
