const data = require('../data/zoo_data');

function validParameter(animal) {
  const haveParameter = animal !== undefined
    ? { specie: animal.specie || false, sex: animal.sex || false }
    : { specie: false, sex: false };

  return haveParameter;
}

function countAllAnimals() {
  return data.species.map((specie) => ({ [specie.name]: specie.residents.length }));
}

function countSpecie(specie) {
  const getSpecie = data.species.find((animal) => animal.name === specie);
  return getSpecie.residents;
}

function residentSex(residents, sex) {
  return residents.filter((resident) => resident.sex === sex);
}

function countSex(sex) {
  return data.species.reduce((acc, animal) => {
    acc[animal.name] = residentSex(animal.residents, sex).length;
    return acc;
  }, {});
}

function countAnimals(animal) {
  const haveParameter = validParameter(animal);
  const { specie, sex } = haveParameter;

  if (specie) {
    const specieResident = countSpecie(specie);
    const haveSex = sex ? residentSex(specieResident, sex) : specieResident;
    return haveSex.length;
  }

  if (sex) {
    return countSex(sex);
  }

  return countAllAnimals();
}

module.exports = countAnimals;
