'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProfileSearchResult = sequelize.define('profile', {
    // profile
    userID: {id:'userID', type:DataTypes.BIGINT(2), primaryKey:true},
    username: DataTypes.STRING,
    state: DataTypes.STRING(2),
    fullName: DataTypes.STRING(255),
    followers: DataTypes.INTEGER,
  },{
    timestamps: true,
    updatedAt: 'lastUpdated',
    createdAt: 'dateFound',
    modelName: 'profile',
  });

  const AboutSearchResult = sequelize.define('about', {
    // profile
    userID: {id:'userID', type:DataTypes.BIGINT(2), primaryKey:true},
    // about
    bio: DataTypes.STRING(150),
    verified: DataTypes.BOOLEAN,
  },{
    timestamps: false,
    about: 'about',
  });

  const EngagementSearchResult = sequelize.define('engagementMetrics', {
    // profile
    userID: {id:'userID', type:DataTypes.BIGINT(2), primaryKey:true},
    // engagement
    engagementPercent: 
      {as: 'averageEngagementLikesComments', 
      type: DataTypes.DECIMAL(7,2)},
    engagementNum: DataTypes.INTEGER,
  },{
    timestamps: false,
    tableName: 'engagementMetrics',
  });

  ProfileSearchResult.hasOne(AboutSearchResult, {foreignKey: 'about_FK'});
  AboutSearchResult.belongsTo(ProfileSearchResult, {foreignKey: 'about_FK', targetKey: 'name'});
  // ProfileSearchResult.hasOne(EngagementSearchResult, {foreignKey: 'engagementMetrics_FK'});
  EngagementSearchResult.belongsTo(ProfileSearchResult, {foreignKey: 'engagementMetrics_FK', targetKey: 'name'});
  return ProfileSearchResult;
};

/*
Location
Bio 
Tags
*/