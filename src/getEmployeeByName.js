const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const colaborador = data.employees.find((funcionario) => funcionario.firstName ===
    employeeName || funcionario.lastName === employeeName);
  return colaborador !== undefined ? colaborador : {};
}

module.exports = getEmployeeByName;
