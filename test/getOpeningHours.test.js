const getOpeningHours = require('../src/getOpeningHours');

// Referencia: utilizei esse link para saber como verificar um objeto https://jestjs.io/pt-BR/docs/using-matchers
describe('Testes da função getOpeningHours', () => {
  test('Não passando argumentos, deve retornar todos os dias e horários', () => {
    expect(getOpeningHours()).toEqual({Tuesday: { open: 8, close: 6 }, Wednesday: { open: 8, close: 6 }, Thursday: { open: 10, close: 8 }, Friday: { open: 10, close: 8 }, Saturday: { open: 8, close: 10 }, Sunday: { open: 8, close: 8 }, Monday: { open: 0, close: 0 }});
  });
  test('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
