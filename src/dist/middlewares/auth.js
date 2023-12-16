"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdmin = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    const BearerToken = req.cookies.Authorization;
    if (!BearerToken) {
        res.status(401).json({ errorMessage: '토큰이 공급되지 않았습니다.' });
        return;
    }
    const token = BearerToken.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        res.locals.user = decoded;
        next();
    }
    catch (ex) {
        console.error('토큰 검증 오류:', ex);
        res.status(400).json({ errorMessage: '토큰 인증 실패' });
    }
};
exports.auth = auth;
const authAdmin = (req, res, next) => {
    const user = req.user;
    if (user && user.status !== 'admin') {
        res.status(403).json({ errorMessage: '관리자 권한이 필요합니다.' });
        return;
    }
    next();
};
exports.authAdmin = authAdmin;
