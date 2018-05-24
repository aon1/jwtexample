const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const todoController = require('../controllers').todoController;

//middleware
router.use(function(req, res, next) {
    var token = req.body.token || req.headers['token'];

    if(token) {
        jwt.verify(token, process.env.SECRET_KEY, function(err, decode) {
            if(err) {
                res.status(403).send('invalid token');
            } else {
                next();
            }
        })
    } else {
        res.send('please send a token');
    }
});

router.post('/', todoController.create);

module.exports = router;
