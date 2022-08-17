module.exports = {
  async up(queryInterface) {
    
    await queryInterface.bulkInsert("Users", [{
      username: "Admin",
      email: "sanya@teamlead.com",
      phone: 880033333,
      password: "123",
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("User");
  },
};
