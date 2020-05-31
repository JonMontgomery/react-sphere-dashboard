'use strict';

module.exports = (sequelize, DataTypes) => {
  const About = sequelize.define('about', {
    userID: {id:'userID', type:DataTypes.BIGINT(20), primaryKey:true},
    age: DataTypes.INTEGER,
    ofDrinkingAge: DataTypes.STRING(3),
    gradYear: DataTypes.BOOLEAN,
    recentPromo: DataTypes.BOOLEAN,
    businessCategory: DataTypes.STRING(100),
    bio: DataTypes.STRING(150),
    verified: DataTypes.BOOLEAN,
    vsco: DataTypes.BOOLEAN,
    youtube: DataTypes.BOOLEAN,
    twitter: DataTypes.BOOLEAN,
    twitch: DataTypes.BOOLEAN,
    mixer: DataTypes.BOOLEAN,
    snapchat: DataTypes.BOOLEAN,
    tiktok: DataTypes.BOOLEAN,
    pinterest: DataTypes.BOOLEAN,
    onlyfans: DataTypes.BOOLEAN,
    spotify: DataTypes.BOOLEAN,
    language: DataTypes.STRING(5)
},{
  timestamps: false,
  sequelize,
  modelName: 'about',
})
  return About;
};