const express = require('express');
const router = express.Router();
const coordinator = require('../../services/coordinator');
 
router.get('/testquery', async (req, res) => {
  const ret = await coordinator('search');
  res.json(ret);
})


module.exports = router;