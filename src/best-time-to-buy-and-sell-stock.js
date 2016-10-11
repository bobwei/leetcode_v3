/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  if (!prices.length) {
    return 0;
  }
  let [max] = prices;
  let [min] = prices;
  let theMaxProfit = 0;
  for (const price of prices) {
    if (price < min) {
      min = price;
      max = price;
    } else {
      if (price > max) {
        max = price;
        theMaxProfit = Math.max(theMaxProfit, max - min);
      }
    }
  }
  return theMaxProfit;
};

export default maxProfit;
