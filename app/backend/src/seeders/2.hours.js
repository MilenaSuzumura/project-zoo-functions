'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hours', [
      { id: 1, dayWeek: 'Monday', open: 0, close: 0 },
      { id: 2, dayWeek: 'Tuesday', open: 8, close: 6 },
      { id: 3, dayWeek: 'Wednesday', open: 8, close: 6 },
      { id: 4, dayWeek: 'Thursday', open: 10, close: 8 },
      { id: 5, dayWeek: 'Friday', open: 10, close: 8 },
      { id: 6, dayWeek: 'Saturday', open: 8, close: 10 },
      { id: 7, dayWeek: 'Sunday', open: 8, close: 8 }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hours', null, {});
  }
};
