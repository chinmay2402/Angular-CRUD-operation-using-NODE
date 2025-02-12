const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const departmentRoutes = require('./routes/departmentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use('/api/departments', departmentRoutes);
app.use('/api/employees', employeeRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:5000`);
});
