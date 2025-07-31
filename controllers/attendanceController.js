const Attendance = require('../models/Attendance');

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
    try {
        const attendances = await Attendance.find().populate('employeeId', 'name'); // Populates employee name
        res.json(attendances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single attendance record by ID
exports.getAttendanceById = async (req, res) => {
    try {
        const attendance = await Attendance.findById(req.params.id).populate('employeeId', 'name');
        if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new attendance record
exports.createAttendance = async (req, res) => {
    try {
        const attendance = new Attendance({
            employeeId: req.body.employeeId,
            date: req.body.date,
            status: req.body.status,
            checkInTime: req.body.checkInTime,
            checkOutTime: req.body.checkOutTime,
            remarks: req.body.remarks
        });
        const newAttendance = await attendance.save();
        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an attendance record
exports.updateAttendance = async (req, res) => {
    try {
        const updatedAttendance = await Attendance.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedAttendance) return res.status(404).json({ message: 'Attendance not found' });
        res.json(updatedAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an attendance record
exports.deleteAttendance = async (req, res) => {
    try {
        const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!deletedAttendance) return res.status(404).json({ message: 'Attendance not found' });
        res.json({ message: 'Attendance deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
