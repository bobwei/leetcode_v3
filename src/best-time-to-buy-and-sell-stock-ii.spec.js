import maxProfit from './best-time-to-buy-and-sell-stock-ii';

describe('test maxProfit', () => {
  it('can get maxProfit', () => {
    expect(maxProfit([1, 3, 5, 4, 2, 9])).toBe(11);
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });
});
