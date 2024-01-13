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
const visitor_1 = __importDefault(require("../database/models/visitor"));
const user_1 = __importDefault(require("../database/models/user"));
const visitorComment_1 = __importDefault(require("../database/models/visitorComment"));
exports.default = {
    createVisitor: (userId, title, content, password, isPrivate) => __awaiter(void 0, void 0, void 0, function* () {
        return yield visitor_1.default.create({ userId, title, content, password, isPrivate });
    }),
    getAllVisitors: (offset, pageSize) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield visitor_1.default.findAndCountAll({
            attributes: { exclude: ['password'] },
            include: { model: user_1.default, attributes: ['name'] },
            order: [['createdAt', 'DESC']],
            offset,
            limit: pageSize,
        });
        return {
            visitors: result.rows,
            totalCount: result.count,
        };
    }),
    getLatestVisitor: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield visitor_1.default.findAll({
            order: [['createdAt', 'DESC']],
            attributes: ['id', 'title', 'createdAt'],
            limit: 5,
        });
        return result;
    }),
    getVisitorById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const visitor = yield visitor_1.default.findByPk(id, {
            include: [
                {
                    model: user_1.default,
                    attributes: ['name', 'status'],
                },
                {
                    model: visitorComment_1.default,
                    attributes: ['name', 'comment'],
                },
            ],
        });
        return visitor;
    }),
    visitorFindById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield visitor_1.default.findByPk(id);
    }),
    updateVisitor: (visitorId, title, content) => __awaiter(void 0, void 0, void 0, function* () {
        return yield visitor_1.default.update({ title, content }, {
            where: { id: visitorId },
        });
    }),
    deleteVisitor: (visitorId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield visitor_1.default.destroy({
            where: { id: visitorId },
        });
    }),
};
