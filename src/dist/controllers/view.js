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
const view_1 = __importDefault(require("../services/view"));
exports.default = {
    postViews: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const postId = parseInt(req.params.postId);
        const viewedPost = req.cookies.viewedPost || [];
        if (viewedPost.includes(postId)) {
            res.sendStatus(200);
            return;
        }
        try {
            yield view_1.default.postViews(postId);
            res.cookie('viewedPost', [...viewedPost, postId], {
                maxAge: 1 * 24 * 60 * 60 * 1000,
            });
            res.sendStatus(200);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    visitorViews: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const visitorId = parseInt(req.params.visitorId);
        const viewedVisitors = req.cookies.viewedVisitors || [];
        if (viewedVisitors.includes(visitorId)) {
            res.sendStatus(200);
            return;
        }
        try {
            yield view_1.default.visitorViews(visitorId);
            res.cookie('viewedVisitors', [...viewedVisitors, visitorId], { maxAge: 1 * 24 * 60 * 60 * 1000 });
            res.sendStatus(200);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
};
