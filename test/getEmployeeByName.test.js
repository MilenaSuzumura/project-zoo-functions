const getEmployeeByName = require('../src/getEmployeeByName');
const { stephanie } = require('./mocks/employees.mock');

describe('Testa a função getEmployeeByName', () => {
  it('Testa se ao passar o firstname, ele retorna informações do employee', () => {
    expect(getEmployeeByName(stephanie.firstName)).toEqual(stephanie);
  });

  it('Testa se ao passar o lastname, ele retorna informações do employee', () => {
    expect(getEmployeeByName(stephanie.lastName)).toEqual(stephanie);
  });

  it('Testa se ao passar parametro vazio, ele retorna um objeto vazio', () => {
    expect(getEmployeeByName()).toEqual({});
  });
});
