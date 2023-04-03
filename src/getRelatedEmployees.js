const data = require('../data/zoo_data');

function getEmployee(id) {
  return data.employees.filter((employee) => employee.id === id);
}
function isManager(id) {
  const isEmployee = getEmployee(id);
  return isEmployee.some((employee) => employee.managers.length <= 1);
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (!manager) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

  const collaborator = data.employees.reduce((acc, employee) => {
    const isManagersEmployees = employee.managers.some((id) => id === managerId);

    if (isManagersEmployees) acc.push(`${employee.firstName} ${employee.lastName}`);

    return acc;
  }, []);

  return collaborator;
}

module.exports = { isManager, getRelatedEmployees };
