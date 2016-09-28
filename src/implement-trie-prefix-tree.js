class Trie {
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
  search(key) {
    let ptr = this;
    for (let i = 0; i < key.length; i++) {
      const character = key[i];
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
}

const trie = new Trie();
trie.insert('h');
trie.insert('world');
console.log(trie.search('h'));
console.log(trie.search('worl'));
console.log(trie.search('world'));
console.log(trie.startsWith('wor'));
// const trie = new Trie();
// trie.insert('a');
// trie.search('a');
// console.log(trie.startsWith('a'));
