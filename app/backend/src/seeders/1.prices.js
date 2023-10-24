'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prices',
    [{
      id: 1,
      type: 'child',
      ageMin: 0,
      ageMax: 17,
      price: 20.99
    }, {
      id: 2,
      type: 'adult',
      ageMin: 18,
      ageMax: 49,
      price: 49.99
    }, {
      id: 3,
      type: 'senior',
      ageMin: 50,
      ageMax: 200,
      price: 24.99
    }], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prices', null, {});
  }
};
