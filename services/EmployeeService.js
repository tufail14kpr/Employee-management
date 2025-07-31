const Employee = require('../models/Employee');

class EmployeeService {
    static async getAll() {
        return await Employee.find();
    }

    static async create(employeeData) {
        const newEmployee = new Employee(employeeData);
        return await newEmployee.save();
    }

    static async getById(id) {
        return await Employee.findById(id);
    }
}

module.exports = EmployeeService;
