"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middlewares/auth");
const visitorComment_1 = __importDefault(require("../controllers/visitorComment"));
router.post('/:visitorId', [auth_1.auth, auth_1.authAdmin], visitorComment_1.default.visitorCommentCreate);
router.delete('/:visitorCommentId', [auth_1.auth, auth_1.authAdmin], visitorComment_1.default.visitorCommentDelete);
exports.default = router;
