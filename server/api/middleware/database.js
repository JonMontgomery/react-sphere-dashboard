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
db.op = Sequelize.Op;
db.sequelize = sequelize;

db.profile = require('../../models/profile')(sequelize, Sequelize);
db.engagementMetrics = require('../../models/engagement-metrics')(sequelize, Sequelize);
db.about = require('../../models/about')(sequelize, Sequelize);
db.minPro = require('../../models/search/min-pro')(sequelize, Sequelize);
db.minEng = require('../../models/search/min-eng')(sequelize, Sequelize);
db.minAbout = require('../../models/search/min-about')(sequelize, Sequelize);
db.minMeta = require('../../models/search/min-meta')(sequelize, Sequelize);


//relations

//influencer search cards
db.minPro.hasOne(db.minEng, { foreignKey: 'userID' });
db.minEng.belongsTo(db.minPro, { foreignKey: 'userID' });
db.minPro.hasOne(db.minAbout, { foreignKey: 'userID' });
db.minAbout.belongsTo(db.minPro, { foreignKey: 'userID' });
db.minPro.hasOne(db.minMeta, { foreignKey: 'userID' });
db.minMeta.belongsTo(db.minPro, { foreignKey: 'userID' });

//general profile
db.profile.hasOne(db.engagementMetrics, { foreignKey: 'userID' });
db.engagementMetrics.belongsTo(db.profile, { foreignKey: 'userID' });
db.profile.hasOne(db.about, { foreignKey: 'userID' });
db.about.belongsTo(db.profile, { foreignKey: 'userID' });

module.exports = db;
