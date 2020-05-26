const pool = require('../middleware/database');

async function influencer_search(){
  const rows = await pool.query('SELECT * FROM profile LIMIT 3');
  console.log(rows);
  return rows;
}

module.exports = influencer_search;