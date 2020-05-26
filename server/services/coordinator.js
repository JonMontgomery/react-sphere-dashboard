const influencer_search = require('../api/fetch/influencer_search');

async function coordinator(queryType){
  switch(queryType){
    case 'search':
      const ret = await influencer_search();
      console.log(ret);
      return ret;
    default:
      break;
  }
}

module.exports = coordinator;