const db = require("../config/db");

const Employee = {
  getAll: (callback) => {
    db.query(
      "SELECT e.*, d.departmentName, d.departmentId FROM employee e LEFT JOIN employeeDepartment ed ON e.employeeId = ed.employeeId LEFT JOIN department d ON ed.departmentId = d.departmentId",
      callback
    );
  },

  add: (employee, callback) => {
    const { employeeName, loginEmail, loginPassword, departmentId } = employee;

    db.query(
      "INSERT INTO employee (employeeName, loginEmail, loginPassword) VALUES (?, ?, ?)",
      [employeeName, loginEmail, loginPassword],
      (err, result) => {
        if (err) return callback(err);

        const employeeId = result.insertId;
        db.query(
          "INSERT INTO employeeDepartment (employeeId, departmentId) VALUES (?, ?)",
          [employeeId, departmentId],
          callback
        );
      }
    );
  },

  delete: (employeeId, callback) => {
    db.query("DELETE FROM employeeDepartment WHERE employeeId = ?", [employeeId], (err) => {
      if (err) return callback(err);

      db.query("DELETE FROM employee WHERE employeeId = ?", [employeeId], callback);
    });
  },

  update: (employeeId, employee, callback) => {
    const { employeeName, loginEmail, loginPassword, departmentId } = employee;

    db.query(
      `UPDATE employee 
      SET employeeName = ?, loginEmail = ?, loginPassword = ?
      WHERE employeeId = ?`,
      [employeeName, loginEmail, loginPassword, employeeId],
      (err, result) => {
        if (err) return callback(err);

        db.query(
          "UPDATE employeeDepartment SET departmentId = ? WHERE employeeId = ?",
          [departmentId, employeeId],
          callback
        );
      }
    );
  },
};

module.exports = Employee;
