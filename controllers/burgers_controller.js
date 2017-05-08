var burger = require('../models/burger.js');
var express = require("express");
var path = require('path');


module.exports = function(app) {


// Routing

// Render all burgers upon page load
	app.get('/', function(req, res) {
		burger.selectAll(function(result) {
			res.render('index', {burgers:result});
		});
	});

// Post a new burger
	app.post('/', function(req, res) {
		burger.insertOne(req.body.burger, function(result){
			console.log(result);
			res.redirect("/");
		});
	});

// Updates the devoured trait of old burger
	app.put('/:id', function(req, res) {
		burger.updateOne(req.body.id, function(result) {
			res.redirect("/");
		});
	});
};


