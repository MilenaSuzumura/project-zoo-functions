const getSpeciesByIds = require('../src/getSpeciesByIds');
const { frogsId, frogs, penguins, penguinsId, tigers, tigersId } = require('./mocks/animalsId.mock');

describe('Testes do arquivo getSpeciesByIds', () => {
  it('Se não passar nenhum parâmetro, ele retorna um array vazio', () => {
    expect(getSpeciesByIds()).toEqual([]);
  });

  it('Se passar um id, ele retorna um array com informações do animal', () => {
    expect(getSpeciesByIds(frogsId)).toEqual([frogs]);
  });

  it('Se passar mais de um id, ele retorna um array com informações dos animais', () => {
    expect(getSpeciesByIds(tigersId, penguinsId)).toEqual([tigers, penguins]);
  });
});
