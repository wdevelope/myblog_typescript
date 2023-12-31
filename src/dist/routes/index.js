"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_1 = __importDefault(require("./user"));
const post_1 = __importDefault(require("./post"));
const category_1 = __importDefault(require("./category"));
const subCategory_1 = __importDefault(require("./subCategory"));
const visitor_1 = __importDefault(require("./visitor"));
const view_1 = __importDefault(require("./view"));
const visitorComment_1 = __importDefault(require("./visitorComment"));
router.use('/api/user', user_1.default);
router.use('/api/category', category_1.default);
router.use('/api/subCategory', subCategory_1.default);
router.use('/api/post', post_1.default);
router.use('/api/visitor', visitor_1.default);
router.use('/api/visitorComment', visitorComment_1.default);
router.use('/api/view', view_1.default);
exports.default = router;
