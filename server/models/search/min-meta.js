'use strict';

module.exports = (sequelize, DataTypes) => {
  const minPro = sequelize.define('metadata', {
    userID: {id:'userID', type:DataTypes.BIGINT(20), primaryKey:true},
    profilePictureURL: DataTypes.STRING(255),
},{
  timestamps: false,
  freezeTableName: true,
  sequelize,
  })
  return minPro;
};