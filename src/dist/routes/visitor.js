"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth_1 = require("../middlewares/auth");
const visitor_1 = __importDefault(require("../controllers/visitor"));
router.post('/', auth_1.auth, visitor_1.default.createVisitor);
router.get('/', visitor_1.default.getAllVisitor);
router.get('/latest', visitor_1.default.getLatestVisitor);
router.post('/:visitorId', visitor_1.default.getOneVisitor);
router.patch('/:visitorId', auth_1.auth, visitor_1.default.updateVisitor);
router.delete('/:visitorId', auth_1.auth, visitor_1.default.deleteVisitor);
router.post('/:visitorId/password', visitor_1.default.PasswordCheckVisitor);
exports.default = router;
