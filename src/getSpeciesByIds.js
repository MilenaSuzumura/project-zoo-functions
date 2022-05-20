const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animais) => ids.find((id) => animais.id === id));
}

module.exports = getSpeciesByIds;
