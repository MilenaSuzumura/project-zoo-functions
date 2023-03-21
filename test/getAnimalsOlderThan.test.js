const getAnimalsOlderThan = require('../src/getAnimalsOlderThan');

describe('Testa a função getAnimalsOlderThan', () => {
  it('Testa se, ao passar o animal e uma idade, ele retorna se todos são mais velhos', () => {
    expect(getAnimalsOlderThan('penguins', 1)).toEqual(true);
  });

  it('Testa se, ao passar o animal e uma idade, ele retorna que nem todos os animais são mais velhos', () => {
    expect(getAnimalsOlderThan('lions', 10)).toEqual(false);
  });
});
