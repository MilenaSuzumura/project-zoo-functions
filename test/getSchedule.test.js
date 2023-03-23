const getSchedule = require('../src/getSchedule');
const { allSchedule, penguinsDay } = require('./mocks/getSchedule.mock');

describe('Testa a função getSchedule', () => {
  it('Testa se, ao não passar nenhum parametro, a função retorna toda a agenda do zoologico', () => {
    expect(getSchedule()).toEqual(allSchedule);
  });

  it('Testa se, ao mandar um animal no parametro, a função retorna os dias da semana desse animal', () => {
    expect(getSchedule('penguins')).toEqual(penguinsDay);
  });

  it('Testa se, ao mandar um dia da semana, ele retorna a agenda do zoologico desse dia', () => {
    expect(getSchedule('Sunday')).toEqual({ Sunday: allSchedule.Sunday });
  });

  it('Testa se, ao mandar Segunda, ele retorna que o zoologico estará fechado', () => {
    expect(getSchedule('Monday')).toEqual({ Monday: allSchedule.Monday });
  });
});
