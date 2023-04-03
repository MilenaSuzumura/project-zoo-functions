const getOldestFromFirstSpecies = require('../src/getOldestFromFirstSpecies');
const { stephanieId } = require('./mocks/employees.mock');

describe('Testa a função getOldestFromFirstSpecies', () => {
  it('Testa se, ao passar um funcionario, retornará o mais velho da primeira espécie', () => {
    expect(getOldestFromFirstSpecies(stephanieId)).toEqual(['Margherita', 'female', 10]);
  });
});
