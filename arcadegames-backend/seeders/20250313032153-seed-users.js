"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("123456", 10); // Hash "123456"
    const hashedAdminPassword = await bcrypt.hash("admin", 10);

    const users = [
      "vision",
      "tester08",
      "tester02",
      "tester27",
      "tester03",
      "tester88",
      "Crimson",
      "dgp_loi",
      "tester05",
      "tester06",
      "tester04",
      "tester0122",
      "tester01",
    ].map((username) => ({
      username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    users.push({
      username: "admin",
      password: hashedAdminPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert("users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
