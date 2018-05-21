var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var port    =   process.env.PORT || 3000;

var authenticate = require('./routes/authenticate');
var api = require('./routes/api');

var app = express();

process.env.SECRET_KEY = 'mykey';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/authenticate', authenticate);
app.use('/api', api);

app.listen(port);
console.log('Magic happens on port ' + port);
