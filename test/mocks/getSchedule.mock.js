const allSchedule = {
  Friday: {
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
    officeHour: 'Open from 10am until 8pm',
  },
  Monday: {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  },
  Saturday: {
    exhibition: [
      'lions',
      'tigers',
      'bears',
      'penguins',
      'otters',
      'frogs',
      'snakes',
      'elephants',
    ],
    officeHour: 'Open from 8am until 10pm',
  },
  Sunday: {
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
    officeHour: 'Open from 8am until 8pm',
  },
  Thursday: {
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
    officeHour: 'Open from 10am until 8pm',
  },
  Tuesday: {
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
    officeHour: 'Open from 8am until 6pm',
  },
  Wednesday: {
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
    officeHour: 'Open from 8am until 6pm',
  },
};

const penguinsDay = ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'];

module.exports = {
  allSchedule,
  penguinsDay,
};
