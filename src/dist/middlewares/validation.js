"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.login = exports.register = void 0;
const express_validator_1 = require("express-validator");
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        next();
    }
    else {
        res.status(400).json({
            errorMessage: errors.array().map((error) => error.msg),
        });
    }
};
exports.register = [
    (0, express_validator_1.body)('name').trim().notEmpty().withMessage('이름을 입력해주세요.'),
    (0, express_validator_1.body)('email').isEmail().normalizeEmail().withMessage('이메일 형식이 아닙니다. 확인해주세요.'),
    (0, express_validator_1.body)('password')
        .custom((value, { req }) => {
        if (value !== req.body.confirmPassword) {
            throw new Error('확인 비밀번호와 일치하지 않습니다.');
        }
        else {
            return value;
        }
    })
        .trim()
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/)
        .withMessage('숫자와 문자를 포함한 6자리 이상의 비밀번호를 입력해주세요.'),
    validate,
];
exports.login = [
    (0, express_validator_1.body)('email').isEmail().withMessage('이메일 형식이 아닙니다. 확인해주세요.'),
    (0, express_validator_1.body)('password')
        .trim()
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/)
        .withMessage('숫자와 문자를 포함한 6자리 이상의 비밀번호를 입력해주세요.'),
    validate,
];
exports.createPost = [
    (0, express_validator_1.body)('title').trim().notEmpty().withMessage('제목을 입력해주세요.'),
    (0, express_validator_1.body)('content').trim().isLength({ min: 5 }).withMessage('내용은 5글자 이상을 입력하셔야 합니다.'),
    validate,
];
