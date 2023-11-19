const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const image = sequelize.define('image', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = image;
