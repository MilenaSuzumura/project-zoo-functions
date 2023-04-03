const data = require('../data/zoo_data');

function filterSex(sex, residents) {
  const filter = residents.filter((resident) => resident.sex === sex);
  return filter.map((resident) => resident.name);
}

function getAllResidents(residents) {
  return residents.map((resident) => resident.name);
}

function haveFilter(filter, animal) {
  const { name, residents } = animal;
  const { sex, sorted } = filter;
  const haveSex = sex !== undefined ? filterSex(sex, residents) : getAllResidents(residents);
  const haveSorted = sorted !== undefined ? haveSex.sort() : haveSex;
  return { [name]: haveSorted };
}

function getAnimalMap(options) {
  const haveValue = options !== undefined && Object.keys(options)[0] === 'includeNames';
  const getAnimal = data.species.reduce((acc, animal) => {
    const result = haveValue ? haveFilter(options, animal) : animal.name;
    if (Object.keys(acc).includes(animal.location)) acc[animal.location].push(result);
    else acc[animal.location] = [result];
    return acc;
  }, {});
  return getAnimal;
}

module.exports = getAnimalMap;
