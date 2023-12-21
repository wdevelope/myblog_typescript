"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middlewares/auth");
const validation_1 = require("../middlewares/validation");
const post_1 = __importDefault(require("../controllers/post"));
router.post('/', [auth_1.auth, auth_1.authAdmin], validation_1.createPost, post_1.default.createPost);
router.get('/', post_1.default.getAllPost);
router.patch('/:postId', [auth_1.auth, auth_1.authAdmin], post_1.default.updatePost);
router.delete('/:postId', [auth_1.auth, auth_1.authAdmin], post_1.default.deletePost);
router.get('/:postId', post_1.default.getPost);
exports.default = router;
