const { getRelatedEmployees, isManager } = require('../src/getRelatedEmployees');
const { stephanieId } = require('./mocks/employees.mock');

const employees = ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];

describe('Testa as funções do arquivo getRelatedEmployees', () => {
  it('Testa se o id passado em isManager é gerente', () => {
    expect(isManager(stephanieId)).toEqual(true);
  });

  it('Testa se, ao passar uma string vazia, ele dá uma mensagem de erro', () => {
    expect(() => getRelatedEmployees('')).toThrow(/^O id inserido não é de uma pessoa colaboradora gerente!$/);
  });

  it('Testa se, ao passar o id de um gerente, ele retorna os funcionarios que o gerente gerência', () => {
    expect(getRelatedEmployees(stephanieId)).toEqual(employees);
  });
});
