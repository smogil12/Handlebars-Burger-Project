var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * from ??";
    connection.query(queryString, [tableInput], function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function(tableInput, columnName, burgerName, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(
      queryString,
      [tableInput, columnName, burgerName],
      function(err) {
        if (err) {
          throw err;
        }
        cb();
      }
    );
  },
  updateOne: function(tableInput, data, searchColumnName, searchRowVal, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?? = ?";
    connection.query(
      queryString,
      [tableInput, data, searchColumnName, searchRowVal],
      function(err) {
        if (err) {
          throw err;
        }
        cb();
      }
    );
  }
};

module.exports = orm;
