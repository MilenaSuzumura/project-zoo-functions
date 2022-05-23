const data = require('../data/zoo_data');

function getAnimalMap(options) {
  const valorExiste = options === undefined || Object.keys(options)[0] !== 'includeNames'
    ? false : options;
  const { sex, sorted } = valorExiste;
  const comSex = data.species.reduce((acc, animal) => {
    const objeto = {};
    const sexAnimal = animal.residents.filter((residente) => residente.sex === sex)
      .map((residente) => residente.name);
    const sexExiste = sex !== undefined ? sexAnimal : animal.residents.map((residente) =>
      residente.name);
    const sortExiste = sorted === true ? sexExiste.sort() : sexExiste;
    objeto[animal.name] = sortExiste;
    acc.push(objeto);
    return acc;
  }, []);
  return data.species.reduce((acc, animal, index) => {
    const teste = valorExiste === false ? animal.name : comSex[index];
    if (Object.keys(acc).includes(animal.location)) acc[animal.location].push(teste);
    else acc[animal.location] = [teste];
    return acc;
  }, {});
}

module.exports = getAnimalMap;
