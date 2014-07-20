'use strict';

exports.index = function (req, res) {

	var Client = require('node-rest-client').Client;
	var client = new Client();

	client.get("http://localhost:600", function(data, response){
 
            var players = JSON.parse(data);
            res.render('index', players);
      });
}