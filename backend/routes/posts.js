const express = require('express');
const multer = require('multer');
const {getAllPosts, createPost, getPost, updatePost, deletePost} = require('../controllers/posts');
const authMiddleware = require('../middlewares/auth');


const router = express.Router();
const upload = multer({dest: 'assets/uploads/'});


router.route('/').get(getAllPosts).post(authMiddleware, upload.single('file'), createPost);
router.route('/:id').get(getPost).patch(authMiddleware, updatePost).delete(authMiddleware, deletePost);

module.exports = router;