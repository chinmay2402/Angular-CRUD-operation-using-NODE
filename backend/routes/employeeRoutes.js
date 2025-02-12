const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');

router.get('/', (req, res) => {
  Employee.getAll((err, results) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(results);
  });
});

router.post('/', (req, res) => {
  const employee = req.body;
  Employee.add(employee, (err) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ message: 'Employee added successfully' });
  });
});

router.delete('/:id', (req, res) => {
  const employeeId = req.params.id;
  Employee.delete(employeeId, (err) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ });
  });
});

router.put("/:id", (req, res) => {
  console.log("Received Update Request:", req.body); // ✅ Debugging

  Employee.update(req.params.id, req.body, (err, result) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ message: "✅ Employee updated successfully!" });
  });
});

module.exports = router;
