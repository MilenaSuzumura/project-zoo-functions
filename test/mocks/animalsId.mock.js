const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const penguinsId = 'ef3778eb-2844-4c7c-b66c-f432073e1c6b';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const tigers = {
  id: tigersId,
  name: 'tigers',
  popularity: 5,
  location: 'NW',
  availability: ['Wednesday', 'Friday', 'Saturday', 'Tuesday'],
  residents: [
    {
      name: 'Shu',
      sex: 'female',
      age: 19,
    }, {
      name: 'Esther',
      sex: 'female',
      age: 17,
    },
  ],
};

const penguins = {
  id: penguinsId,
  name: 'penguins',
  popularity: 4,
  location: 'SE',
  availability: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
  residents: [
    {
      name: 'Joe',
      sex: 'male',
      age: 10,
    }, {
      name: 'Tad',
      sex: 'male',
      age: 12,
    }, {
      name: 'Keri',
      sex: 'female',
      age: 2,
    }, {
      name: 'Nicholas',
      sex: 'male',
      age: 2,
    },
  ],
};

const frogs = {
  id: frogsId,
  name: 'frogs',
  popularity: 2,
  location: 'SW',
  availability: ['Saturday', 'Friday', 'Thursday', 'Wednesday'],
  residents: [
    {
      name: 'Cathey',
      sex: 'female',
      age: 3,
    }, {
      name: 'Annice',
      sex: 'female',
      age: 2,
    },
  ],
};

module.exports = { frogsId, frogs, penguins, penguinsId, tigers, tigersId };
