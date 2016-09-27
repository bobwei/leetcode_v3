/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
  f(n) = min(
    (amount - c[i] >= 0) ? 1 + f(amount - c[i]) : 0,
  )
*/
const coinChange = (coins, amount) => {
  if (!coins.length) {
    return -1;
  }
  const f = [...Array(amount + 1)].map(() => 0);
  for (let a = 1; a <= amount; a++) {
    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      if (a - coins[i] >= 0) {
        min = Math.min(min, 1 + f[a - coins[i]]);
      }
    }
    f[a] = min;
  }
  return (f[amount] !== Infinity) ? f[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
