module.exports = (db, params) => {
  return db.profile.findAll({
    include: [
      { model: db.about },
      { model: db.engagementMetrics }
    ],
    limit: 10,
  })
  .then(influencers => {
    return influencers
  })
}