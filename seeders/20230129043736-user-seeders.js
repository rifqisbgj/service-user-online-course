'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Rifqi Subagja',
        profesi: "Admin Online Course",
        role: "admin",
        email: "rifqi@gmail.com",
        password: await bcrypt.hash('passwordrahasia', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Krisna Milenia',
        profesi: "Teacher",
        role: "student",
        email: "krisna@gmail.com",
        password: await bcrypt.hash('passwordrahasiauser', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
