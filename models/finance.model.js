const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const employeeSchema = new Schema({
    employeeId: ObjectId,
    employeeName: String,
    employeeTitle: String,
    employeeDOB: String,
}, { timestamps: true });

module.exports = mongoose.model('employee', employeeSchema);