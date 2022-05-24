const data = require('../data/zoo_data');

function horario(dia) {
  if (dia === 'Monday') return 'CLOSED';
  return `Open from ${data.hours[`${dia}`].open}am until ${data.hours[`${dia}`].close}pm`;
}

function arrayAnimais(dia) {
  if (dia === 'Monday') return 'The zoo will be closed!';
  return data.species.reduce((acc, animal) => {
    if (animal.availability.includes(dia)) acc.push(animal.name);
    return acc;
  }, []);
}

function getSchedule(scheduleTarget) {
  const animalExiste = data.species.some((animais) => animais.name === scheduleTarget);
  const diaExiste = Object.keys(data.hours).some((dias) => dias === scheduleTarget);
  if (animalExiste === true) {
    return data.species.find((animal) => animal.name === scheduleTarget).availability;
  } if (diaExiste === true) {
    const animal = arrayAnimais(scheduleTarget);
    const horas = horario(scheduleTarget);
    return { [`${scheduleTarget}`]: { exhibition: animal, officeHour: horas } };
  }
  return Object.keys(data.hours).reduce((acc, semanaDia) => {
    const animal = arrayAnimais(semanaDia);
    const horas = horario(semanaDia);
    acc[semanaDia] = { exhibition: animal, officeHour: horas };
    return acc;
  }, {});
}

module.exports = getSchedule;
