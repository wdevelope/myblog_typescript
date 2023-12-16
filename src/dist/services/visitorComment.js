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
const visitorComment_1 = __importDefault(require("../repositories/visitorComment"));
exports.default = {
    visitorCommentCreate: (visitorId, comment) => __awaiter(void 0, void 0, void 0, function* () {
        const findVisitor = yield visitorComment_1.default.visitorCommentFind(visitorId);
        if (!findVisitor) {
            throw new Error('해당 방명록을 찾을 수 없습니다.');
        }
        yield visitorComment_1.default.visitorCommentCreate(visitorId, comment);
    }),
    visitorCommentDelete: (visitorCommentId) => __awaiter(void 0, void 0, void 0, function* () {
        const findVisitorComment = yield visitorComment_1.default.visitorCommentFind(visitorCommentId);
        if (!findVisitorComment) {
            throw new Error('해당 방명록 댓글을 찾을 수 없습니다.');
        }
        return yield visitorComment_1.default.visitorCommentDelete(visitorCommentId);
    }),
};
