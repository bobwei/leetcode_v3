/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  if (!s.length) {
    return 0;
  }
  const splitS = [...s];
  const counts = {};
  for (let i = 0; i < splitS.length; i++) {
    if (!counts[splitS[i]]) {
      counts[splitS[i]] = 0;
    }
    counts[splitS[i]] += 1;
  }
  let length = 0;
  for (const key in counts) {
    if (counts[key] > 1) {
      length += Math.floor(counts[key] / 2);
    }
  }
  length = length * 2;
  if (Object.keys(counts).some(key => counts[key] % 2 === 1)) {
    length += 1;
  }

  return length;
};

export default longestPalindrome;
