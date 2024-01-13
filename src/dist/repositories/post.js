"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../database/models/post"));
const user_1 = __importDefault(require("../database/models/user"));
const subCategory_1 = __importDefault(require("../database/models/subCategory"));
const sequelize_1 = require("sequelize");
exports.default = {
    createPost: (userId, title, content, subCategoryId, accessLevel) => __awaiter(void 0, void 0, void 0, function* () {
        return yield post_1.default.create({
            userId,
            title,
            content,
            subCategoryId,
            accessLevel,
        });
    }),
    getAllPost: (offset, pageSize, subCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield post_1.default.findAndCountAll({
            include: [
                {
                    model: user_1.default,
                    attributes: ['name'],
                },
                {
                    model: subCategory_1.default,
                    attributes: ['name'],
                },
            ],
            order: [['createdAt', 'DESC']],
            where: {
                subCategoryId: subCategoryId,
            },
            offset,
            limit: pageSize,
        });
        return {
            posts: result.rows,
            totalCount: result.count,
        };
    }),
    searchPost: (keyword, offset, pageSize) => __awaiter(void 0, void 0, void 0, function* () {
        const lowerKeyword = keyword.toLowerCase();
        const result = yield post_1.default.findAndCountAll({
            where: {
                title: sequelize_1.Sequelize.where(sequelize_1.Sequelize.fn('LOWER', sequelize_1.Sequelize.col('title')), {
                    [sequelize_1.Op.like]: `%${lowerKeyword}%`,
                }),
            },
            offset,
            limit: pageSize,
        });
        return {
            posts: result.rows,
            totalCount: result.count,
        };
    }),
    latestPost: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield post_1.default.findAll({
            order: [['createdAt', 'DESC']],
            attributes: ['id', 'title', 'createdAt'],
            limit: 7,
            include: [
                {
                    model: subCategory_1.default,
                    attributes: ['name'],
                },
            ],
        });
        return result;
    }),
    getSubCategory: (subCategoryName) => __awaiter(void 0, void 0, void 0, function* () {
        const subCategoryResult = yield subCategory_1.default.findOne({
            where: { name: subCategoryName },
            attributes: ['id'],
        });
        return subCategoryResult;
    }),
    updatePost: (id, title, content, accessLevel) => __awaiter(void 0, void 0, void 0, function* () {
        return yield post_1.default.update({
            title,
            content,
            accessLevel,
        }, {
            where: {
                id: id,
            },
        });
    }),
    deletePost: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield post_1.default.destroy({
            where: {
                id,
            },
        });
    }),
    getPost: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield post_1.default.findByPk(id, {
            include: {
                model: user_1.default,
                attributes: ['name', 'status'],
            },
        });
    }),
    postFindById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield post_1.default.findByPk(id);
    }),
};
