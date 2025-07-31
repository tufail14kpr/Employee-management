const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Dummy test endpoint
router.get('/test', employeeController.test);

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Get an employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Create a new employee
router.post('/', employeeController.createEmployee);

// Update employee
router.put('/:id', employeeController.updateEmployee);

// Delete employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
