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
      }
    ],
    where:{
      followers: {
        [op.between]: params.followers.split(",").map(x => parseInt(x))
      }
      // [Op.and]: [{db.language: params.language}],
    },
    limit: 10,
  })
  .then(influencers => {
    return influencers
  })
}