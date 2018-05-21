var express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

var authenticateController = require('../controllers/authenticate-controller');

router.get('/', authenticateController.authenticate);

module.exports = router;
