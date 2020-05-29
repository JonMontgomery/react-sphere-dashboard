require('dotenv').config({ path: '../../../config/.env' });
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const assert = chai.assert;
const expect = chai.expect;
const to = chai.to;
const influencer_search = require('../../../api/fetch/influencer-search.js');
const server = require('../../../server');

describe('influencer_search', () => {
  it('can reach the database', () => {
    return influencer_search().should.eventually.be.true;
    // expect(influencer_search()).to.equal();
  });
});