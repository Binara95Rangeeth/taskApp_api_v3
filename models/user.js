'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      // define association here
      this.hasMany(Task, { foreignKey: "userId" })
    }
    toJSON() {
      return{...this.get(), id: undefined}
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    email: DataTypes.STRING,
    hashedPWD: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    userImgURL: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'user',
    modelName: 'User',
  });
  return User;
};