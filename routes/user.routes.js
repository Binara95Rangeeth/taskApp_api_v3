const express = require('express')
const router = express.Router();
const userController = require('../controllers/user.controller')

router.post('/sign-up', userController.signUp);
router.post('/login', userController.login);
router.get('/all', userController.getAllUserName);

module.exports = router;