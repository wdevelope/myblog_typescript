const express = require('express');
const router = express.Router();
const { auth, authAdmin } = require('../middlewares/auth');
const validation = require('../middlewares/validation');
const visitorController = require('../controllers/visitor');

// 방명록 생성
router.post('/', auth, visitorController.create);
// 방명록 전체조회
router.get('/', visitorController.getAll);
// 방명록 상세조회
router.get('/:id', visitorController.getOne);
// 방명록 수정
router.patch('/:id', auth, visitorController.patch);
// 방명록 삭제
router.delete('/:id', auth, visitorController.delete);

module.exports = router;
