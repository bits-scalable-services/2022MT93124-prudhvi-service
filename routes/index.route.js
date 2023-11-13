const express = require('express');
const router = express.Router();

const employeeRoute = require('../microservices/employee/routes/employee.route');

router.use('/employee', employeeRoute);

module.exports = router;