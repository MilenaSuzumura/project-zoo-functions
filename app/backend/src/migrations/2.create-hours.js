'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hours', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      dayWeek: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      open: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      close: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('hours');
  }
};
