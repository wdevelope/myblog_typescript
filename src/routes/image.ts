import express from 'express';
const router = express.Router();
// import { auth, authAdmin } from '../middlewares/auth';
import imageController from '../controllers/image';
import { upload } from '../config/multer';

// 이미지 업로드
router.post('/upload', upload.single('image'), imageController.uploadImage);
// 이미지 불러오기
router.get('/:imageId', imageController.getImage);

export default router;
