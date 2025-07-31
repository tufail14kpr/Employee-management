// Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    dateOfJoining: {
        type: Date,
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
