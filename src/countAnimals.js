const data = require('../data/zoo_data');

function validParameter(animal) {
  const haveParameter = animal !== undefined
    ? { specie: animal.specie, sex: animal.sex }
    : false;

  return haveParameter;
}

function countAllAnimals() {
  const specieResident = [...data.species];
  return specieResident.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}

function countSpecie(specie) {
  const getSpecie = data.species.find((animal) => animal.name === specie);
  return getSpecie.residents;
}

function residentSex(residents, sex) {
  return residents.filter((resident) => resident.sex === sex);
}

function countAnimals(animal) {
  const haveParameter = validParameter(animal);

  if (haveParameter) {
    const { specie, sex } = haveParameter;
    const specieResident = countSpecie(specie);
    const haveSex = sex !== undefined ? residentSex(specieResident, sex) : specieResident;
    return haveSex.length;
  }

  return countAllAnimals();
}

module.exports = countAnimals;
