'use strict';

var express = require('express'),
config = require('./lib/configuration'),
routes = require('./lib/routes');

var app = express();

app.set('port', config.get('server:port'));

app.set('port', 3000);

app.get('/', routes.index);

app.listen(app.get('port'), function () {
	console.log('Listening....');
});

module.exports = app;