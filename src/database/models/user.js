const { DataTypes } = require('sequelize');
const sequelize = require('../../config/mysql');

const user = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
    validate: {
      isIn: {
        args: [['admin', 'verifiedUser', 'user']],
        msg: "유효하지 않은 역할입니다. 'admin', 'verifiedUser', 'user' 중 하나여야 합니다.",
      },
    },
  },
});

module.exports = user;
