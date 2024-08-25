import express from "express";
import { signupUser } from "../controller/user-controller.js";
import { loginUser } from "../controller/user-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js";
import {
  newComment,
  getComments,
  deleteComment,
} from "../controller/comment-controller.js";

import upload from "../utils/upload.js";
const router = express.Router();
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);
router.post("/create", createPost);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.post("/comment/new", newComment);
router.get("/comments/:id", getComments);
router.delete("/comment/delete/:id", deleteComment);

export default router;
// import express from 'express';

// import { createPost, updatePost, deletePost, getPost, getAllPosts } from '../controller/post-controller.js';
// import { uploadImage, getImage } from '../controller/image-controller.js';
// import { newComment, getComments, deleteComment } from '../controller/comment-controller.js';
// import { signupUser} from 'file:///C:/Users/ranaw/Downloads/BLOG%20Project/server/controller/user-controller.js';
// import { loginUser } from 'file:///C:/Users/ranaw/Downloads/BLOG%20Project/server/controller/user-controller.js';
// import { authenticateToken} from '../controller/jwt-controller.js';

// import upload from '../utils/upload.js';

// const router = express.Router();

// router.post('/login', loginUser);
// router.post('/signup', singupUser);
// router.post('/logout', logoutUser);

// router.post('/token', createNewToken);

// router.post('/create', authenticateToken, createPost);
// router.put('/update/:id', authenticateToken, updatePost);
// router.delete('/delete/:id', authenticateToken, deletePost);

// router.get('/post/:id', authenticateToken, getPost);
// router.get('/posts', authenticateToken, getAllPosts);

// router.post('/file/upload', upload.single('file'), uploadImage);
// router.get('/file/:filename', getImage);

// router.post('/comment/new', authenticateToken, newComment);
// router.get('/comments/:id', authenticateToken, getComments);
// router.delete('/comment/delete/:id', authenticateToken, deleteComment);

// export default router;
