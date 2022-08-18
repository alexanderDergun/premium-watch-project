module.exports = {
  async up(queryInterface, Sequelize) {

    const attributes = {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        username: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        email: {
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true,
        },
        phone: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        isAdmin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    }


    await queryInterface.createTable('Users', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};