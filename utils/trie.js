/* eslint-disable no-restricted-syntax, guard-for-in */
export default class Trie {
  constructor() {
    this.children = {};
    this.isLeaf = false;
  }

  /**
   * @param {string} word
   * @return {void}
   * Inserts a word into the trie.
   */
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

  /**
   * @param {string} word
   * @return {boolean}
   * Returns if the word is in the trie.
   */
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

  /**
   * @param {string} prefix
   * @return {boolean}
   * Returns if there is any word in the trie
   * that starts with the given prefix.
   */
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

  /**
   * @param {string} prefix
   * @return {array}
   * Returns words
   * that starts with the given prefix.
   */
  suggest(prefix) {
    let ptr = this;
    for (let i = 0; i < prefix.length; i++) {
      const character = prefix[i];
      if (!ptr.children[character]) {
        return [];
      }
      ptr = ptr.children[character];
    }
    return ptr.dfs().map(postfix => `${prefix}${postfix}`);
  }

  /**
   * @param {void}
   * @return {array}
   * Returns words
   * that starts with the given node.
   */
  dfs(output = [], path = []) {
    if (!Object.keys(this.children).length || this.isLeaf) {
      output.push(path.join(''));
    }
    for (const key in this.children) {
      path.push(key);
      this.children[key].dfs(output, path);
      path.pop();
    }
    return output;
  }

  /**
   * @param {void}
   * @return {string}
   * Returns longest common prefix.
   */
  _lcp(path = []) {
    if (Object.keys(this.children).length !== 1) {
      return [];
    }
    for (const key in this.children) {
      path.push(key);
      this.children[key]._lcp(path);
    }
    return path;
  }

  lcp() {
    return this._lcp().join('');
  }
}

if (require.main === module) {
  /* tests */
  const trie = new Trie();
  const words = ['hello', 'world', 'hel', 'worrr', 'abc', 'ab'];
  words.forEach(w => trie.insert(w));
  console.log(`search('world') = ${trie.search('world')}, expected = ${true}`);
  console.log(`startsWith('wor') = ${trie.startsWith('wor')}, expected = ${true}`);
  console.log('dfs() =', trie.dfs(), 'expected =', words);
  console.log('suggest("he") =', trie.suggest('he'), 'expected =', ['hel', 'hello']);
  console.log('suggest("") =', trie.suggest(''), 'expected =', words);
  console.log('suggest("123") =', trie.suggest('123'), 'expected =', []);
  const trie2 = new Trie();
  const words2 = ['hello', 'hella', 'hellb'];
  words2.forEach(w => trie2.insert(w));
  console.log(trie2.lcp());
}
