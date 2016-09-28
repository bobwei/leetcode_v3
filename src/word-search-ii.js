/* eslint-disable no-param-reassign */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class Trie {
  constructor() {
    this.children = {};
    this.isLeaf = false;
  }

  insert(word) {
    let ptr = this;
    for (let i = 0; i < word.length; i++) {
      const character = word[i];
      if (!ptr.children[character]) {
        ptr.children[character] = new Trie();
      }
      ptr = ptr.children[character];
    }
    ptr.isLeaf = true;
    return this;
  }

  search(word) {
    let ptr = this;
    for (let i = 0; i < word.length; i++) {
      const character = word[i];
      if (!ptr.children[character]) {
        return false;
      }
      ptr = ptr.children[character];
    }
    return ptr.isLeaf;
  }

  startsWith(prefix) {
    let ptr = this;
    for (let i = 0; i < prefix.length; i++) {
      const character = prefix[i];
      if (!ptr.children[character]) {
        return false;
      }
      ptr = ptr.children[character];
    }
    return true;
  }
}

const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (board, words, startI, startJ, trie, path, pathSet, output = []) => {
  if (trie.search(path)) {
    output.push(path.join(''));
  }
  for (let k = 0; k < deltas.length; k++) {
    const [di, dj] = deltas[k];
    const i = startI + di;
    const j = startJ + dj;
    if (board[i] && board[i][j] && !pathSet[i][j]) {
      const character = board[i][j];
      path.push(character);
      if (trie.startsWith(path)) {
        pathSet[i][j] = true;
        dfs(board, words, i, j, trie, path, pathSet, output);
        pathSet[i][j] = false;
      }
      path.pop();
    }
  }
  return output;
};

const findWords = (board, words) => {
  const trie = new Trie();
  words.forEach(w => trie.insert(w));
  const m = board.length;
  const n = board[0].length;
  const output = [];
  const outputSet = {};
  const pathSet = [...Array(m)].map(() => [...Array(n)].map(() => false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const character = board[i][j];
      if (trie.startsWith(character)) {
        const path = [character];
        pathSet[i][j] = true;
        const results = dfs(board, words, i, j, trie, path, pathSet);
        pathSet[i][j] = false;
        results.forEach((result) => {
          if (!outputSet[result]) {
            outputSet[result] = true;
            output.push(result);
          }
        });
      }
    }
  }
  return output;
};

console.log(findWords([
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
], ['oath', 'pea', 'eat', 'rain', 'htakh', 'htak']));
console.log(findWords([
  ['a', 'a', 'a'],
], ['aaa']));
console.log(findWords([
  ['a', 'a'],
], ['a']));
console.log(findWords([
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
], ['oath', 'pea', 'eat', 'rain']));
