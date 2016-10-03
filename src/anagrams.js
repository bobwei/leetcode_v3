/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const results = {};
  strs.forEach((str) => {
    const key = str.split('').slice().sort();
    if (!results[key]) {
      results[key] = [];
    }
    results[key].push(str);
  });
  return Object.keys(results).map((key) => results[key]);
};

export default groupAnagrams;
