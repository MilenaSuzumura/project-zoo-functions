const data = require('../data/zoo_data');

function getEmployees(idOrName) {
  if (idOrName === undefined) return data.employees;

  const findEmployee = data.employees.find((employee) =>
    Object.values(employee).includes(Object.values(idOrName)[0]));

  if (findEmployee === undefined) throw new Error('Informações inválidas');

  return findEmployee;
}

function getAnimal(id) {
  return data.species.find((animal) => animal.id === id);
}

function infoEmployee(id, firstName, lastName, arrayAnimal) {
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: arrayAnimal.map((animal) => animal.name),
    locations: arrayAnimal.map((animal) => animal.location),
  };
}

function oneEmployee(employee) {
  const animals = employee.responsibleFor.map((id) => getAnimal(id));
  const { firstName, lastName, id } = employee;
  return infoEmployee(id, firstName, lastName, animals);
}

function allEmployees(employees) {
  const reduceEmployees = employees.reduce((acc, employee) => {
    const animals = employee.responsibleFor.map((id) => getAnimal(id));
    const { firstName, lastName, id } = employee;
    acc.push(infoEmployee(id, firstName, lastName, animals));
    return acc;
  }, []);

  return reduceEmployees;
}

function getEmployeesCoverage(employees) {
  const isEmployee = getEmployees(employees);

  if (isEmployee.length === undefined) return oneEmployee(isEmployee);

  return allEmployees(isEmployee);
}

module.exports = getEmployeesCoverage;
