const db = require('../config/db');

const Department = {
  getAll: (callback) => {
    db.query('SELECT * FROM department', callback);
  },

  add: (departmentName, callback) => {
    db.query('INSERT INTO department (departmentName) VALUES (?)', [departmentName], callback);
  },

  delete: (departmentId, callback) => {
    db.query('DELETE FROM department WHERE departmentId = ?', [departmentId], callback);
  }
};

module.exports = Department;
