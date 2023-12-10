"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const view_1 = __importDefault(require("../controllers/view"));
router.post('/post/:postId', view_1.default.postViews);
router.post('/visitor/:visitorId', view_1.default.visitorViews);
exports.default = router;
