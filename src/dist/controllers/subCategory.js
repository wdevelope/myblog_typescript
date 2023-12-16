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
const subCategory_1 = __importDefault(require("../services/subCategory"));
exports.default = {
    createSubCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { categoryName, name, position } = req.body;
            yield subCategory_1.default.createSubCategory(categoryName, name, position);
            res.status(201).json({ message: '서브카테고리 생성 완료' });
        }
        catch (error) {
            res.status(400).json({ errorMessage: error.message });
        }
    }),
    getAllSubCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const categoryId = parseInt(req.params.categoryId);
            const categories = yield subCategory_1.default.getAllSubCategory(categoryId);
            res.status(200).json(categories);
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    updateSubCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const subCategoryId = parseInt(req.params.subCategoryId);
            const { name } = req.body;
            const updated = yield subCategory_1.default.updateSubCategory(subCategoryId, name);
            res.status(200).json(updated);
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    }),
    deleteSubCategory: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const subCategoryId = parseInt(req.params.subCategoryId);
            yield subCategory_1.default.deleteSubCategory(subCategoryId);
            res.status(200).json({ message: '서브 카테고리 삭제완료' });
        }
        catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    }),
};
