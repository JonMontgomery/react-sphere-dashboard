const express = require('express');
const router = express.Router();
// const coordinator = require('../../services/coordinator');
const db = require('../middleware/database.js')
 
router.get('/influencersearch', async (req, res) => {
  const influencers = await require('../fetch/influencer-search.js')(db, {});
  res.status(200).json(influencers);
})

module.exports = router;