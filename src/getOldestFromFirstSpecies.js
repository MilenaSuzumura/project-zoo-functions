const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsavel = data.employees.filter((funcionario) => funcionario.id === id)
    .map(({ responsibleFor }) => responsibleFor);
  const animais = responsavel[0].map((ids) => data.species.filter((animal) =>
    animal.id === ids));
  const filtroAnimal = animais[0].map((animal) => animal.residents
    .reduce((acc, valorAtual) => {
      let maisVelho = acc;
      if (maisVelho.age < valorAtual.age) maisVelho = valorAtual;
      return maisVelho;
    }))[0];
  return Object.values(filtroAnimal);
}

module.exports = getOldestFromFirstSpecies;
