import express from 'express';
import { signupUser} from 'file:///C:/Users/ranaw/Downloads/BLOG%20Project/server/controller/user-controller.js';
import { loginUser } from 'file:///C:/Users/ranaw/Downloads/BLOG%20Project/server/controller/user-controller.js';
import { uploadImage } from '../controller/image-controller.js';
// import upload from '../utils/upload.js';
const router = express.Router();
router.post('/signup', signupUser);
router.post('/login',loginUser);
// router.post('/file/upload', upload.single('file'), uploadImage);
export default router;