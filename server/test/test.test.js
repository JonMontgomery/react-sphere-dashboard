const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const to = chai.to;
const test = (x,y) => x + y;

describe('test', () => {
  it('sample test', () => {
    // assert.equal(server());
    expect(1 + 2).to.equal(3);
  });
});