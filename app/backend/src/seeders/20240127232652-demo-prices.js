'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Prices', [
      {
        id: 1,
        type: 'child',
        ageMin: 0,
        ageMax: 17,
        price: 20.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        type: 'adult',
        ageMin: 18,
        ageMax: 49,
        price: 49.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        type: 'senior',
        ageMin: 50,
        ageMax: 200,
        price: 24.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { timestamps: false })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Prices', null, {});
  }
};
