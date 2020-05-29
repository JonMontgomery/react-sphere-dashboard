const express = require('express');
const router = express.Router();
const coordinator = require('../../services/coordinator');
 
router.get('/testquery', async (req, res) => {
  const influencers = await coordinator('search');
  res.status(200).json(influencers);
})

module.exports = router;