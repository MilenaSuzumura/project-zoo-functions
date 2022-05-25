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
});
