const Employee = require('../models/employeeModel');

exports.getEmployees = (req, res) => {
    Employee.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.createEmployee = (req, res) => {
    const newEmployee = req.body;
    Employee.create(newEmployee, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Employee added successfully' });
    });
};

exports.deleteEmployee = (req, res) => {
    const { id } = req.params;
    Employee.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json();
    });
};
