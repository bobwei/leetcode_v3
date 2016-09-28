/* eslint-disable max-len */
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const f = [...Array(s.length + 1)].map(() => false);
  f[0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j ++) {
      if (f[j]) {
        const word = s.slice(j, i);
        if (wordDict.has(word)) {
          f[i] = true;
        }
      }
    }
  }
  return f[s.length];
};

console.log(wordBreak('leetcode', new Set(['leet', 'code'])));
console.log(wordBreak('leetcodewsss', new Set(['leet', 'code', 'wsss'])));
console.log(wordBreak('baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', new Set(['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'])));
console.log(wordBreak('catsanddog', new Set(['cat', 'cats', 'and', 'sand', 'dog', 'ddog'])));
