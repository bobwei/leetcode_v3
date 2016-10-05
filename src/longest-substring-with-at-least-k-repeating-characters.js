/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const longestSubstring = (str, k) => {
  if (!str.length) {
    return 0;
  }
  const counts = {};
  for (const s of str) {
    if (!counts[s]) {
      counts[s] = 0;
    }
    counts[s] += 1;
  }
  const [substrLessThanK] = Object.keys(counts).filter(key => counts[key] < k);
  if (!substrLessThanK) {
    return str.length;
  }
  let max = -Infinity;
  for (const substring of str.split(substrLessThanK)) {
    max = Math.max(max, longestSubstring(substring, k));
  }
  return max;
};

export default longestSubstring;
