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
const visitorComment_1 = __importDefault(require("../services/visitorComment"));
exports.default = {
    visitorCommentCreate: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const visitorId = parseInt(req.params.visitorId);
            const { comment } = req.body;
            yield visitorComment_1.default.visitorCommentCreate(visitorId, comment);
            res.status(200).json({ message: '방명록 댓글 생성 완료' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    visitorCommentDelete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const visitorCommentId = parseInt(req.params.visitorCommentId);
            yield visitorComment_1.default.visitorCommentDelete(visitorCommentId);
            res.status(200).json({ message: '방명록 삭제 완료' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ errorMessage: error.message });
        }
    }),
};
