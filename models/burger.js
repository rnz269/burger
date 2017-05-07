var orm = require("./config/orm.js");

var connection = require("./config/connection.js");

var burger = {
	selectAll: function(inputTable) {
		orm.selectAll(function(inputTable, result) {
			console.log(result);
		});
	},
	insertOne: function(inputName) {
		orm.insertOne('burgers', ['burger_name', 'devoured'], [inputName, false], function(result) {
			console.log(result);
		});
	},

	updateOne:	function(inputID) {
		orm.updateOne('burgers', 'devoured', 0, 'id', inputID, function(result) {
			console.log(result);
		});
	}
}



module.exports = burger;