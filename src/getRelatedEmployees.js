const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.filter((funcionario) => funcionario.id === id)
    .some((funcionario) => funcionario.managers.length <= 1);
}

function getRelatedEmployees(managerId) {
  //console.log(managerId);
}

module.exports = { isManager, getRelatedEmployees };
