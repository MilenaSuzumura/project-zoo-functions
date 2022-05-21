const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entradas = { adult: 0, child: 0, senior: 0 };
  const criancas = entrants.filter((pessoas) => pessoas.age < 18);
  const adultos = entrants.filter((pessoas) => pessoas.age >= 18 && pessoas.age < 50);
  const idosos = entrants.filter((pessoas) => pessoas.age >= 50);
  entradas.adult = adultos.length;
  entradas.child = criancas.length;
  entradas.senior = idosos.length;
  return entradas;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const quantidade = countEntrants(entrants);
  const precoAdulto = data.prices.adult * quantidade.adult;
  const precoCrianca = data.prices.child * quantidade.child;
  const precoIdoso = data.prices.senior * quantidade.senior;
  return precoAdulto + precoCrianca + precoIdoso;
}

module.exports = { calculateEntry, countEntrants };
