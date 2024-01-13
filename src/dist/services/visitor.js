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
const visitor_1 = __importDefault(require("../repositories/visitor"));
exports.default = {
    createVisitor: (userId, title, content, password, isPrivate) => __awaiter(void 0, void 0, void 0, function* () {
        if (isPrivate) {
            if (!password) {
                throw new Error('비밀번호를 입력해주세요.');
            }
        }
        const newVisitor = yield visitor_1.default.createVisitor(userId, title, content, password, isPrivate);
        if (!newVisitor) {
            throw new Error('방명록 생성 실패');
        }
        return newVisitor;
    }),
    getAllVisitors: (page) => __awaiter(void 0, void 0, void 0, function* () {
        const pageSize = 15;
        const offset = (page - 1) * pageSize;
        const { visitors, totalCount } = yield visitor_1.default.getAllVisitors(offset, pageSize);
        const totalPages = Math.ceil(totalCount / pageSize);
        return {
            visitors,
            meta: {
                totalPages,
                currentPage: page,
                totalCount,
            },
        };
    }),
    getLatestVisitor: () => __awaiter(void 0, void 0, void 0, function* () {
        const latestVisitor = yield visitor_1.default.getLatestVisitor();
        return latestVisitor;
    }),
    getVisitorById: (visitorId, password) => __awaiter(void 0, void 0, void 0, function* () {
        const visitor = yield visitor_1.default.getVisitorById(visitorId);
        if (!visitor) {
            throw new Error('존재하지않는 방명록입니다.');
        }
        if (visitor.isPrivate && visitor.password !== password) {
            throw new Error('보호된 방명록입니다.');
        }
        return visitor;
    }),
    visitorPasswordCheck: (visitorId, password) => __awaiter(void 0, void 0, void 0, function* () {
        if (!password) {
            throw new Error('비밀번호를 입력해주세요.');
        }
        const visitor = yield visitor_1.default.visitorFindById(visitorId);
        if (!visitor || visitor.password !== password) {
            throw new Error('비밀번호가 일치하지 않습니다.');
        }
        return;
    }),
    updateVisitor: (visitorId, title, content, userId) => __awaiter(void 0, void 0, void 0, function* () {
        const post = yield visitor_1.default.visitorFindById(visitorId);
        if (!post || post.userId !== userId) {
            throw new Error('수정 권한이 없습니다.');
        }
        const updatedVisitor = yield visitor_1.default.updateVisitor(visitorId, title, content);
        return updatedVisitor;
    }),
    deleteVisitor: (visitorId, userId) => __awaiter(void 0, void 0, void 0, function* () {
        const visitor = yield visitor_1.default.visitorFindById(visitorId);
        if (!visitor || visitor.userId !== userId) {
            throw new Error('삭제 권한이 없습니다.');
        }
        const deletedVisitor = yield visitor_1.default.deleteVisitor(visitorId);
        return deletedVisitor;
    }),
};
