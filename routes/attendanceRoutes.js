const express = require('express');
const router = express.Router();

// Controller functions (create real ones later)
const attendanceController = require('../controllers/attendanceController');

// Get all attendance records
router.get('/', attendanceController.getAllAttendance);

// Get a single attendance record by ID
router.get('/:id', attendanceController.getAttendanceById);

// Create a new attendance record
router.post('/', attendanceController.createAttendance);

// Update an attendance record
router.put('/:id', attendanceController.updateAttendance);

// Delete an attendance record
router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;
