'use strict';

module.exports = (sequelize, DataTypes) => {
  const minPro = sequelize.define('profile', {
    userID: {id:'userID', type:DataTypes.BIGINT(20), primaryKey:true},
    fullName: DataTypes.STRING(255),
    state: DataTypes.STRING(2),
    username: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    email: DataTypes.STRING(320),
},{
  timestamps: false,
  sequelize,
  modelName: 'profile',
  })
  return minPro;
};