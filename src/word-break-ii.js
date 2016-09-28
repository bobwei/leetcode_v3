/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
const dfs = (s, f, wordDict, startIndex = 0, output = [], path = []) => {
  if (startIndex >= s.length) {
    output.push([...path]);
    return output;
  }
  for (let i = startIndex + 1; i < s.length + 1; i++) {
    if (f[i]) {
      const character = s.slice(startIndex, i);
      if (wordDict.has(character)) {
        path.push(character);
        dfs(s, f, wordDict, i, output, path);
        path.pop();
      }
    }
  }
  return output;
};

const wordBreak = (s, wordDict) => {
  const f = [...Array(s.length + 1)].map(() => false);
  f[0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (f[j]) {
        const word = s.slice(j, i);
        if (wordDict.has(word)) {
          f[i] = true;
        }
      }
    }
  }
  if (f[s.length]) {
    return dfs(s, f, wordDict).map(words => words.join(' '));
  }
  return [];
};

console.log(wordBreak('leetcode', new Set(['leet', 'code'])));
console.log(wordBreak('leetcodewsss', new Set(['leet', 'code', 'wsss'])));
console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', new Set(['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'])));
