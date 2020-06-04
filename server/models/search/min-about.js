'use strict';

module.exports = (sequelize, DataTypes) => {
  const minAbout = sequelize.define('about', {
    userID: {id:'userID', type:DataTypes.BIGINT(20), primaryKey:true},
    bio: DataTypes.STRING(150),
    verified: DataTypes.BOOLEAN,
},{
  timestamps: false,
  sequelize,
  modelName: 'about',
})
  return minAbout;
};