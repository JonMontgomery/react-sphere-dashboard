const influencer_search = require('../api/fetch/influencer-search');

async function coordinator(queryType){
  switch(queryType){
    case 'search':
      const ret = await influencer_search();
      return ret;
    default:
      break;
  }
}

module.exports = coordinator;