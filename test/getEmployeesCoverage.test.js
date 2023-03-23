const getEmployeesCoverage = require('../src/getEmployeesCoverage');
const { stephanie } = require('./mocks/employees.mock');
const { allEmployeesCoverage, stephanieInfo } = require('./mocks/getEmployeesCoverage.mock');

describe('Testa a função getEmployeeByName', () => {
  it('Testa se, ao não passar parametros, retorna a informação de todos os funcionários', () => {
    expect(getEmployeesCoverage()).toEqual(allEmployeesCoverage);
  });

  it('Testa se, ao passar um id, retorna as informações do funcionário', () => {
    expect(getEmployeesCoverage({ id: stephanie.id })).toEqual(stephanieInfo);
  });

  it('Testa se, ao passar o firstName, retorna as infotrmações do funcionário', () => {
    expect(getEmployeesCoverage({ name: stephanie.firstName })).toEqual(stephanieInfo);
  });

  it('Testa se, ao passar o lastName, retorna as informações do funcionário', () => {
    expect(getEmployeesCoverage({ name: stephanie.lastName })).toEqual(stephanieInfo);
  });

  it('Testa se, ao passar informação errada, ele retorna um erro', () => {
    expect(() => getEmployeesCoverage({ name: 'asdasdfsad' })).toThrow(/^Informações inválidas$/);
  });
});
