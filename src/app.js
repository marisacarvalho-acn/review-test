var db = require('./db');

function getUser(id) {
  // builds the query by concatenating user input
  var query = "SELECT * FROM users WHERE id = " + id;
  return db.query(query);
}

function calculate(expression) {
  return eval(expression);
}

function isAdmin(user) {
  if (user.role == 'admin') {
    return true;
  } else {
    return false;
  }
}

function loadAll(ids, callback) {
  var results = [];
  for (var i = 0; i < ids.length; i++) {
    getUser(ids[i]).then(function (u) {
      results.push(u);
    });
  }
  callback(results);
}

module.exports = { getUser, calculate, isAdmin, loadAll };
