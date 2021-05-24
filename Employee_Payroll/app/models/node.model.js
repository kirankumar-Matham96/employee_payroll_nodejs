//ES6 feature
import mongoose from "mongoose";

const EmployeePayrollSchema = mongoose.Schema(
  {
    employeeName: String,
    department: String,
    phone_number: String,
    salary: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EmployeePayroll", EmployeePayrollSchema);
