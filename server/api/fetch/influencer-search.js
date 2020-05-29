const InfluencerSearchResult = require('../../models/influencer-search-result.js');
const sequelize = require('../middleware/database.js');
const Sequelize = require('sequelize');

function influencer_search(){
  const searchResult = InfluencerSearchResult(sequelize, Sequelize.DataTypes);
  return searchResult.findAll({
    limit:10
  })
  .then(influencers => {
    return influencers;
  })
}

module.exports = influencer_search;