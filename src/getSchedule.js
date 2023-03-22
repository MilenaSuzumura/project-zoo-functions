const data = require('../data/zoo_data');

function validateAnimal(isAnimal) {
  return data.species.some((animal) => animal.name === isAnimal);
}

function validateDay(isDay) {
  return Object.keys(data.hours).some((day) => day === isDay);
}

function validateParameter(parameter) {
  const isAnimal = validateAnimal(parameter);
  const isDay = validateDay(parameter);

  return { animal: isAnimal, day: isDay };
}

function findAnimal(animalSchedule) {
  return data.species.find((animal) => animal.name === animalSchedule).availability;
}

function arrayAnimals(day) {
  if (day === 'Monday') return 'The zoo will be closed!';

  return data.species.reduce((acc, animal) => {
    if (animal.availability.includes(day)) acc.push(animal.name);
    return acc;
  }, []);
}

function schedule(day) {
  if (day === 'Monday') return 'CLOSED';
  return `Open from ${data.hours[`${day}`].open}am until ${data.hours[`${day}`].close}pm`;
}

function scheduleFormat(day) {
  const animal = arrayAnimals(day);
  const time = schedule(day);
  return { [`${day}`]: { exhibition: animal, officeHour: time } };
}

function everySchedule() {
  return Object.keys(data.hours).reduce((acc, dayOfWeek) => {
    const scheduleDay = scheduleFormat(dayOfWeek);
    return { ...acc, ...scheduleDay };
  }, {});
}

function getSchedule(scheduleTarget) {
  const validate = validateParameter(scheduleTarget);

  if (validate.animal) return findAnimal(scheduleTarget);

  if (validate.day) return scheduleFormat(scheduleTarget);

  return everySchedule();
}

module.exports = getSchedule;
