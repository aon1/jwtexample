var express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

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

router.get('/', function(req, res) {
    res.send('oi');
});

module.exports = router;
