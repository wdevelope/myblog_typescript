"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../../config/mysql"));
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    accessLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    views: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    subCategoryId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: mysql_1.default,
    modelName: 'post',
});
exports.default = Post;
