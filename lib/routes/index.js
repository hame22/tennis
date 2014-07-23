'use strict';

exports.index = function (req, res) {

	var Client = require('node-rest-client').Client;
	var client = new Client();

	client.get("http://localhost:600/allPlayers", function(data, response){
            var players = JSON.parse(data);
            res.render('index', players);
      });
}

exports.headToHead = function (req, res) {
	res.redirect('headToHead/' + req.body.player1 + '/' + req.body.player2);
}

exports.headToHeadResults = function (req, res) {

	var Client = require('node-rest-client').Client;
	var client = new Client();

	client.get("http://localhost:600/headToHead", function(data, response){
            var data = JSON.parse(data);
            res.render('headToHead', data);
      });

	//res.send(req.params.player1);
}