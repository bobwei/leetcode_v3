import maxSubArray from './maximum-subarray';

describe('test maxSubArray', () => {
  it('can get maxSubArray', () => {
    expect(maxSubArray(JSON.parse('[-2,1,-3,4,-1,2,1,-5,4]'))).toBe(6);
    expect(maxSubArray([])).toBe(0);
    expect(maxSubArray([1])).toBe(1);
  });
});
