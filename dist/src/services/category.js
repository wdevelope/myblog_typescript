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
const category_1 = __importDefault(require("../repositories/category"));
exports.default = {
    createCategory: (name, position) => __awaiter(void 0, void 0, void 0, function* () {
        const createCategory = yield category_1.default.createCategory(name, position);
        if (!createCategory) {
            throw new Error('카테고리 생성에 실패했습니다.');
        }
        return createCategory;
    }),
    getAllCategory: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield category_1.default.getAllCategory();
    }),
    getOneCategory: (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield category_1.default.findByIdCategory(categoryId);
        if (!category) {
            throw new Error('카테고리가 존재하지 않습니다.');
        }
        return category;
    }),
    updateCategory: (categoryId, name) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield category_1.default.findByIdCategory(categoryId);
        if (!category) {
            throw new Error('업데이트할 카테고리가 존재하지 않습니다.');
        }
        const updateResult = yield category_1.default.updateCategory(categoryId, name);
        if (updateResult[0] === 1) {
            return true;
        }
        else {
            throw new Error('카테고리 이름이 그대로인데 변경좀');
        }
    }),
    deleteCategory: (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
        const category = yield category_1.default.findByIdCategory(categoryId);
        if (!category) {
            throw new Error('삭제할 카테고리가 존재하지 않습니다.');
        }
        const deleteCategory = yield category_1.default.deleteCategory(categoryId);
        if (!deleteCategory) {
            throw new Error('카테고리 삭제에 실패했습니다.');
        }
        return;
    }),
};
