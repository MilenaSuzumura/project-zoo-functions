const data = require('../data/zoo_data');

function countAnimals(animal) {
  const existeValor = animal !== undefined ? animal : false;
  const { specie, sex } = existeValor;
  const semValor = data.species.reduce((acc, animais) => {
    acc[animais.name] = animais.residents.length;
    return acc;
  }, {});
  if (existeValor !== false) {
    const procuraAnimal = data.species.filter((animais) => animais.name === specie)[0]
      .residents.map((animais) => animais);
    if (sex !== undefined) {
      return procuraAnimal.filter((residentes) => residentes.sex === sex).length;
    }
    return procuraAnimal.length;
  }
  return semValor;
}

module.exports = countAnimals;
