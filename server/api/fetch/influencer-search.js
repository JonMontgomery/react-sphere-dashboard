module.exports = (db, params) => {
  const op = db.op
  return db.minPro.findAll({
    include: [
      { 
        model: db.minAbout,
        where: {
          language: params.language,
        }
      },
      { model: db.minEng, 
        where: {
          averageEngagementLikesComments: {
            [op.gt]: params.minEngagement,
          }
        }
      },
      { model: db.minMeta}
    ],
    where:{
      followers: {
        [op.between]: params.followers.split(",").map(x => parseInt(x))
      },
    },
    offset: parseInt(params.offset),
    limit: (10 + parseInt(params.offset)),
    subQuery:false,
  })
  .then(influencers => {
    return influencers
  })
}