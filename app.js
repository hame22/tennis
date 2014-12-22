'use strict';

var express = require('express'),
config = require('./lib/configuration'),
routes = require('./lib/routes'),
bodyParser = require('body-parser');

var app = express();

app.set('port', config.get('server:port'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());

app.get('/', routes.index);
app.get('/headToHead/:player1?/:player2?', routes.headToHeadResults);

app.post('/headToHead', routes.headToHead);

app.listen(app.get('port'), function () {
	console.log('Listening....');
});

//master update

module.exports = app;