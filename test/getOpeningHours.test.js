const getOpeningHours = require('../src/getOpeningHours');
const {
  allHours,
  zooClosed,
  zooOpen,
  errorDayInvalid,
  errorHoursInvalid,
  errorAMPMInvalid,
  errorHoursDoesntExist,
  errorMinuteDoesntExist,
} = require('./mocks/getOpeningHours.mock');

// Referencia: utilizei esse link para saber como verificar um objeto https://jestjs.io/pt-BR/docs/using-matchers
describe('Testes da função getOpeningHours', () => {
  test('Não passando argumentos, deve retornar todos os dias e horários', () => {
    expect(getOpeningHours()).toEqual(allHours);
  });

  test('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(zooClosed);
  });

  test('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(zooOpen);
  });

  test('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(zooClosed);
  });

  test('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(errorDayInvalid);
  });

  test('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: The abbreviation must be AM or PM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(errorAMPMInvalid);
  });

  test('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: The hour should represent a number', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(errorHoursInvalid);
  });

  test('Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(errorHoursDoesntExist);
  });

  test('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(errorMinuteDoesntExist);
  });
});
