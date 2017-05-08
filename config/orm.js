var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
    	if(err) {
    		throw err;
    	}
    	cb(result);
    });
  },
  insertOne: function(table, columns, values, cb) {
    var queryString = "INSERT INTO ??(??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [table, columns, values], function(err, result) {
      if(err) {
    		throw err;
    	}
      cb(result);
    });
  },
  updateOne: function(table, property, propertyValue, parameterToSelect, parameterValue, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [table, property, propertyValue, parameterToSelect, parameterValue], function(err, result) {
      if(err) {
    		throw err;
    	}
      cb(result);
    });
  }
};

module.exports = orm;
