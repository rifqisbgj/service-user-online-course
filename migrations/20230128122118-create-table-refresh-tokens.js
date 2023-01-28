'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('refresh_tokens', { 
      id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
      },
      token: {
        type: Sequelize.TEXT, allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER, allowNull: false
      },
      created_at: {
        type: Sequelize.DATE, allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE, allowNull: false
      },
    }).then(()=> queryInterface.addConstraint('refresh_tokens', {
      type: 'foreign key',
      name: 'REFRESH_TOKEN_USERS',
      fields: ['user_id'],
      references: {
        table: 'users',
        field: 'id'
      }
    }));

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('refresh_tokens');
  }
};
