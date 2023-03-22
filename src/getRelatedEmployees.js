const data = require('../data/zoo_data');

function getEmployee(id) {
  return data.employees.filter((employee) => employee.id === id);
}
function isManager(id) {
  const isEmployee = getEmployee(id);
  return isEmployee.some((employee) => employee.managers.length <= 1);
}

function getRelatedEmployees(managerId) {
  const colaborador = data.employees.filter((funcionario) => {
    const existeId = funcionario.managers.some((id) => id === managerId);
    if (existeId === true) {
      return funcionario;
    }
    return '';
  }).map((funcionarios) => `${funcionarios.firstName} ${funcionarios.lastName}`);
  if (colaborador.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return colaborador;
}

module.exports = { isManager, getRelatedEmployees };
