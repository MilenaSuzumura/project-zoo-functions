'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('species',
    [{
      id: 1,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: [2, 4, 6, 7],
      residents: [
        { name: 'Zena', sex: 'female', age: 12 },
        { name: 'Maxwell', sex: 'male', age: 15 },
        { name: 'Faustino', sex: 'male', age: 7 },
        { name: 'Dee', sex: 'female', age: 14 },
      ],
    }, {
      id: 2,
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      availability: [2, 3, 5, 6],
      residents: [
        { name: 'Shu', sex: 'female', age: 19 },
        { name: 'Esther', sex: 'female', age: 17 },
      ],
    }, {
      id: 3,
      name: 'bears',
      popularity: 5,
      location: 'NW',
      availability: [2, 3, 6, 7],
      residents: [
        { name: 'Hiram', sex: 'male', age: 4 },
        { name: 'Edwardo', sex: 'male', age: 4 },
        { name: 'Milan', sex: 'male', age: 4 },
      ],
    },
    {
      id: 4,
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      availability: [2, 3, 6, 7],
      residents: [
        { name: 'Joe', sex: 'male', age: 10 },
        { name: 'Tad', sex: 'male', age: 12 },
        { name: 'Keri', sex: 'female', age: 2 },
        { name: 'Nicholas', sex: 'male', age: 2 },
      ],
    },
    {
      id: 5,
      name: 'otters',
      popularity: 4,
      location: 'SE',
      availability: [3, 4, 5, 6],
      residents: [
        { name: 'Neville', sex: 'male', age: 9 },
        { name: 'Lloyd', sex: 'male', age: 8 },
        { name: 'Mercedes', sex: 'female', age: 9 },
        { name: 'Margherita', sex: 'female', age: 10 },
      ],
    },
    {
      id: 6,
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      availability: [3, 4, 5, 6],
      residents: [
        { name: 'Cathey', sex: 'female', age: 3 },
        { name: 'Annice', sex: 'female', age: 2 },
      ],
    },
    {
      id: 7,
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      availability: [4, 5, 6, 7],
      residents: [
        { name: 'Paulette', sex: 'female', age: 5 },
        { name: 'Bill', sex: 'male', age: 6 },
      ],
    },
    {
      id: 8,
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: [2, 5, 6, 7],
      residents: [
        { name: 'Ilana', sex: 'female', age: 11 },
        { name: 'Orval', sex: 'male', age: 15 },
        { name: 'Bea', sex: 'female', age: 12 },
        { name: 'Jefferson', sex: 'male', age: 4 },
      ],
    },
    {
      id: 9,
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      availability: [2, 3, 4, 5],
      residents: [
        { name: 'Gracia', sex: 'female', age: 11 },
        { name: 'Antone', sex: 'male', age: 9 },
        { name: 'Vicky', sex: 'female', age: 12 },
        { name: 'Clay', sex: 'male', age: 4 },
        { name: 'Arron', sex: 'male', age: 7 },
        { name: 'Bernard', sex: 'male', age: 6 },
      ],
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('species', null, {});
  }
};
