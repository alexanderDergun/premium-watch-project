module.exports = {
  async up(queryInterface) {
    watchesData = [
      {
        watchName: "Часы Самые лучшие",
        picture: "https://www.consul.ru/files/products/wbp2111_ba0627_orig.1600x1200w.jpg?d04a83c2b00eb80a3b7ab47338c75c52",
        description: "Лучшие часы из лучших. Вы никогда такого не видели. Премиум, стиль, успешный успех.",
        price: 265000,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        watchName: "Часы Дороже всех",
        picture: "https://www.consul.ru/files/products/8570_r51_20001.1600x1200w.jpg?74dda44012f31caa7aae7f15fda0d978",
        description: "Когда-нибудь ты накопишь на эти часы. Дороже ты не видел",
        price: 400000,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        watchName: "Часы Для нищих",
        picture: "https://www.consul.ru/files/products/5960_st_00520.1600x1200w.jpg?b4bba90a082ccb9125a620c53d106272",
        description: "Заработай уже денег хотя бы на эти часы",
        price: 195000,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Watches", watchesData);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("User");
  },
};
