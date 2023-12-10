"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../../config/mysql"));
class SubCategory extends sequelize_1.Model {
}
SubCategory.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false,
    },
    categoryId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: mysql_1.default,
    timestamps: false,
    modelName: 'subCategory',
});
exports.default = SubCategory;
