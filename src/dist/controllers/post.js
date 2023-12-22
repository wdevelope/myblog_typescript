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
const post_1 = __importDefault(require("../services/post"));
exports.default = {
    createPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, content, subCategoryName } = req.body;
            const user = res.locals.user;
            yield post_1.default.createPost(user.userId, title, content, subCategoryName);
            res.status(201).json({ message: '게시글 생성 완료' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    getAllPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const subCategoryName = req.query.subCategoryName;
            const page = parseInt(req.query.page) || 1;
            const response = yield post_1.default.getAllPost(page, subCategoryName);
            res.status(200).json(response);
        }
        catch (err) {
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    updatePost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const postId = parseInt(req.params.postId);
            const user = res.locals.user;
            const { title, content } = req.body;
            yield post_1.default.updatePost(postId, user.userId, title, content);
            res.status(200).json({ message: '게시글 수정 완료' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    deletePost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const postId = parseInt(req.params.postId);
            const user = res.locals.user;
            yield post_1.default.deletePost(postId, user.userId);
            res.status(200).json({ message: '게시글 삭제 완료' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
    getPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const postId = parseInt(req.params.postId);
            const post = yield post_1.default.getPost(postId);
            res.status(200).json(post);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ errorMessage: err.message });
        }
    }),
};
