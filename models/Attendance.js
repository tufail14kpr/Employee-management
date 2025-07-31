const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Leave'],
        required: true,
    },
    checkInTime: {
        type: String,
        default: null,
    },
    checkOutTime: {
        type: String,
        default: null,
    },
    remarks: {
        type: String,
        default: '',
    }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);
