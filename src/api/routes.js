// routes.js
const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/message', controllers.getMessage);

module.exports = router;
