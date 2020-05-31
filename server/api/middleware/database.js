'use strict'

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 10,
    idle: 30000,
    acquire: 60000,
  },
  define:{
    freezeTableName: true
  }
});

//todo: add proper http handling responses
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.profile = require('../../models/profile')(sequelize, Sequelize);
db.engagementMetrics = require('../../models/engagement-metrics')(sequelize, Sequelize);
db.about = require('../../models/about')(sequelize, Sequelize);


//relations
db.profile.hasOne(db.engagementMetrics, { foreignKey: 'userID' });
db.engagementMetrics.belongsTo(db.profile, { foreignKey: 'userID' });
db.profile.hasOne(db.about, { foreignKey: 'userID' });
db.about.belongsTo(db.profile, { foreignKey: 'userID' });

module.exports = db;
