const round = require('../src/index');
const expect = require('chai').expect;

describe('Util functions', () => {
  describe('Round number', () => {

  });

  describe('Round number up', () => {
    it('Should pass', () => {
      expect(round.up(1.234, 2)).to.equal(1.24);
    });
  });

  describe('Round number down', () => {
    it('Should pass', () => {
      expect(round.down(1.234, 2)).to.equal(1.23);
    });
  });

  describe('Number to nearest next value', () => {
    it('Should pass', () => {
      expect(round.next(11, 20)).to.equal(20);
      expect(round.next(111, 100)).to.equal(200);
      expect(round.next(111.43, 50)).to.equal(150);
      expect(round.next(111.63, 0.50, 1)).to.equal(112);
    });
  });
});
