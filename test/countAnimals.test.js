const countAnimals = require('../src/countAnimals');
const { allAnimals, haveSexAnimal } = require('./mocks/countAnimals.mock');

describe('Testa as funções do arquivo countAnimals', () => {
  it('Testa se, ao não passar nenhum parâmetro, ele retorna a quantidade de residentes de todos os animais', () => {
    expect(countAnimals()).toEqual(allAnimals);
  });

  it('Testa se, ao mandar um animal, ele retorna a quantidade de todos os residentes daquele animal', () => {
    expect(countAnimals({ specie: 'bears' })).toEqual(3);
  });

  it('Testa se, ao mandar um animal e um sexo, ele retorna a quantidade de todos os residentes daquele animal com aquele sexo', () => {
    expect(countAnimals({ specie: 'elephants', sex: 'male' })).toEqual(2);
  });

  it('Testa se, ao mandar um sexo, ele retorna a quantidade de todos os residentes daquele sexo', () => {
    expect(countAnimals({ sex: 'female' })).toEqual(haveSexAnimal);
  });
});
