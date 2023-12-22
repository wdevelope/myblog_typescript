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
const user_1 = __importDefault(require("../database/models/user"));
exports.default = {
    register: (name, email, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
        const userCheck = yield user_1.default.findOne({ where: { email } });
        if (userCheck) {
            throw new Error('이미 존재하는 유저입니다.');
        }
        return yield user_1.default.create({
            name,
            email,
            password: hashedPassword,
        });
    }),
    findUserByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_1.default.findOne({ where: { email } });
    }),
    findUser: (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_1.default.findOne({
            where: { email },
            attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'id'] },
        });
    }),
    findUserById: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const userInfo = yield user_1.default.findOne({
            attributes: ['name', 'email', 'status'],
            where: { id: userId },
        });
        return userInfo;
    }),
    updateUser: (userId, status) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = yield user_1.default.update({
            status: status,
        }, { where: { id: userId } });
        return updatedUser;
    }),
};
