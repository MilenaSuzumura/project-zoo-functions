const data = require('../data/zoo_data');

function countChild(entrants) {
  const children = entrants.filter((person) => person.age < 18);
  return children.length;
}

function countAdult(entrants) {
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50);
  return adults.length;
}

function countSenior(entrants) {
  const senior = entrants.filter((person) => person.age >= 50);
  return senior.length;
}

function countEntrants(entrants) {
  const child = countChild(entrants);
  const adult = countAdult(entrants);
  const senior = countSenior(entrants);
  return { adult, child, senior };
}

function calculateAdults(quantity) {
  return data.prices.adult * quantity;
}

function calculateChildren(quantity) {
  return data.prices.child * quantity;
}

function calculateSenior(quantity) {
  return data.prices.senior * quantity;
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
