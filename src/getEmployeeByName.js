const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const isEmployee = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return isEmployee !== undefined ? isEmployee : {};
}

module.exports = getEmployeeByName;
