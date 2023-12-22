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
const user_1 = __importDefault(require("../repositories/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = {
    register: (name, email, password, confirmPassword) => __awaiter(void 0, void 0, void 0, function* () {
        if (!confirmPassword) {
            throw new Error('비밀번호 확인이 필요합니다.');
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield user_1.default.register(name, email, hashedPassword);
        return newUser;
    }),
    login: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.default.findUserByEmail(email);
        if (!user) {
            throw new Error('존재하지 않는 회원입니다.');
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('아이디 또는 비밀번호가 틀렸습니다.');
        }
        const userInfo = yield user_1.default.findUser(email);
        const token = jsonwebtoken_1.default.sign({ userId: user.id, status: user.status }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIREIN,
        });
        return { token, userInfo };
    }),
    userInfo: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.default.findUserById(userId);
        if (!user) {
            throw new Error('존재하지 않는 회원입니다.');
        }
        return user;
    }),
    updateUser: (email, status) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.default.findUserByEmail(email);
        if (!user) {
            throw new Error('존재하지 않는 회원입니다.');
        }
        const updatedUser = yield user_1.default.updateUser(user.id, status);
        if (!updatedUser) {
            throw new Error('유저 상태변경 실패');
        }
        return user;
    }),
};
