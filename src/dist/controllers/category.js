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
const category_1 = __importDefault(require("../services/category"));
exports.default = {
    createCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, position } = req.body;
            yield category_1.default.createCategory(name, position);
            res.status(201).json({ message: '카테고리 생성완료' });
        }
        catch (error) {
            res.status(400).json({ errorMessage: error.message });
        }
    }),
    getAllCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const categories = yield category_1.default.getAllCategory();
            res.status(200).json(categories);
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    getOneCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const categoryId = parseInt(req.params.categoryId);
            const category = yield category_1.default.getOneCategory(categoryId);
            res.status(200).json(category);
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    updateCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const categoryId = parseInt(req.params.categoryId);
            const { name } = req.body;
            const updated = yield category_1.default.updateCategory(categoryId, name);
            res.status(200).json(updated);
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    deleteCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const categoryId = parseInt(req.params.categoryId);
            yield category_1.default.deleteCategory(categoryId);
            res.status(200).json({ message: '카테고리 삭제완료.' });
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    }),
};
