let employeeModel = require('../../../models/finance.model');

class Employee {
    constructor() {
    }
    static async employeeCreation(req, res, next) {
        try {
            let body = req.body;
            let postObj = {
                employeeName: body.employeeName,
                employeeTitle: body.employeeTitle,
                employeeDOB: body.employeeDOB,
            };
            let createEmployee = await employeeModel.create(postObj);
            if (!createEmployee) {
                
                return res.status(400).json({ success: false, data: `${createEmployee}`, message: `Employee Not created` });
            }
            
            return res.status(200).json({ success: true, data: `${createEmployee}`, message: `Employee created succesfully` });

        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, data: `${err}`, message: `Internal Server Problem` });
        }
    }

    static async fetchEmployee(req, res, next) {
        try {
            let employeeList = await employeeModel.find();
            if (!employeeList) {
                
                return res.status(400).json({ success: false, data: `${employeeList}`, message: `Employee Not Fetched` });
            }
            
            return res.status(200).json({ success: true, data: `${employeeList}`, message: `Employee Fetched succesfully` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, data: `${err}`, message: `Internal Server Problem` });
        }
    }
}

module.exports = Employee;