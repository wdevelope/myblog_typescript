"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../../config/mysql"));
class Image extends sequelize_1.Model {
}
Image.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
    },
    postId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: mysql_1.default,
    timestamps: false,
    modelName: 'image',
});
exports.default = Image;
