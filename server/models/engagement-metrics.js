'use strict';

module.exports = (sequelize, DataTypes) => {
  const EngagementMetrics = sequelize.define('engagementMetrics', {
    userID: {id:'userID', type:DataTypes.BIGINT(20), primaryKey:true},
    averageLikes: DataTypes.INTEGER,
    maxLikes: DataTypes.INTEGER,
    averageComments: DataTypes.INTEGER,
    maxComments: DataTypes.INTEGER,
    averageVideoViews: DataTypes.INTEGER,
    maxVideoViews: DataTypes.INTEGER,
    averageEngagementLikes: DataTypes.DECIMAL(7,2),
    averageEngagementLikesComments: DataTypes.DECIMAL(7,2),
    engagement: DataTypes.INTEGER,
    daysBetweenPost: DataTypes.DECIMAL(7,3),
},{
  timestamps: false,
  sequelize,
  modelName: 'engagementMetrics',
})
  return EngagementMetrics;
};