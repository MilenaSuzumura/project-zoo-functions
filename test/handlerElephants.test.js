const handlerElephants = require('../src/handlerElephants');

// Referencia: utilizei esse link para saber como procurar um valor do array https://jestjs.io/pt-BR/docs/using-matchers
describe('Testes da função HandlerElephants', () => {
  test('Para o argumento count, retorna a quantidade de elefantes que é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Para o argumento names, retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('Para o argumento averageAge, retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('Para o argumento location, retorna a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Para o argumento popularity, retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  test('Para o argumento availability, retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  test('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
