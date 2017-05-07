var express = require("express");
var burger = require('../models/burger.js');
var path = require('path');


module.exports = function(app) {


// Understand this code!
	app.get('/', function(req, res) {

		burger.all(function(result) {
			res.render('index', {burgers:result});
		});
	});

	app.post('/', function(req, res) {
		burger.insert(req.body.burger, function(result){
			console.log(result);
			res.redirect("/");
		});
	});

	app.put('/:id', function(req, res) {
		burger.update(req.body.id, function(result) {

			res.redirect("/");
		});
	});
}


module.exports = router;