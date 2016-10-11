/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const currentProfit = prices[i] - prices[i - 1];
    if (currentProfit > 0) {
      profit += currentProfit;
    }
  }
  return profit;
};

export default maxProfit;
