const bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface) {
    const passwordAdmin = '123';
    const hash = await bcrypt.hash(passwordAdmin, 10)

    const admin = {
      username: "Admin",
      email: "sanya@teamlead.com",
      phone: 880033333,
      password: hash,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await queryInterface.bulkInsert("Users", [admin]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("User");
  },
};
