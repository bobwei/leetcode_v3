/* eslint-disable arrow-body-style */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  return n
    .toString(2)
    .split('')
    .map(i => parseInt(i, 10))
    .reduce((s, v) => s + v, 0);
};

console.log(hammingWeight(11));
