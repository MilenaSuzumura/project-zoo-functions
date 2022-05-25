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
    const especie = animais.map((animal) => animal.name);
    const local = animais.map((animal) => animal.location);
    const { firstName, lastName, id } = funcionarios[0];
    return { id: `${id}`, fullName: `${firstName} ${lastName}`, species: especie,
      locations: local };
  }
  return funcionarios.reduce((acc, funcionario) => {
    const animal = buscaAnimal(funcionario.responsibleFor);
    const { firstName, lastName, id } = funcionario;
    const especie = animal.map((animais) => animais.name);
    const local = animal.map((animais) => animais.location);
    acc.push({ id: `${id}`, fullName: `${firstName} ${lastName}`,
      species: especie, locations: local });
    return acc;
  }, []);
}

module.exports = getEmployeesCoverage;
