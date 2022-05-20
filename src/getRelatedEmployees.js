const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.filter((funcionario) => funcionario.id === id)
    .some((funcionario) => funcionario.managers.length <= 1);
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
