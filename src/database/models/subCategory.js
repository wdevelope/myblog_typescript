const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const subCategory = sequelize.define(
  'subCategory',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = subCategory;
