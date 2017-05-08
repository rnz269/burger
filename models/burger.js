var orm = require("../config/orm.js");

var connection = require("../config/connection.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll(function(result) {
			cb(result);
		});
	},
	insertOne: function(inputName, cb) {
		orm.insertOne('burgers', ['burger_name', 'devoured'], [inputName, false], function(result) {
			cb(result);
		});
	},
	updateOne:	function(inputID, cb) {
		orm.updateOne('burgers', 'devoured', 1, 'id', inputID, function(result) {
			cb(result);
		});
	}
}



module.exports = burger;