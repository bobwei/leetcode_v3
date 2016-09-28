/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const repeatCount = {};
  const firstAppearance = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!repeatCount[c]) {
      repeatCount[c] = 0;
      firstAppearance[c] = i;
    }
    repeatCount[c] += 1;
  }
  const keys = Object.keys(repeatCount);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (repeatCount[key] === 1) {
      return firstAppearance[key];
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('loveleetcodev'));
console.log(firstUniqChar(''));
