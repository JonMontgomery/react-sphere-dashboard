'use strict';

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('profile', {
    userID: {id:'userID', type:DataTypes.BIGINT(20), primaryKey:true},
    fullName: DataTypes.STRING(255),
    state: DataTypes.STRING(2),
    username: DataTypes.STRING,
    numPosts: DataTypes.INTEGER,
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    email: DataTypes.STRING(320),
},{
  timestamps: true,
  updatedAt: 'lastUpdated',
  createdAt: 'dateFound',
  sequelize,
  modelName: 'profile',
  })
  return Profile;
};