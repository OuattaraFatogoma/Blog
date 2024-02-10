const express = require('express');
const {login, register, logout, updateUser, deleteUser} = require('../controllers/users')
const router = express.Router();


router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.route('/:id').patch(updateUser).delete(deleteUser);

module.exports = router;