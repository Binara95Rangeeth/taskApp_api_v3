"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("user", [
      {
        uuid: "bcb611f4-e2ae-460f-abcc-c4520fa09a2b",
        username: "Binara",
        email: "binara.gcc@gmail.com",
        hashedPWD:
          "$2b$04$qheCmMI4oTwd9AGKnmiGbu3IRZ.IAixrbcXf.Mh8cSYopouvvPzGa", //123
        userImgURL: "",
        updatedAt: "2021-07-15 10:07:24",
        createdAt: "2021-07-15 10:07:24",
      },
      {
        uuid: "cdd748c6-ec4b-4693-acf7-67b7a78a8e7e",
        username: "Kasun",
        email: "kasun.rrcc@gmail.com",
        hashedPWD:
          "$2b$04$ropwqSX7UvMN/4Kch7/hiuB2J8zqI..L7lCy43c9KAt.KYfgXw4/G", //456
        userImgURL: "",
        updatedAt: "2021-07-15 11:48:30",
        createdAt: "2021-07-15 11:48:30",
      },
      {
        uuid: "e9c44137-207b-460d-8c9d-247d167afc95",
        username: "Supun",
        email: "supun.gcc@gmail.com",
        hashedPWD:
          "$2b$04$uoTRMc1f1jPW1FApUn4uL./mon/60QBi3vMqEpz4MIGjNZiAymvCu", //789
        userImgURL: "",
        updatedAt: "2021-07-15 12:53:53",
        createdAt: "2021-07-15 12:53:53",
      },

      // {
      //   username: "",
      //   email: "",
      //   hashedPWD: "",
      //   userImgURL:""
      // },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("user", null, {});
  },
};
