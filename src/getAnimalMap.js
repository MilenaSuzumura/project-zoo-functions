const data = require('../data/zoo_data');

function comResidentes(residentes, sex, sorted) {
  const sexAnimal = residentes.filter((residente) => residente.sex === sex)
    .map((residente) => residente.name);
  const sexExiste = sex !== undefined ? sexAnimal : residentes.map((residente) =>
    residente.name);
  const sortExiste = sorted === true ? sexExiste.sort() : sexExiste;
  return sortExiste;
}

function verificaValor(valor, animal, animalComResidentes) {
  const existeValor = valor === false ? animal : animalComResidentes;
  return existeValor;
}

function getAnimalMap(options) {
  const valorExiste = options === undefined || Object.keys(options)[0] !== 'includeNames'
    ? false : options;
  const { sex, sorted } = valorExiste;
  const comSex = data.species.reduce((acc, animal) => {
    const objeto = {};
    const residente = comResidentes(animal.residents, sex, sorted);
    objeto[animal.name] = residente;
    acc.push(objeto);
    return acc;
  }, []);
  return data.species.reduce((acc, animal, index) => {
    const resultado = verificaValor(valorExiste, animal.name, comSex[index]);
    if (Object.keys(acc).includes(animal.location)) acc[animal.location].push(resultado);
    else acc[animal.location] = [resultado];
    return acc;
  }, {});
}

module.exports = getAnimalMap;
