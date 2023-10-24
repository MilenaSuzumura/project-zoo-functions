'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('species', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      popularity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      availability: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'hours',
          key: 'id'
        }
      },
      residents: {
        type: Sequelize.ARRAY({
          name: { type: Sequelize.STRING, allowNull: false },
          sex: { type: Sequelize.STRING, allowNull: false },
          age: { type: Sequelize.INTEGER, allowNull: false }
        })
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('species');
  }
};
