"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middlewares/auth");
const validation_1 = require("../middlewares/validation");
const user_1 = __importDefault(require("../controllers/user"));
router.post('/register', validation_1.register, user_1.default.register);
router.post('/login', validation_1.login, user_1.default.login);
router.get('/userInfo', auth_1.auth, user_1.default.userInfo);
router.patch('/status', [auth_1.auth, auth_1.authAdmin], user_1.default.updateUser);
router.post('/logout', auth_1.auth, user_1.default.logout);
router.get('/check', auth_1.auth, (req, res) => {
    res.status(200).json({ isLoggedIn: true });
});
exports.default = router;
