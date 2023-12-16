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
const visitor_1 = __importDefault(require("../services/visitor"));
exports.default = {
    createVisitor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, content, password, isPrivate } = req.body;
            const userId = res.locals.user.userId;
            yield visitor_1.default.createVisitor(userId, title, content, password, isPrivate);
            res.status(201).json({ message: '방명록 생성 완료' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    getAllVisitor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const page = parseInt(req.query.page) || 1;
            const visitors = yield visitor_1.default.getAllVisitors(page);
            res.status(200).json(visitors);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    getOneVisitor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const visitorId = parseInt(req.params.visitorId);
            const visitor = yield visitor_1.default.getVisitorById(visitorId);
            res.status(200).json(visitor);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    PasswordCheckVisitor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const visitorId = parseInt(req.params.visitorId);
            const { password } = req.body;
            yield visitor_1.default.visitorPasswordCheck(visitorId, password);
            res.sendStatus(200);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    updateVisitor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const visitorId = parseInt(req.params.visitorId);
            const { title, content } = req.body;
            const userId = res.locals.user.userId;
            yield visitor_1.default.updateVisitor(visitorId, title, content, userId);
            res.status(200).json({ message: '방명록 수정완료' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    deleteVisitor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const visitorId = parseInt(req.params.visitorId);
            const userId = res.locals.user.userId;
            yield visitor_1.default.deleteVisitor(visitorId, userId);
            res.status(200).json({ message: '방명록 삭제 완료' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
};
