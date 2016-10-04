import maxProduct from './maximum-product-subarray';

describe('test maxProduct', () => {
  it('can get maxProduct', () => {
    expect(maxProduct(JSON.parse('[2,3,-2,4]'))).toBe(6);
    expect(maxProduct([2, 3, -2, 4, -2, 4, -1, -2])).toBe(96 * 4 * 2);
    expect(maxProduct([])).toBe(0);
    expect(maxProduct([1])).toBe(1);
  });
});
