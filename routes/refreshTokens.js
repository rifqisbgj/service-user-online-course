const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.createToken);
router.get('/', refreshTokensHandler.getToken);

module.exports = router;
