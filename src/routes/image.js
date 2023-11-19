const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image');
const { upload } = require('../config/multer');

// 이미지 업로드
router.post('/upload', upload.single('image'), imageController.uploadImage);
// 이미지 불러오기
router.get('/:imageId', imageController.getImage);

module.exports = router;
