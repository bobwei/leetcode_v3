/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  const output = [];
  const splitS = s.split('');
  const cycleLength = Math.max(2 * numRows - 2, 1);
  for (let i = 0; i < numRows; i++) {
    let wordsSet = new Set();
    for (let c = 0; c < Math.ceil(splitS.length / cycleLength); c++) {
      const w1 = c * cycleLength + i;
      if (w1 < (c + 1) * cycleLength && w1 < s.length) {
        wordsSet.add(w1);
      }
      const w2 = (c + 1) * cycleLength - i;
      if (w2 < (c + 1) * cycleLength && w2 < s.length) {
        wordsSet.add(w2);
      }
    }
    output.push([...wordsSet].map(i => splitS[i]).join(''));
  }
  return output.join('');
};

export default convert
