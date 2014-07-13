var request = require('supertest'),
express = require('express');

var app = require('../app.js');

describe('GET/', function () {
	it('serves a page', function (done) {
		request(app)
		.get('/')
		.expect(200, done);
	});
});