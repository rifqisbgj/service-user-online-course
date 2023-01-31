const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');

router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.put('/edit/:id', usersHandler.update);
router.get('/:id', usersHandler.getuser);

module.exports = router;
