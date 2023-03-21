const { calculateEntry, countEntrants } = require('../src/calculateEntry');
const { entrants, entrantsQuantity } = require('./mocks/calculateEntry.mock');

describe('Testes do arquivo calculateEntry', () => {
  it('Se não passar nenhum parâmetro, ele retorna 0', () => {
    expect(calculateEntry(0)).toEqual(0);
  });

  it('Testa se a função countEntrants calcula os argumentos corretamente', () => {
    expect(countEntrants(entrants)).toEqual(entrantsQuantity);
  });

  it('Testa se a função calculateEntry retorna o valor total da compra dos ingressos', () => {
    expect(calculateEntry(entrants)).toEqual(166.95);
  });
});
