'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [
      {
        id: 1,
        firstName: 'Stephanie',
        lastName: 'Strauss',
        managers: [],
        responsibleFor: [5, 9],
      }, {
        id: 2,
        firstName: 'Burl',
        lastName: 'Bethea',
        managers: [1],
        responsibleFor: [1, 2, 3, 4],
      }, {
        id: 3,
        firstName: 'Ola',
        lastName: 'Orloff',
        managers: [1],
        responsibleFor: [5, 6, 7, 8],
      }, {
        id: 4,
        firstName: 'Emery',
        lastName: 'Elser',
        managers: [1],
        responsibleFor: [1, 3, 8],
      }, {
        id: 5,
        firstName: 'Nigel',
        lastName: 'Nelson',
        managers: [2, 3],
        responsibleFor: [1, 2],
      },

      {
        id: 6,
        firstName: 'Wilburn',
        lastName: 'Wishart',
        managers: [2, 3],
        responsibleFor: [7, 8],
      }, {
        id: 7,
        firstName: 'Sharonda',
        lastName: 'Spry',
        managers: [2, 3],
        responsibleFor: [5, 6],
      }, {
        id: 8,
        firstName: 'Ardith',
        lastName: 'Azevado',
        managers: [4],
        responsibleFor: [2, 3],
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
