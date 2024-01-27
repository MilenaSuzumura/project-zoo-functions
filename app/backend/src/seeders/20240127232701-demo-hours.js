'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hours', [
      { id: 1,  day: 'Monday', open: 0, close: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: 2,  day: 'Tuesday', open: 8, close: 6, createdAt: new Date(), updatedAt: new Date() },
      { id: 3,  day: 'Wednesday', open: 8, close: 6, createdAt: new Date(), updatedAt: new Date() },
      { id: 4,  day: 'Thursday', open: 10, close: 8, createdAt: new Date(), updatedAt: new Date() },
      { id: 5,  day: 'Friday', open: 10, close: 8, createdAt: new Date(), updatedAt: new Date() },
      { id: 6,  day: 'Saturday', open: 8, close: 10, createdAt: new Date(), updatedAt: new Date() },
      { id: 7,  day: 'Sunday', open: 8, close: 8, createdAt: new Date(), updatedAt: new Date() }
    ], { timestamps: false })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hours', null, {});
  }
};
