const data = require('../data/zoo_data');

function getAnimal(name) {
  return data.species.filter((animal) => name === animal.name);
}

function getOlder(residents, age) {
  return residents.every((resident) => resident.age > age);
}

function getAnimalsOlderThan(animal, age) {
  const chosenAnimal = getAnimal(animal);
  return chosenAnimal.every((animals) => getOlder(animals.residents, age));
}

module.exports = getAnimalsOlderThan;
