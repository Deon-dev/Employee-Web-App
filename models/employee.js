const mongoose = require('mongoose');
let employeeScheme = new mongoose.Schema({
    name: String,
    designation: String,
    salary: Number
});


module.export = mongoose.model('employee', employeeScheme);