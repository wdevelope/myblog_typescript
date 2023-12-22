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
const user_1 = __importDefault(require("../services/user"));
exports.default = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, email, password, confirmPassword } = req.body;
        try {
            const newUser = yield user_1.default.register(name, email, password, confirmPassword);
            res.status(201).json(newUser);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const { token, userInfo } = yield user_1.default.login(email, password);
            res.cookie('Authorization', `Bearer ${token}`, { maxAge: 1 * 24 * 60 * 60 * 1000 });
            res.status(200).json(userInfo);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    userInfo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.userInfo(res.locals.user.userId);
            res.status(200).json(user);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, status } = req.body;
            const user = yield user_1.default.updateUser(email, status);
            res.status(200).json(user);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    logout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.clearCookie('Authorization');
            res.status(200).json({ message: '로그아웃 되었습니다.' });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
};
