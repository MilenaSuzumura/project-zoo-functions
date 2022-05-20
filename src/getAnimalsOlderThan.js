const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalEscolhido = data.species.filter((animais) => animal === animais.name);
  return animalEscolhido.every((animais) => animais.residents
    .every((residentes) => residentes.age > age));
}

module.exports = getAnimalsOlderThan;
