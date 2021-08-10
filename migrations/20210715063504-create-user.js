"use strict";
module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      uuid: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
      },
      username: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      hashedPWD: {
        type: DataType.STRING,
      },
      userImgURL: {
        type: DataType.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE,
      },
    });
  },
  down: async (queryInterface, DataType) => {
    await queryInterface.dropTable("user");
  },
};
