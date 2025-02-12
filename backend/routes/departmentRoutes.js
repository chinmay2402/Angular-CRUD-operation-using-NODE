const express = require('express');
const router = express.Router();
const Department = require('../models/departmentModel');

router.get('/', (req, res) => {
  Department.getAll((err, results) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(results);
  });
});

router.post('/', (req, res) => {
  const { departmentName } = req.body;
  console.log("depttttttttt",departmentName);
  Department.add(departmentName, (err) => {
    
    if (err) res.status(500).json({ error: err.message });
    else res.json({ message: 'Department added successfully' });
  });
});

router.delete('/delete/:id', (req, res) => {
  const departmentId = req.params.id;
  Department.delete(departmentId, (err) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json({ message: 'Department deleted successfully' });
  });
});

module.exports = router;
