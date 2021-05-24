module.exports = (app) => {
  const empPayroll = require("../controllers/node.controller.js");

  //add a new employee
  app.post("/employees", employee.create);

  //Retrieve all employees
  app.get("/employees", employee.findAll);

  //Retrieve a single employee with id
  app.get("/employees/:empId", employee.findone);

  //update employee with id
  app.put("/employees/:empId", employee.update);

  //delete employee data
  app.delete("/employees/:empId", employee.delete);
};
