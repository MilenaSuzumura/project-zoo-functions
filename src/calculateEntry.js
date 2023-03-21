const data = require('../data/zoo_data');

function countChild(entrants) {
  const children = entrants.filter((person) => person.age < 18);
  return children.length;
}

function countAdult(entrants) {
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50);
  return adults.length;
}

function countEntrants(entrants) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
