const data = require('../data/zoo_data');

function buscaFuncionario(idName) {
  if (idName === undefined) {
    return data.employees;
  }
  const funcionarios = data.employees.filter((funcionario) =>
    Object.values(funcionario).includes(Object.values(idName)[0]));
  if (funcionarios.length === 0) {
    throw new Error('Informações inválidas');
  }
  return funcionarios;
}

function buscaAnimal(idAnimal) {
  return idAnimal.map((id) => data.species.find((animal) => animal.id === id));
}

function getEmployeesCoverage(employees) {
  const funcionarios = buscaFuncionario(employees);
  if (funcionarios.length === 1) {
    const animais = buscaAnimal(funcionarios[0].responsibleFor);
    const { firstName, lastName, id } = funcionarios[0];
    return { id: `${id}`,
      fullName: `${firstName} ${lastName}`,
      species: animais.map((animal) => animal.name),
      locations: animais.map((animal) => animal.location) };
  }
  return funcionarios.reduce((acc, funcionario) => {
    const animal = buscaAnimal(funcionario.responsibleFor);
    const { firstName, lastName, id } = funcionario;
    acc.push({ id: `${id}`,
      fullName: `${firstName} ${lastName}`,
      species: animal.map((animais) => animais.name),
      locations: animal.map((animais) => animais.location) });
    return acc;
  }, []);
}

module.exports = getEmployeesCoverage;
