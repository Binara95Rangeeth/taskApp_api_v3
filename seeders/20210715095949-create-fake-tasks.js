'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('task', [
      // {
      //   id: "",
      //   uuid: "",
      //   taskname: "",
      //   content: "",
      //   task_done: false,
      //   userId: "",
      //   on_date: "",
      //   on_time: "",
      //   createdAt: "",
      //   updatedAt: ""
      // },
      {
        id: 1,
        uuid: "8ea6a6f6-de59-4653-84f1-bdaf295c2dd3",
        task_done: false,
        taskname: "New Task",
        content: "some new task tommarow",
        on_date: "2021-05-10",
        on_time: "17:50",
        userId: 1,
        updatedAt: "2021-07-15T19:33:59.013Z",
        createdAt: "2021-07-15T19:33:59.013Z"
      },
      {
        uuid: "cb133d46-3a00-48e8-ad16-4e6c290c3410",
        task_done: true,
        id: 2,
        taskname: "Another Task",
        content: "some othe task daafter tomarrow",
        on_date: "2021-05-15",
        on_time: "18:02",
        userId: 1,
        updatedAt: "2021-07-15T19:42:52.617Z",
        createdAt: "2021-07-15T19:42:52.617Z"
      },
      {
        uuid: "cc06b760-0e5e-4284-bc14-ea76905a5ef3",
        task_done: false,
        id: 3,
        taskname: "Some Big Task",
        content: "Not a important task",
        on_date: "2022-10-01",
        on_time: "09:30",
        userId: 1,
        updatedAt: "2021-07-15T19:46:05.453Z",
        createdAt: "2021-07-15T19:46:05.453Z"
      },
      {
        uuid: "82bdce0c-e0a2-491f-9bb4-e2fc19fb88b8",
        task_done: false,
        id: 4,
        taskname: "Big Task",
        content: "a big task with the group",
        on_date: "2022-01-15",
        on_time: "10:50",
        userId: 2,
        updatedAt: "2021-07-15T19:49:47.436Z",
        createdAt: "2021-07-15T19:49:47.436Z"
      },
      {
        uuid: "fd706af2-bc62-4059-bcfd-6f86682f88f5",
        task_done: true,
        id: 5,
        taskname: "A very small Task",
        content: "a small task with the team",
        on_date: "2022-04-25",
        on_time: "15:10",
        userId: 2,
        updatedAt: "2021-07-15T19:51:45.792Z",
        createdAt: "2021-07-15T19:51:45.792Z"
      },
      {
        uuid: "d88c892e-3755-416c-b983-e66056824a44",
        task_done: false,
        id: 6,
        taskname: "Masive Huge Task",
        content: "a very massive huge task with girlfriend",
        on_date: "2022-10-04",
        on_time: "24:18",
        userId: 3,
        updatedAt: "2021-07-15T19:55:08.395Z",
        createdAt: "2021-07-15T19:55:08.395Z"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
      // return await queryInterface.bulkDelete('task', null, {});
  }
};
