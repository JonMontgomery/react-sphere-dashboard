const Sequelize = require('sequelize');
const sequelize = require('../api/middleware/database.js')
const Model = Sequelize.Model;
const DataTypes = Sequelize.DataTypes;

class Profile extends Model {}
Profile.init({
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

class About extends Model {}
About.init({
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

class EngagementMetrics extends Model{}
EngagementMetrics.init({
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

Profile.hasOne(EngagementMetrics);
EngagementMetrics.belongsTo(Profile);
Profile.hasOne(About);
About.belongsTo(Profile);


module.exports = Profile;