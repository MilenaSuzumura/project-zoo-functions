'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('purchase', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      entrants_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'entrants',
          key: 'id'
        }
      },
      datetime: {
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
      },
      total: {
        allowNull: false,
        type: Sequelize.FLOAT
      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('purchase');
  }
};
