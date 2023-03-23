const data = require('../data/zoo_data');

function getEmployee(id) {
  return data.employees.find((employee) => employee.id === id);
}

function getAnimals(id) {
  return data.species.find((animal) => animal.id === id);
}

function getOldestSpecies(residents) {
  return residents.reduce((acc, resident) => {
    if (acc.age < resident.age) return resident;
    return acc;
  });
}

function getOldestFromFirstSpecies(id) {
  const responsible = getEmployee(id).responsibleFor;
  const animal = responsible.map((idAnimal) => getAnimals(idAnimal))[0];
  const oldestFirstSpecie = getOldestSpecies(animal.residents);

  return Object.values(oldestFirstSpecie);
}

module.exports = getOldestFromFirstSpecies;
