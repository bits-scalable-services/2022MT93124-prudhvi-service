const express = require('express');
const router = express.Router();

let Employee = require('../controllers/employee.controller');

router.route('/fetch').get(Employee.fetchEmployee);

router.route('/create').post(Employee.employeeCreation);

module.exports = router;