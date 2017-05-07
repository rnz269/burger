var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ?";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(table, columns, values) {
    var queryString = "INSERT INTO ?(??) VALUES (?)"; 
    console.log(queryString);
    connection.query(queryString, [table, columns, values], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(table, property, propertyValue, parameterToSelect, parameterValue) {
    var queryString = "UPDATE ? SET ? = ? WHERE ? = ?";
    connection.query(queryString, [table, property, propertyValue, paramaterToSelect, parameterValue], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
