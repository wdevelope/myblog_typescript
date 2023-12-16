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
const subCategory_1 = __importDefault(require("../repositories/subCategory"));
const category_1 = __importDefault(require("../repositories/category"));
exports.default = {
    createSubCategory: (categoryName, name, position) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield category_1.default.findByNameCategory(categoryName);
        if (!category) {
            throw new Error('해당 이름의 카테고리를 찾을 수 없습니다.');
        }
        const createSubCategory = yield subCategory_1.default.createSubCategory(category.id, name, position);
        if (!createSubCategory) {
            throw new Error('서브카테고리 생성이 실패했습니다.');
        }
        return createSubCategory;
    }),
    getAllSubCategory: (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield subCategory_1.default.getAllSubCategory(categoryId);
    }),
    updateSubCategory: (subCategoryId, name) => __awaiter(void 0, void 0, void 0, function* () {
        const findSubCategory = yield subCategory_1.default.getOneSubCategory(subCategoryId);
        if (!findSubCategory) {
            throw new Error('업데이트할 카테고리가 존재하지 않습니다.');
        }
        const updatedSubCategory = yield subCategory_1.default.updateSubCategory(subCategoryId, name);
        if (!updatedSubCategory) {
            throw new Error('업데이트 실패');
        }
        return updatedSubCategory;
    }),
    deleteSubCategory: (subCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const findSubCategory = yield subCategory_1.default.getOneSubCategory(subCategoryId);
        if (!findSubCategory) {
            throw new Error('삭제할 카테고리가 존재하지 않습니다.');
        }
        const deleteCategory = yield subCategory_1.default.deleteSubCategory(subCategoryId);
        if (!deleteCategory) {
            throw new Error('카테고리 삭제 실패');
        }
        return deleteCategory;
    }),
};
