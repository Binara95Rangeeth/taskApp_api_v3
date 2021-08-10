"use strict";
module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable("task", {
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
      taskname: {
        type: DataType.STRING,
        allowNull: false,
      },
      content: {
        type: DataType.TEXT,
      },
      task_done: {
        type: DataType.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: DataType.INTEGER,
        allowNull: false,
      },
      on_date: {
        type: DataType.STRING,
      },
      on_time: {
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
    await queryInterface.dropTable("task");
  },
};
