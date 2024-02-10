const express = require('express');
const {login, register, logout, updateUser, deleteUser} = require('../controllers/users');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();


router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.patch('/update', authMiddleware, updateUser)
router.delete('/delete', authMiddleware, deleteUser);
module.exports = router;