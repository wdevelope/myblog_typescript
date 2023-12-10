"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middlewares/auth");
const category_1 = __importDefault(require("../controllers/category"));
router.post('/', [auth_1.auth, auth_1.authAdmin], category_1.default.createCategory);
router.get('/', category_1.default.getAllCategory);
router.get('/:categoryId', category_1.default.getOneCategory);
router.patch('/:categoryId', [auth_1.auth, auth_1.authAdmin], category_1.default.updateCategory);
router.delete('/:categoryId', [auth_1.auth, auth_1.authAdmin], category_1.default.deleteCategory);
exports.default = router;
