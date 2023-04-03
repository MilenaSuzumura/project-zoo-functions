const getAnimalMap = require('../src/getAnimalMap');
const { allAnimalMap, residentsMale, residentFemaleSorted, residentSorted } = require('./mocks/getAnimalMap.mock');

describe('Testa a função getAnimalMap', () => {
  it('Ao não passar nenhum parametro, a função retorna a localização de todos os animais', () => {
    expect(getAnimalMap()).toMatchObject(allAnimalMap);
  });

  it('Ao passar somente o sexo, a função retorna a localização de todos os animais', () => {
    expect(getAnimalMap({ sex: 'male' })).toMatchObject(allAnimalMap);
  });

  it('Ao passar includeNames e o sexo, a função retorna a localização de todos os residentes daquele sexo', () => {
    expect(getAnimalMap({ includeNames: true, sex: 'male' })).toMatchObject(residentsMale);
  });

  it('Ao passar includeNames e sorted, a função retorna os residentes por ordem alfabética', () => {
    expect(getAnimalMap({ includeNames: true, sorted: true })).toMatchObject(residentSorted);
  });

  it('Ao passar includeNames, female e sorted, a função retorna os residentes por ordem alfabética daquele sexo', () => {
    expect(getAnimalMap({ includeNames: true, sex: 'female', sorted: true })).toMatchObject(residentFemaleSorted);
  });
});
