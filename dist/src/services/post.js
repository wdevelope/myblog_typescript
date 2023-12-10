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
const post_1 = __importDefault(require("../repositories/post"));
exports.default = {
    createPost: (userId, title, content, subCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const newpost = yield post_1.default.createPost(userId, title, content, subCategoryId);
        return newpost;
    }),
    getAllPost: (page, subCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const pageSize = 15;
        const offset = (page - 1) * pageSize;
        const { posts, totalCount } = yield post_1.default.getAllPost(offset, pageSize, subCategoryId);
        const totalPages = Math.ceil(totalCount / pageSize);
        const subCategoryInfo = yield post_1.default.getSubCategory(subCategoryId);
        return {
            posts,
            subCategory: subCategoryInfo,
            meta: {
                totalPages,
                currentPage: page,
                totalCount,
            },
        };
    }),
    updatePost: (postId, userId, title, content) => __awaiter(void 0, void 0, void 0, function* () {
        const post = yield post_1.default.postFindById(postId);
        if (!post || post.userId !== userId) {
            throw new Error('수정 권한이 없습니다.');
        }
        const updatedpost = yield post_1.default.updatePost(postId, title, content);
        return updatedpost;
    }),
    deletePost: (postId, userId) => __awaiter(void 0, void 0, void 0, function* () {
        const post = yield post_1.default.postFindById(postId);
        if (!post || post.userId !== userId) {
            throw new Error('삭제 권한이 없습니다.');
        }
        const deletedpost = yield post_1.default.deletePost(postId);
        return deletedpost;
    }),
    getPost: (postId) => __awaiter(void 0, void 0, void 0, function* () {
        const getPost = yield post_1.default.getPost(postId);
        if (!getPost) {
            throw new Error('게시글이 존재하지 않습니다.');
        }
        return getPost;
    }),
};
