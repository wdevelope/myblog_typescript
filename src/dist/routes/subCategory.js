"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middlewares/auth");
const subCategory_1 = __importDefault(require("../controllers/subCategory"));
router.post('/', [auth_1.auth, auth_1.authAdmin], subCategory_1.default.createSubCategory);
router.get('/:categoryId', subCategory_1.default.getAllSubCategory);
router.patch('/:subCategoryId', [auth_1.auth, auth_1.authAdmin], subCategory_1.default.updateSubCategory);
router.delete('/:subCategoryId', [auth_1.auth, auth_1.authAdmin], subCategory_1.default.deleteSubCategory);
exports.default = router;
