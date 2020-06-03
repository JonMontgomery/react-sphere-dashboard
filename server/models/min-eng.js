'use strict';

module.exports = (sequelize, DataTypes) => {
  const minEng = sequelize.define('engagementMetrics', {
    userID: {id:'userID', type:DataTypes.BIGINT(20), primaryKey:true},
    averageEngagementLikesComments: DataTypes.DECIMAL(7,2),
    engagement: DataTypes.INTEGER,
},{
  timestamps: false,
  sequelize,
})
  return minEng;
};