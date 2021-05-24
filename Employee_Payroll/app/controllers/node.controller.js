const EmpPayroll = require("../models/node.model.js");

//create and save new employee
exports.create = (req, res) => {
  const employee = new Employee({
    employeeName: req.body.employeeName,
    department: req.body.department,
    phone_number: req.body.phone_number,
    salary: req.body.salary,
  });

  //save employee in the database
  employee
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while adding employee!",
      });
    });
};

//retrieving all the employees
exports.findAll = (rel, res) => {
  Employee.find()
    .then((notes) => {
      res.send(employee);
    })
    .catch((err) => {
      res.status(500).send({
        mesage: err.mesage || "Some error occured while retrieving employee",
      });
    });
};

//Find an employee with empId
exports.findOne = (req, res) => {
  Employee.findById(req.params.empId)
    .then((employee) => {
      if (!employee) {
        return res.status(400).send({
          message: "Employee with id: " + req.params.empId + " is not found",
        });
      }
      res.send(employee);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found!",
        });
      }
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Note.findByIdAndRemove(req.params.empId)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.noteId,
        });
      }
      res.send({ message: "Employee deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Could not delete employee with id " + req.params.noteId,
      });
    });
};
