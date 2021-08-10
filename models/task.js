'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User,{foreignKey:"userId"})
    }
    // toJSON() {
    //   return {...this.get(),uuid:undefined,id:undefined}
    // }
  };
  Task.init({
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    taskname: {
        type: DataTypes.STRING,
        allowNull:false
      },
    content: DataTypes.TEXT,
    task_done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    on_date: DataTypes.STRING,
    on_time: DataTypes.STRING,
  }, {
    sequelize,
    tableName:"task",
    modelName: 'Task',
  });
  return Task;
};