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
const visitorComment_js_1 = __importDefault(require("../database/models/visitorComment.js"));
const visitor_js_1 = __importDefault(require("../database/models/visitor.js"));
exports.default = {
    visitorCommentCreate: (visitorId, comment) => __awaiter(void 0, void 0, void 0, function* () {
        return yield visitorComment_js_1.default.create({
            visitorId,
            comment,
        });
    }),
    visitorCommentDelete: (visitorCommentId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield visitorComment_js_1.default.destroy({
            where: { id: visitorCommentId },
        });
    }),
    visitorCommentFind: (visitorId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield visitor_js_1.default.findByPk(visitorId);
    }),
};
